import {
  AccessContext,
  CallContext,
  ExpressionContext,
  FunctionDeclContext,
  LetStatementContext,
  StatementBlockContext,
} from "../antlr/GomParser";
import GomVisitor from "../antlr/GomVisitor";
import { SemanticError } from "../semantics/Error";
import { ModuleResolver } from "./ModuleResolver";

enum GomType {
  INT = "int",
  STRING = "string",
  BOOL = "bool",
  NULL = "null",
}

const FUNCTION_KEY_PREFIX = "function_";

class TypeScope {
  parent: TypeScope | null = null;
  typeMap: Map<string, GomType> = new Map();
  functions: Map<string, FunctionDeclContext> = new Map();
  constructor(parent: TypeScope | null = null) {
    this.parent = parent;
  }
  getType(name: string): GomType | null {
    const type = this.typeMap.get(name);
    if (type) {
      return type;
    }
    if (this.parent) {
      return this.parent.getType(name);
    }
    return null;
  }
  getFunction(name: string): FunctionDeclContext | null {
    const functionDecl = this.functions.get(name);
    if (functionDecl) {
      return functionDecl;
    }
    if (this.parent) {
      return this.parent.getFunction(name);
    }
    return null;
  }
}

export class TypeChecker extends GomVisitor<GomType | null> {
  rootScope: TypeScope;
  currentScope: TypeScope;
  moduleResolver: ModuleResolver;

  constructor({ moduleResolver }: { moduleResolver: ModuleResolver }) {
    super();
    this.moduleResolver = moduleResolver;
    this.rootScope = new TypeScope();
    this.currentScope = this.rootScope;
    debugger;
  }

  _stringToType = (type: string) => {
    switch (type) {
      case "int":
        return GomType.INT;
      case "string":
        return GomType.STRING;
      case "bool":
        return GomType.BOOL;
      default:
        return GomType.NULL;
    }
  };

  visitFunctionDecl = (ctx: FunctionDeclContext) => {
    this.currentScope.functions.set(ctx.IDENTIFIER().getText(), ctx);
    this.currentScope.typeMap.set(
      FUNCTION_KEY_PREFIX + ctx.IDENTIFIER().getText(),
      this._stringToType(ctx.TYPE().getText())
    );
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
    return GomType.NULL;
  };

  visitLetStatement = (ctx: LetStatementContext) => {
    const type = this.visit(ctx.expression());
    this.currentScope.typeMap.set(ctx.IDENTIFIER().getText(), type);
    return type;
  };

  visitExpression = (ctx: ExpressionContext) => {
    if (ctx.IDENTIFIER()) {
      if (!ctx.expressionTail()) {
        const type = this.currentScope.getType(ctx.IDENTIFIER().getText());
        if (!type) {
          throw new SemanticError(
            `Variable ${ctx.IDENTIFIER().getText()} not declared`,
            ctx.getText(),
            ctx.start.line
          );
        }
        return type;
      } else {
        const leftType = this.currentScope.getType(ctx.IDENTIFIER().getText());
        const rightType = this.visit(ctx.expressionTail().expression());
        if (leftType !== rightType) {
          throw new SemanticError(
            `Type mismatch: ${leftType} and ${rightType}`,
            ctx.getText(),
            ctx.start.line
          );
        }
        return leftType;
      }
    } else if (ctx.NUMBER()) {
      if (!ctx.expressionTail()) {
        return GomType.INT;
      } else {
        const rightType = this.visit(ctx.expressionTail().expression());
        if (rightType !== GomType.INT) {
          throw new SemanticError(
            `Type mismatch: ${GomType.INT} and ${rightType}`,
            ctx.getText(),
            ctx.start.line
          );
        }
        return GomType.INT;
      }
    } else if (ctx.STRING_LITERAL()) {
      if (!ctx.expressionTail()) {
        return GomType.STRING;
      } else {
        const rightType = this.visit(ctx.expressionTail().expression());
        if (rightType !== GomType.STRING) {
          throw new SemanticError(
            `Type mismatch: ${GomType.STRING} and ${rightType}`,
            ctx.getText(),
            ctx.start.line
          );
        }
        return GomType.STRING;
      }
    } else if (ctx.BOOLEAN()) {
      if (!ctx.expressionTail()) {
        return GomType.BOOL;
      } else {
        const rightType = this.visit(ctx.expressionTail().expression());
        if (rightType !== GomType.BOOL) {
          throw new SemanticError(
            `Type mismatch: ${GomType.BOOL} and ${rightType}`,
            ctx.getText(),
            ctx.start.line
          );
        }
        return GomType.BOOL;
      }
    } else if (ctx.call()) {
      return this.visit(ctx.call());
    } else if (ctx.access()) {
      return this.visit(ctx.access());
    }
  };

  visitCall = (ctx: CallContext) => {
    const functionName = ctx.IDENTIFIER().getText();
    const functionDecl = this.currentScope.getFunction(functionName);
    if (!functionDecl) {
      throw new SemanticError(
        `Function ${functionName} not declared`,
        ctx.getText(),
        ctx.start.line
      );
    }
    const functionType = this.currentScope.getType(
      FUNCTION_KEY_PREFIX + functionName
    );
    const argumentTypeList = ctx
      .expression_list()
      .map((expression) => this.visit(expression));

    const expectedTypeList = functionDecl
      .typedIdentifier_list()
      .map((arg) => this._stringToType(arg.TYPE().getText()));

    if (argumentTypeList.length !== expectedTypeList.length) {
      throw new SemanticError(
        `Function ${functionName} expects ${expectedTypeList.length} arguments, but got ${argumentTypeList.length}`,
        ctx.getText(),
        ctx.start.line
      );
    }

    const newScope: TypeScope = new TypeScope(this.currentScope);

    for (let i = 0; i < argumentTypeList.length; i++) {
      if (argumentTypeList[i] !== expectedTypeList[i]) {
        throw new SemanticError(
          `Argument type mismatch: ${expectedTypeList[i]} and ${argumentTypeList[i]}`,
          functionDecl.typedIdentifier(i).getText(),
          ctx.start.line
        );
      }
      newScope.typeMap.set(
        functionDecl.typedIdentifier(i).IDENTIFIER().getText(),
        argumentTypeList[i]
      );
    }

    this.currentScope = newScope;
    const returnType = this.visit(functionDecl.statementBlock());
    if (returnType !== functionType) {
      throw new SemanticError(
        `Return type mismatch: ${functionType} and ${returnType}`,
        ctx.getText(),
        ctx.start.line
      );
    }
    this.currentScope = this.currentScope.parent;

    return functionType;
  };

  visitAccess = (ctx: AccessContext) => {
    const moduleName = ctx.IDENTIFIER().getText();
    const moduleCtx = this.moduleResolver.getModule(moduleName);
    if (!moduleCtx) {
      throw new SemanticError(
        `Module ${moduleName} not found`,
        ctx.getText(),
        ctx.start.line
      );
    }
    const moduleTypeChecker = new TypeChecker({
      moduleResolver: this.moduleResolver,
    });
    moduleTypeChecker.visit(moduleCtx);

    return (
      moduleTypeChecker.currentScope.getType(
        FUNCTION_KEY_PREFIX + ctx.call().IDENTIFIER().getText()
      ) || GomType.NULL
    );
  };
}
