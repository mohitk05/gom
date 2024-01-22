import {
  CallContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionDeclContext,
  IfStatementContext,
  ImportStatementContext,
  LetStatementContext,
  ProgramContext,
  ReturnStatementContext,
  StatementBlockContext,
  StatementContext,
} from "../antlr/GomParser";
import GomVisitor from "../antlr/GomVisitor";
import { SemanticError } from "../semantics/Error";
import { ExpressionResult, GomFunction, Scope } from "../semantics/Scope";
import { ModuleResolver } from "./ModuleResolver";

type ModulePublicItem = GomFunction;

export class ExecVisitor extends GomVisitor<ExpressionResult> {
  moduleName: string;
  rootScope: Scope;
  currentScope: Scope;
  importedModules: Map<string, ModuleVisitor> = new Map();

  moduleResolver: ModuleResolver;

  standardLibraryFunctions = ["print", "toString"];

  constructor({
    moduleResolver,
    name,
  }: {
    moduleResolver: ModuleResolver;
    name?: string;
  }) {
    super();
    this.moduleName = name || "main";
    this.moduleResolver = moduleResolver;
    this.rootScope = new Scope();
    this.currentScope = this.rootScope;
  }

  _resolveModule = (moduleName: string) => {
    if (this.importedModules.has(moduleName)) {
      return this.importedModules.get(moduleName);
    } else {
      try {
        const visitor = new ModuleVisitor({
          name: moduleName,
          moduleResolver: this.moduleResolver,
        });
        visitor.visit(this.moduleResolver.getModule(moduleName));
        this.importedModules.set(moduleName, visitor);
        visitor.getPublicItems().forEach((value, key) => {
          // Handle other imports later
          this.rootScope.addFunction(key, value.ctx);
        });
        return visitor.getPublicItems();
      } catch (e) {
        throw new SemanticError(
          `Module "${moduleName}" not found`,
          moduleName,
          0
        );
      }
    }
  };

  visitProgram = (ctx: ProgramContext) => {
    // Ignoring import statements for now
    this.visitChildren(ctx);
    return null;
  };

  visitImportStatement = (ctx: ImportStatementContext) => {
    const moduleName = ctx.IDENTIFIER().getText();
    this._resolveModule(moduleName);
    return null;
  };

  visitFunctionDecl = (ctx: FunctionDeclContext) => {
    this.currentScope.addFunction(ctx.IDENTIFIER().getText(), ctx);
    return null;
  };

  visitStatementBlock = (ctx: StatementBlockContext) => {
    const statements = ctx.statement_list();
    if (statements[statements.length - 1].returnStatement()) {
      statements
        .slice(0, statements.length - 1)
        .forEach((statement) => this.visit(statement));
      const returnType = this.visit(
        statements[statements.length - 1].returnStatement().expression()
      );
      return returnType;
    }

    statements.forEach((statement) => this.visit(statement));
    return null;
  };

  visitStatement = (ctx: StatementContext) => {
    if (ctx.letStatement()) {
      return this.visit(ctx.letStatement());
    } else if (ctx.returnStatement()) {
      return this.visit(ctx.returnStatement());
    } else if (ctx.ifStatement()) {
      return this.visit(ctx.ifStatement());
    } else if (ctx.expressionStatement()) {
      return this.visit(ctx.expressionStatement());
    }
  };

  visitLetStatement = (ctx: LetStatementContext) => {
    const name = ctx.IDENTIFIER().getText();
    const value = this.visit(ctx.expression());
    this.currentScope.addVariable(name, undefined, value);
    return null;
  };

  visitReturnStatement = (ctx: ReturnStatementContext) => {
    return this.visit(ctx.expression());
  };

  visitIfStatement = (ctx: IfStatementContext) => {
    const condition = this.visit(ctx.expression());
    // This will not work. Keeping it for now.
    if (condition) {
      return this.visit(ctx.statementBlock(0));
    } else {
      return this.visit(ctx.statementBlock(1));
    }
  };

  visitExpressionStatement = (ctx: ExpressionStatementContext) => {
    return this.visitChildren(ctx);
  };

