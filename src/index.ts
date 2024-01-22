import { readFileSync } from "fs";
import GomLexer from "./antlr/GomLexer";
import GomParser from "./antlr/GomParser";
import { CharStream, CommonTokenStream } from "antlr4";
import { ExecVisitor } from "./visitors/ExecVisitor";
import { TypeChecker } from "./visitors/TypeChecker";
import { ModuleResolver } from "./visitors/ModuleResolver";

function main() {
  const programPath = process.argv[2];
  const program = readFileSync(programPath, "utf8");

  const inputStream = new CharStream(program);
  const lexer = new GomLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);

  const parser = new GomParser(tokenStream);

  const moduleResolver = new ModuleResolver();
  moduleResolver.visit(parser.program());

  parser.reset();

  const typeChecker = new TypeChecker({ moduleResolver });
  typeChecker.visit(parser.program());

  parser.reset();

  const visitor = new ExecVisitor({ moduleResolver });
  visitor.visit(parser.program());
}

main();
