import { CharStream, CommonTokenStream } from "antlr4";
import GomParser, {
  ImportStatementContext,
  ProgramContext,
} from "../antlr/GomParser";
import GomVisitor from "../antlr/GomVisitor";
import { GomFunction } from "../semantics/Scope";
import GomLexer from "../antlr/GomLexer";
import { readFileSync } from "fs";
import { SemanticError } from "../semantics/Error";

type ModuleStartContext = ProgramContext;
const MODULE_PATH_PREFIX = "./src/";

export class ModuleResolver extends GomVisitor<void> {
  private modules: Map<string, ModuleStartContext> = new Map();

  getModule(moduleName: string) {
    return this.modules.get(moduleName);
  }

  visitImportStatement = (ctx: ImportStatementContext) => {
    const moduleName = ctx.IDENTIFIER().getText();
    this._resolveModule(moduleName);
  };

  _resolveModule = (moduleName: string) => {
    if (this.modules.has(moduleName)) {
      return this.modules.get(moduleName);
    } else {
      try {
        const modulePath = MODULE_PATH_PREFIX + moduleName + ".gom";
        const inputStream = new CharStream(readFileSync(modulePath, "utf8"));
        const lexer = new GomLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new GomParser(tokenStream);
        const programCtx = parser.program();
        this.modules.set(moduleName, programCtx);
        return programCtx;
      } catch (e) {
        throw new SemanticError(
          `Module "${moduleName}" not found`,
          moduleName,
          0
        );
      }
    }
  };
}