  _visitExpression_Identifier = (ctx: ExpressionContext) => {
    const name = ctx.IDENTIFIER().getText();
    const variable = this.currentScope.getVariable(name);

    if (ctx.expressionTail()) {
      const operator = ctx.expressionTail().OPERATOR().getText();
      const rightSide = this.visit(ctx.expressionTail().expression());
      try {
        const result = this._evaluateExpression(
          variable.value,
          operator,
          rightSide,
          {
            lineNumber: ctx.start.line,
            token: ctx.getText(),
          }
        );

        return result;
      } catch (e) {
        // Simply throw
        throw e;
      }
    }

    if (variable) {
      return variable.value;
    } else {
      throw new SemanticError(
        `Variable ${name} not defined`,
        name,
        ctx.start.line
      );
    }
  };

  _visitExpression_Number = (ctx: ExpressionContext) => {
    if (ctx.expressionTail()) {
      const operator = ctx.expressionTail().OPERATOR().getText();
      const rightSide = this.visit(ctx.expressionTail().expression());
      try {
        const result = this._evaluateExpression(
          Number(ctx.NUMBER().getText()),
          operator,
          rightSide,
          {
            lineNumber: ctx.start.line,
            token: ctx.getText(),
          }
        );

        return result;
      } catch (e) {
        // Simply throw
        throw e;
      }
    } else {
      return Number(ctx.NUMBER().getText());
    }
  };

