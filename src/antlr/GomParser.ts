// Generated from Gom.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import GomListener from "./GomListener.js";
import GomVisitor from "./GomVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class GomParser extends Parser {
	public static readonly BOOLEAN = 1;
	public static readonly PUB = 2;
	public static readonly LET = 3;
	public static readonly FUNCTION = 4;
	public static readonly RETURN = 5;
	public static readonly IMPORT = 6;
	public static readonly IF = 7;
	public static readonly ELSE = 8;
	public static readonly OPERATOR = 9;
	public static readonly DOT = 10;
	public static readonly QUOTE = 11;
	public static readonly EQ = 12;
	public static readonly LEFTPAREN = 13;
	public static readonly RIGHTPAREN = 14;
	public static readonly LEFTBRACE = 15;
	public static readonly RIGHTBRACE = 16;
	public static readonly COMMA = 17;
	public static readonly SEMICOLON = 18;
	public static readonly IDENTIFIER = 19;
	public static readonly NUMBER = 20;
	public static readonly DIGIT = 21;
	public static readonly LETTER = 22;
	public static readonly STRING_LITERAL = 23;
	public static readonly WHITE_SPACE = 24;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_importStatement = 1;
	public static readonly RULE_functionDecl = 2;
	public static readonly RULE_statementBlock = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_letStatement = 5;
	public static readonly RULE_returnStatement = 6;
	public static readonly RULE_ifStatement = 7;
	public static readonly RULE_expressionStatement = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_expressionTail = 10;
	public static readonly RULE_call = 11;
	public static readonly RULE_access = 12;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'pub'", "'let'", 
                                                            "'fn'", "'return'", 
                                                            "'import'", 
                                                            "'if'", "'else'", 
                                                            null, "'.'", 
                                                            "'\"'", "'='", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "','", "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "BOOLEAN", 
                                                             "PUB", "LET", 
                                                             "FUNCTION", 
                                                             "RETURN", "IMPORT", 
                                                             "IF", "ELSE", 
                                                             "OPERATOR", 
                                                             "DOT", "QUOTE", 
                                                             "EQ", "LEFTPAREN", 
                                                             "RIGHTPAREN", 
                                                             "LEFTBRACE", 
                                                             "RIGHTBRACE", 
                                                             "COMMA", "SEMICOLON", 
                                                             "IDENTIFIER", 
                                                             "NUMBER", "DIGIT", 
                                                             "LETTER", "STRING_LITERAL", 
                                                             "WHITE_SPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "importStatement", "functionDecl", "statementBlock", "statement", 
		"letStatement", "returnStatement", "ifStatement", "expressionStatement", 
		"expression", "expressionTail", "call", "access",
	];
	public get grammarFileName(): string { return "Gom.g4"; }
	public get literalNames(): (string | null)[] { return GomParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return GomParser.symbolicNames; }
	public get ruleNames(): string[] { return GomParser.ruleNames; }
	public get serializedATN(): number[] { return GomParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, GomParser._ATN, GomParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GomParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 26;
				this.importStatement();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 34;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 4:
					{
					this.state = 32;
					this.functionDecl();
					}
					break;
				case 1:
				case 3:
				case 5:
				case 7:
				case 19:
				case 20:
				case 23:
					{
					this.state = 33;
					this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 9961662) !== 0));
			this.state = 38;
			this.match(GomParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GomParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.match(GomParser.IMPORT);
			this.state = 41;
			this.match(GomParser.IDENTIFIER);
			this.state = 42;
			this.match(GomParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GomParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 44;
				this.match(GomParser.PUB);
				}
			}

			this.state = 47;
			this.match(GomParser.FUNCTION);
			this.state = 48;
			this.match(GomParser.IDENTIFIER);
			this.state = 49;
			this.match(GomParser.LEFTPAREN);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 50;
				this.match(GomParser.IDENTIFIER);
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===17) {
					{
					{
					this.state = 51;
					this.match(GomParser.COMMA);
					this.state = 52;
					this.match(GomParser.IDENTIFIER);
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 60;
			this.match(GomParser.RIGHTPAREN);
			this.state = 61;
			this.statementBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementBlock(): StatementBlockContext {
		let localctx: StatementBlockContext = new StatementBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GomParser.RULE_statementBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(GomParser.LEFTBRACE);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 64;
				this.statement();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 9961642) !== 0));
			this.state = 69;
			this.match(GomParser.RIGHTBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GomParser.RULE_statement);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 71;
				this.letStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 72;
				this.returnStatement();
				}
				break;
			case 1:
			case 19:
			case 20:
			case 23:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 73;
				this.expressionStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 74;
				this.ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letStatement(): LetStatementContext {
		let localctx: LetStatementContext = new LetStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GomParser.RULE_letStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(GomParser.LET);
			this.state = 78;
			this.match(GomParser.IDENTIFIER);
			this.state = 79;
			this.match(GomParser.EQ);
			this.state = 80;
			this.expression();
			this.state = 81;
			this.match(GomParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GomParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(GomParser.RETURN);
			this.state = 84;
			this.expression();
			this.state = 85;
			this.match(GomParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GomParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.match(GomParser.IF);
			this.state = 88;
			this.match(GomParser.LEFTPAREN);
			this.state = 89;
			this.expression();
			this.state = 90;
			this.match(GomParser.RIGHTPAREN);
			this.state = 91;
			this.statementBlock();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 92;
				this.match(GomParser.ELSE);
				this.state = 93;
				this.statementBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, GomParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.expression();
			this.state = 97;
			this.match(GomParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, GomParser.RULE_expression);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 99;
				this.match(GomParser.IDENTIFIER);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 100;
					this.expressionTail();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 103;
				this.match(GomParser.NUMBER);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 104;
					this.expressionTail();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 107;
				this.match(GomParser.STRING_LITERAL);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 108;
					this.expressionTail();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 111;
				this.match(GomParser.BOOLEAN);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 112;
					this.expressionTail();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 115;
				this.call();
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 116;
					this.expressionTail();
					}
				}

				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 119;
				this.access();
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 120;
					this.expressionTail();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionTail(): ExpressionTailContext {
		let localctx: ExpressionTailContext = new ExpressionTailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, GomParser.RULE_expressionTail);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(GomParser.OPERATOR);
			this.state = 126;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, GomParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this.match(GomParser.IDENTIFIER);
			this.state = 129;
			this.match(GomParser.LEFTPAREN);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 9961474) !== 0)) {
				{
				this.state = 130;
				this.expression();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===17) {
					{
					{
					this.state = 131;
					this.match(GomParser.COMMA);
					this.state = 132;
					this.expression();
					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 140;
			this.match(GomParser.RIGHTPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public access(): AccessContext {
		let localctx: AccessContext = new AccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, GomParser.RULE_access);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.match(GomParser.IDENTIFIER);
			this.state = 143;
			this.match(GomParser.DOT);
			this.state = 144;
			this.call();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,24,147,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,4,0,
	35,8,0,11,0,12,0,36,1,0,1,0,1,1,1,1,1,1,1,1,1,2,3,2,46,8,2,1,2,1,2,1,2,
	1,2,1,2,1,2,5,2,54,8,2,10,2,12,2,57,9,2,3,2,59,8,2,1,2,1,2,1,2,1,3,1,3,
	4,3,66,8,3,11,3,12,3,67,1,3,1,3,1,4,1,4,1,4,1,4,3,4,76,8,4,1,5,1,5,1,5,
	1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,95,8,7,1,8,
	1,8,1,8,1,9,1,9,3,9,102,8,9,1,9,1,9,3,9,106,8,9,1,9,1,9,3,9,110,8,9,1,9,
	1,9,3,9,114,8,9,1,9,1,9,3,9,118,8,9,1,9,1,9,3,9,122,8,9,3,9,124,8,9,1,10,
	1,10,1,10,1,11,1,11,1,11,1,11,1,11,5,11,134,8,11,10,11,12,11,137,9,11,3,
	11,139,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,
	16,18,20,22,24,0,0,157,0,29,1,0,0,0,2,40,1,0,0,0,4,45,1,0,0,0,6,63,1,0,
	0,0,8,75,1,0,0,0,10,77,1,0,0,0,12,83,1,0,0,0,14,87,1,0,0,0,16,96,1,0,0,
	0,18,123,1,0,0,0,20,125,1,0,0,0,22,128,1,0,0,0,24,142,1,0,0,0,26,28,3,2,
	1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,34,1,0,0,
	0,31,29,1,0,0,0,32,35,3,4,2,0,33,35,3,8,4,0,34,32,1,0,0,0,34,33,1,0,0,0,
	35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,39,5,0,0,1,39,
	1,1,0,0,0,40,41,5,6,0,0,41,42,5,19,0,0,42,43,5,18,0,0,43,3,1,0,0,0,44,46,
	5,2,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,4,0,0,48,49,5,
	19,0,0,49,58,5,13,0,0,50,55,5,19,0,0,51,52,5,17,0,0,52,54,5,19,0,0,53,51,
	1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,59,1,0,0,0,57,55,1,
	0,0,0,58,50,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,61,5,14,0,0,61,62,3,
	6,3,0,62,5,1,0,0,0,63,65,5,15,0,0,64,66,3,8,4,0,65,64,1,0,0,0,66,67,1,0,
	0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,16,0,0,70,7,1,0,0,
	0,71,76,3,10,5,0,72,76,3,12,6,0,73,76,3,16,8,0,74,76,3,14,7,0,75,71,1,0,
	0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,9,1,0,0,0,77,78,5,3,0,
	0,78,79,5,19,0,0,79,80,5,12,0,0,80,81,3,18,9,0,81,82,5,18,0,0,82,11,1,0,
	0,0,83,84,5,5,0,0,84,85,3,18,9,0,85,86,5,18,0,0,86,13,1,0,0,0,87,88,5,7,
	0,0,88,89,5,13,0,0,89,90,3,18,9,0,90,91,5,14,0,0,91,94,3,6,3,0,92,93,5,
	8,0,0,93,95,3,6,3,0,94,92,1,0,0,0,94,95,1,0,0,0,95,15,1,0,0,0,96,97,3,18,
	9,0,97,98,5,18,0,0,98,17,1,0,0,0,99,101,5,19,0,0,100,102,3,20,10,0,101,
	100,1,0,0,0,101,102,1,0,0,0,102,124,1,0,0,0,103,105,5,20,0,0,104,106,3,
	20,10,0,105,104,1,0,0,0,105,106,1,0,0,0,106,124,1,0,0,0,107,109,5,23,0,
	0,108,110,3,20,10,0,109,108,1,0,0,0,109,110,1,0,0,0,110,124,1,0,0,0,111,
	113,5,1,0,0,112,114,3,20,10,0,113,112,1,0,0,0,113,114,1,0,0,0,114,124,1,
	0,0,0,115,117,3,22,11,0,116,118,3,20,10,0,117,116,1,0,0,0,117,118,1,0,0,
	0,118,124,1,0,0,0,119,121,3,24,12,0,120,122,3,20,10,0,121,120,1,0,0,0,121,
	122,1,0,0,0,122,124,1,0,0,0,123,99,1,0,0,0,123,103,1,0,0,0,123,107,1,0,
	0,0,123,111,1,0,0,0,123,115,1,0,0,0,123,119,1,0,0,0,124,19,1,0,0,0,125,
	126,5,9,0,0,126,127,3,18,9,0,127,21,1,0,0,0,128,129,5,19,0,0,129,138,5,
	13,0,0,130,135,3,18,9,0,131,132,5,17,0,0,132,134,3,18,9,0,133,131,1,0,0,
	0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,139,1,0,0,0,137,135,
	1,0,0,0,138,130,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,14,0,
	0,141,23,1,0,0,0,142,143,5,19,0,0,143,144,5,10,0,0,144,145,3,22,11,0,145,
	25,1,0,0,0,18,29,34,36,45,55,58,67,75,94,101,105,109,113,117,121,123,135,
	138];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GomParser.__ATN) {
			GomParser.__ATN = new ATNDeserializer().deserialize(GomParser._serializedATN);
		}

		return GomParser.__ATN;
	}


	static DecisionsToDFA = GomParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(GomParser.EOF, 0);
	}
	public importStatement_list(): ImportStatementContext[] {
		return this.getTypedRuleContexts(ImportStatementContext) as ImportStatementContext[];
	}
	public importStatement(i: number): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, i) as ImportStatementContext;
	}
	public functionDecl_list(): FunctionDeclContext[] {
		return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
	}
	public functionDecl(i: number): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_program;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(GomParser.IMPORT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(GomParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_importStatement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(GomParser.FUNCTION, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(GomParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, i);
	}
	public LEFTPAREN(): TerminalNode {
		return this.getToken(GomParser.LEFTPAREN, 0);
	}
	public RIGHTPAREN(): TerminalNode {
		return this.getToken(GomParser.RIGHTPAREN, 0);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public PUB(): TerminalNode {
		return this.getToken(GomParser.PUB, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GomParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GomParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_functionDecl;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterFunctionDecl) {
	 		listener.enterFunctionDecl(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitFunctionDecl) {
	 		listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementBlockContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFTBRACE(): TerminalNode {
		return this.getToken(GomParser.LEFTBRACE, 0);
	}
	public RIGHTBRACE(): TerminalNode {
		return this.getToken(GomParser.RIGHTBRACE, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_statementBlock;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterStatementBlock) {
	 		listener.enterStatementBlock(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitStatementBlock) {
	 		listener.exitStatementBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitStatementBlock) {
			return visitor.visitStatementBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public letStatement(): LetStatementContext {
		return this.getTypedRuleContext(LetStatementContext, 0) as LetStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_statement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LET(): TerminalNode {
		return this.getToken(GomParser.LET, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(GomParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(GomParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_letStatement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterLetStatement) {
	 		listener.enterLetStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitLetStatement) {
	 		listener.exitLetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitLetStatement) {
			return visitor.visitLetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(GomParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(GomParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_returnStatement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(GomParser.IF, 0);
	}
	public LEFTPAREN(): TerminalNode {
		return this.getToken(GomParser.LEFTPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RIGHTPAREN(): TerminalNode {
		return this.getToken(GomParser.RIGHTPAREN, 0);
	}
	public statementBlock_list(): StatementBlockContext[] {
		return this.getTypedRuleContexts(StatementBlockContext) as StatementBlockContext[];
	}
	public statementBlock(i: number): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, i) as StatementBlockContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(GomParser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_ifStatement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(GomParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_expressionStatement;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public expressionTail(): ExpressionTailContext {
		return this.getTypedRuleContext(ExpressionTailContext, 0) as ExpressionTailContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(GomParser.NUMBER, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(GomParser.STRING_LITERAL, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(GomParser.BOOLEAN, 0);
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
	public access(): AccessContext {
		return this.getTypedRuleContext(AccessContext, 0) as AccessContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_expression;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionTailContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(GomParser.OPERATOR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_expressionTail;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterExpressionTail) {
	 		listener.enterExpressionTail(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitExpressionTail) {
	 		listener.exitExpressionTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitExpressionTail) {
			return visitor.visitExpressionTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public LEFTPAREN(): TerminalNode {
		return this.getToken(GomParser.LEFTPAREN, 0);
	}
	public RIGHTPAREN(): TerminalNode {
		return this.getToken(GomParser.RIGHTPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GomParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GomParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_call;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(GomParser.DOT, 0);
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_access;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterAccess) {
	 		listener.enterAccess(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitAccess) {
	 		listener.exitAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitAccess) {
			return visitor.visitAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
