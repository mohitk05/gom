// Generated from Gom.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./GomParser";
import { ImportStatementContext } from "./GomParser";
import { FunctionDeclContext } from "./GomParser";
import { TypedIdentifierContext } from "./GomParser";
import { StatementBlockContext } from "./GomParser";
import { StatementContext } from "./GomParser";
import { LetStatementContext } from "./GomParser";
import { ReturnStatementContext } from "./GomParser";
import { IfStatementContext } from "./GomParser";
import { ExpressionStatementContext } from "./GomParser";
import { ExpressionContext } from "./GomParser";
import { ExpressionTailContext } from "./GomParser";
import { CallContext } from "./GomParser";
import { AccessContext } from "./GomParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GomParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GomVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GomParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.typedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedIdentifier?: (ctx: TypedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.statementBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementBlock?: (ctx: StatementBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.letStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStatement?: (ctx: LetStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.expressionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionTail?: (ctx: ExpressionTailContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;
	/**
	 * Visit a parse tree produced by `GomParser.access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess?: (ctx: AccessContext) => Result;
}