  _visitExpression_StringLiteral = (ctx: ExpressionContext) => {
    const withoutQuotes = ctx.STRING_LITERAL().getText().replace(/"/g, "");
    if (ctx.expressionTail()) {
      const operator = ctx.expressionTail().OPERATOR().getText();
      const rightSide = this.visit(ctx.expressionTail().expression());
      try {
        const result = this._evaluateExpression(
          withoutQuotes,
          operator,
          rightSide,
          {
            lineNumber: ctx.start.line,
            token: ctx.getText(),
          }
        );

        return result;
      } catch (e) {
        // Simply throw
        throw e;
      }
    } else {
      return withoutQuotes;
    }
  };

  _visitExpression_Boolean = (ctx: ExpressionContext) => {
    if (ctx.expressionTail()) {
      const operator = ctx.expressionTail().OPERATOR().getText();
      const rightSide = this.visit(ctx.expressionTail().expression());
      try {
        const result = this._evaluateExpression(
          Boolean(ctx.BOOLEAN().getText()),
          operator,
          rightSide,
          {
            lineNumber: ctx.start.line,
            token: ctx.getText(),
          }
        );

        return result;
      } catch (e) {
        // Simply throw
        throw e;
      }
    } else {
      return Boolean(ctx.BOOLEAN().getText());
    }
  };

  _isStdLibraryFunction = (name: string) => {
    return this.standardLibraryFunctions.includes(name);
  };

  _visitStdLibraryFunction = (name: string, ctx: CallContext) => {
    const args = ctx.expression_list();
    const argValues = args.map((arg) => this.visit(arg));
    return this._execStdLibraryFunction(name, argValues);
  };

  _execStdLibraryFunction = (name: string, argValues: ExpressionResult[]) => {
    switch (name) {
      case "print":
        console.log(...argValues);
        return null;
      case "toString":
        return argValues[0].toString();
      default:
        return null;
    }
  };

  _visitExpression_Call = (ctx: CallContext) => {
    const name = ctx.IDENTIFIER().getText();
    if (this._isStdLibraryFunction(name)) {
      return this._visitStdLibraryFunction(name, ctx);
    }
    const fn = this.currentScope.getFunction(name);
    if (fn) {
      const args = ctx.expression_list();
      const argValues = args.map((arg) => this.visit(arg));
      const argNames = fn.ctx
        .typedIdentifier_list()
        .map((arg) => arg.IDENTIFIER().getText());

      const scope = new Scope(this.currentScope);
      for (let i = 0; i < argNames.length; i++) {
        scope.addVariable(argNames[i], undefined, argValues[i]);
      }
      this.currentScope = scope;
      const result = this.visit(fn.ctx.statementBlock());
      this.currentScope = this.currentScope.parent;
      return result;
    } else {
      throw new SemanticError(
        `Function "${name}" not defined`,
        name,
        ctx.start.line
      );
    }
  };

  _visitExpression_Call_withArgs = (
    functionName: string,
    args: ExpressionResult[]
  ) => {
    if (this._isStdLibraryFunction(functionName)) {
      return this._execStdLibraryFunction(functionName, args);
    }
    const fn = this.currentScope.getFunction(functionName);
    if (fn) {
      const argNames = fn.ctx
        .typedIdentifier_list()
        .map((arg) => arg.IDENTIFIER().getText());

      const scope = new Scope(this.currentScope);
      for (let i = 0; i < argNames.length; i++) {
        scope.addVariable(argNames[i], undefined, args[i]);
      }
      this.currentScope = scope;
      const result = this.visit(fn.ctx.statementBlock());
      this.currentScope = this.currentScope.parent;
      return result;
    } else {
      throw new SemanticError(
        `Function "${functionName}" not defined`,
        functionName,
        0
      );
    }
  };

  _visitExpression_Access = (ctx: ExpressionContext) => {
    const name = ctx.access().IDENTIFIER().getText();
    if (this.importedModules.has(name)) {
      // imported module call
      const gomModule = this.importedModules.get(name);
      if (
        !gomModule
          .getPublicItems()
          .has(ctx.access().call().IDENTIFIER().getText())
      ) {
        throw new SemanticError(
          `Function "${ctx
            .access()
            .call()
            .IDENTIFIER()
            .getText()}" not defined as public in module "${name}"`,
          ctx.access().call().IDENTIFIER().getText(),
          ctx.start.line
        );
      }

      const argValues = ctx
        .access()
        .call()
        .expression_list()
        .map((arg) => this.visit(arg));

      // Closure
      const oldRootScope = gomModule.rootScope;
      gomModule.rootScope.parent = this.currentScope;
      gomModule.rootScope = this.currentScope;
      const retVal = gomModule._visitExpression_Call_withArgs(
        ctx.access().call().IDENTIFIER().getText(),
        argValues
      );
      gomModule.rootScope = oldRootScope;
      return retVal;
    }
    return null;
  };

  visitExpression = (ctx: ExpressionContext) => {
    if (ctx.IDENTIFIER()) {
      return this._visitExpression_Identifier(ctx);
    } else if (ctx.NUMBER()) {
      return this._visitExpression_Number(ctx);
    } else if (ctx.STRING_LITERAL()) {
      return this._visitExpression_StringLiteral(ctx);
    } else if (ctx.BOOLEAN()) {
      return this._visitExpression_Boolean(ctx);
    } else if (ctx.call()) {
      return this._visitExpression_Call(ctx.call());
    } else if (ctx.access()) {
      return this._visitExpression_Access(ctx);
    } else {
      throw new SemanticError(
        `Invalid expression "${ctx.getText()}"`,
        ctx.getText(),
        ctx.start.line
      );
    }
  };

  _evaluateExpression(
    leftSide: ExpressionResult,
    operator: string,
    rightSide: ExpressionResult,
    errorInfo: {
      lineNumber: number;
      token: string;
    }
  ): ExpressionResult {
    switch (operator) {
      case "+":
        if (typeof leftSide === "number" && typeof rightSide === "number") {
          return leftSide + rightSide;
        } else if (
          typeof leftSide === "string" &&
          typeof rightSide === "string"
        ) {
          return leftSide + rightSide;
        }
        break;
      case "-":
        if (typeof leftSide === "number" && typeof rightSide === "number") {
          return leftSide - rightSide;
        }
        break;
      case "*":
        if (typeof leftSide === "number" && typeof rightSide === "number") {
          return leftSide * rightSide;
        }
        break;
      case "/":
        if (typeof leftSide === "number" && typeof rightSide === "number") {
          return leftSide / rightSide;
        }
        break;
      default:
        throw new SemanticError(
          `Operator ${operator} not supported`,
          errorInfo.token,
          errorInfo.lineNumber
        );
    }

    throw new SemanticError(
      `Type mismatch for operator ${operator}`,
      errorInfo.token,
      errorInfo.lineNumber
    );
  }
}

class ModuleVisitor extends ExecVisitor {
  private publicItems: Map<string, ModulePublicItem> = new Map();

  getPublicItems() {
    return this.publicItems;
  }

  visitFunctionDecl = (ctx: FunctionDeclContext) => {
    const name = ctx.IDENTIFIER().getText();
    if (ctx.PUB()) {
      this.publicItems.set(name, { ctx });
    }
    this.currentScope.addFunction(name, ctx);
    return null;
  };
}
