// Generated from Gom.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `GomParser`.
 */
export default class GomListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GomParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.typedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypedIdentifier?: (ctx: TypedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.typedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypedIdentifier?: (ctx: TypedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	enterStatementBlock?: (ctx: StatementBlockContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	exitStatementBlock?: (ctx: StatementBlockContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.letStatement`.
	 * @param ctx the parse tree
	 */
	enterLetStatement?: (ctx: LetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.letStatement`.
	 * @param ctx the parse tree
	 */
	exitLetStatement?: (ctx: LetStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.expressionTail`.
	 * @param ctx the parse tree
	 */
	enterExpressionTail?: (ctx: ExpressionTailContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.expressionTail`.
	 * @param ctx the parse tree
	 */
	exitExpressionTail?: (ctx: ExpressionTailContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;
	/**
	 * Enter a parse tree produced by `GomParser.access`.
	 * @param ctx the parse tree
	 */
	enterAccess?: (ctx: AccessContext) => void;
	/**
	 * Exit a parse tree produced by `GomParser.access`.
	 * @param ctx the parse tree
	 */
	exitAccess?: (ctx: AccessContext) => void;
}

