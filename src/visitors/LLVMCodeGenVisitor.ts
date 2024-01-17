import {
  ExpressionContext,
  FunctionDeclContext,
  ProgramContext,
  StatementContext,
} from "../antlr/GomParser";
import GomVisitor from "../antlr/GomVisitor";

/**
 * Generates LLVM IR from the AST.
 */
export class LLVMCodeGenVisitor extends GomVisitor<void> {
  // TODO
}
