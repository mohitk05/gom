import { readFileSync } from "fs";
import GomLexer from "./antlr/GomLexer";
import GomParser from "./antlr/GomParser";
import { CharStream, CommonTokenStream } from "antlr4";
import { ExecVisitor } from "./visitors/ExecVisitor";

function main() {
  const programPath = process.argv[2];
  const program = readFileSync(programPath, "utf8");

  const inputStream = new CharStream(program);
  const lexer = new GomLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);

  const parser = new GomParser(tokenStream);
  const visitor = new ExecVisitor();
  visitor.visit(parser.program());
}

main();
