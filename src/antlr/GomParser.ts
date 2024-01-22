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
	public static readonly TYPE = 1;
	public static readonly BOOLEAN = 2;
	public static readonly PUB = 3;
	public static readonly LET = 4;
	public static readonly FUNCTION = 5;
	public static readonly RETURN = 6;
	public static readonly IMPORT = 7;
	public static readonly IF = 8;
	public static readonly ELSE = 9;
	public static readonly OPERATOR = 10;
	public static readonly DOT = 11;
	public static readonly QUOTE = 12;
	public static readonly EQ = 13;
	public static readonly LEFTPAREN = 14;
	public static readonly RIGHTPAREN = 15;
	public static readonly LEFTBRACE = 16;
	public static readonly RIGHTBRACE = 17;
	public static readonly COMMA = 18;
	public static readonly SEMICOLON = 19;
	public static readonly COLON = 20;
	public static readonly IDENTIFIER = 21;
	public static readonly NUMBER = 22;
	public static readonly DIGIT = 23;
	public static readonly LETTER = 24;
	public static readonly STRING_LITERAL = 25;
	public static readonly WHITE_SPACE = 26;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_importStatement = 1;
	public static readonly RULE_functionDecl = 2;
	public static readonly RULE_typedIdentifier = 3;
	public static readonly RULE_statementBlock = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_letStatement = 6;
	public static readonly RULE_returnStatement = 7;
	public static readonly RULE_ifStatement = 8;
	public static readonly RULE_expressionStatement = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_expressionTail = 11;
	public static readonly RULE_call = 12;
	public static readonly RULE_access = 13;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'pub'", 
                                                            "'let'", "'fn'", 
                                                            "'return'", 
                                                            "'import'", 
                                                            "'if'", "'else'", 
                                                            null, "'.'", 
                                                            "'\"'", "'='", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "','", "';'", 
                                                            "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TYPE", 
                                                             "BOOLEAN", 
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
                                                             "COLON", "IDENTIFIER", 
                                                             "NUMBER", "DIGIT", 
                                                             "LETTER", "STRING_LITERAL", 
                                                             "WHITE_SPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "importStatement", "functionDecl", "typedIdentifier", "statementBlock", 
		"statement", "letStatement", "returnStatement", "ifStatement", "expressionStatement", 
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 28;
				this.importStatement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 5:
					{
					this.state = 34;
					this.functionDecl();
					}
					break;
				case 2:
				case 4:
				case 6:
				case 8:
				case 21:
				case 22:
				case 25:
					{
					this.state = 35;
					this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 39846268) !== 0));
			this.state = 40;
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
			this.state = 42;
			this.match(GomParser.IMPORT);
			this.state = 43;
			this.match(GomParser.IDENTIFIER);
			this.state = 44;
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
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 46;
				this.match(GomParser.PUB);
				}
			}

			this.state = 49;
			this.match(GomParser.FUNCTION);
			this.state = 50;
			this.match(GomParser.IDENTIFIER);
			this.state = 51;
			this.match(GomParser.LEFTPAREN);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 52;
				this.typedIdentifier();
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 53;
					this.match(GomParser.COMMA);
					this.state = 54;
					this.typedIdentifier();
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 62;
			this.match(GomParser.RIGHTPAREN);
			this.state = 63;
			this.match(GomParser.COLON);
			this.state = 64;
			this.match(GomParser.TYPE);
			this.state = 65;
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
	public typedIdentifier(): TypedIdentifierContext {
		let localctx: TypedIdentifierContext = new TypedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GomParser.RULE_typedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(GomParser.IDENTIFIER);
			this.state = 68;
			this.match(GomParser.COLON);
			this.state = 69;
			this.match(GomParser.TYPE);
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
		this.enterRule(localctx, 8, GomParser.RULE_statementBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(GomParser.LEFTBRACE);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 72;
				this.statement();
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 39846228) !== 0));
			this.state = 77;
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
		this.enterRule(localctx, 10, GomParser.RULE_statement);
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.letStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
				this.returnStatement();
				}
				break;
			case 2:
			case 21:
			case 22:
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 81;
				this.expressionStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 82;
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
		this.enterRule(localctx, 12, GomParser.RULE_letStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this.match(GomParser.LET);
			this.state = 86;
			this.match(GomParser.IDENTIFIER);
			this.state = 87;
			this.match(GomParser.EQ);
			this.state = 88;
			this.expression();
			this.state = 89;
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
		this.enterRule(localctx, 14, GomParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.match(GomParser.RETURN);
			this.state = 92;
			this.expression();
			this.state = 93;
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
		this.enterRule(localctx, 16, GomParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(GomParser.IF);
			this.state = 96;
			this.match(GomParser.LEFTPAREN);
			this.state = 97;
			this.expression();
			this.state = 98;
			this.match(GomParser.RIGHTPAREN);
			this.state = 99;
			this.statementBlock();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 100;
				this.match(GomParser.ELSE);
				this.state = 101;
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
		this.enterRule(localctx, 18, GomParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 104;
			this.expression();
			this.state = 105;
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
		this.enterRule(localctx, 20, GomParser.RULE_expression);
		let _la: number;
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 107;
				this.match(GomParser.IDENTIFIER);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 108;
					this.expressionTail();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 111;
				this.match(GomParser.NUMBER);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 112;
					this.expressionTail();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 115;
				this.match(GomParser.STRING_LITERAL);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 116;
					this.expressionTail();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 119;
				this.match(GomParser.BOOLEAN);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 120;
					this.expressionTail();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 123;
				this.call();
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 124;
					this.expressionTail();
					}
				}

				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 127;
				this.access();
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 128;
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
		this.enterRule(localctx, 22, GomParser.RULE_expressionTail);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(GomParser.OPERATOR);
			this.state = 134;
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
		this.enterRule(localctx, 24, GomParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(GomParser.IDENTIFIER);
			this.state = 137;
			this.match(GomParser.LEFTPAREN);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 39845892) !== 0)) {
				{
				this.state = 138;
				this.expression();
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 139;
					this.match(GomParser.COMMA);
					this.state = 140;
					this.expression();
					}
					}
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 148;
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
		this.enterRule(localctx, 26, GomParser.RULE_access);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(GomParser.IDENTIFIER);
			this.state = 151;
			this.match(GomParser.DOT);
			this.state = 152;
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

	public static readonly _serializedATN: number[] = [4,1,26,155,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,
	0,1,0,4,0,37,8,0,11,0,12,0,38,1,0,1,0,1,1,1,1,1,1,1,1,1,2,3,2,48,8,2,1,
	2,1,2,1,2,1,2,1,2,1,2,5,2,56,8,2,10,2,12,2,59,9,2,3,2,61,8,2,1,2,1,2,1,
	2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,4,4,74,8,4,11,4,12,4,75,1,4,1,4,1,5,1,
	5,1,5,1,5,3,5,84,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,3,8,103,8,8,1,9,1,9,1,9,1,10,1,10,3,10,110,8,10,1,10,
	1,10,3,10,114,8,10,1,10,1,10,3,10,118,8,10,1,10,1,10,3,10,122,8,10,1,10,
	1,10,3,10,126,8,10,1,10,1,10,3,10,130,8,10,3,10,132,8,10,1,11,1,11,1,11,
	1,12,1,12,1,12,1,12,1,12,5,12,142,8,12,10,12,12,12,145,9,12,3,12,147,8,
	12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,
	22,24,26,0,0,164,0,31,1,0,0,0,2,42,1,0,0,0,4,47,1,0,0,0,6,67,1,0,0,0,8,
	71,1,0,0,0,10,83,1,0,0,0,12,85,1,0,0,0,14,91,1,0,0,0,16,95,1,0,0,0,18,104,
	1,0,0,0,20,131,1,0,0,0,22,133,1,0,0,0,24,136,1,0,0,0,26,150,1,0,0,0,28,
	30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,36,
	1,0,0,0,33,31,1,0,0,0,34,37,3,4,2,0,35,37,3,10,5,0,36,34,1,0,0,0,36,35,
	1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,
	0,0,1,41,1,1,0,0,0,42,43,5,7,0,0,43,44,5,21,0,0,44,45,5,19,0,0,45,3,1,0,
	0,0,46,48,5,3,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,5,0,
	0,50,51,5,21,0,0,51,60,5,14,0,0,52,57,3,6,3,0,53,54,5,18,0,0,54,56,3,6,
	3,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,61,1,0,0,
	0,59,57,1,0,0,0,60,52,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,15,0,
	0,63,64,5,20,0,0,64,65,5,1,0,0,65,66,3,8,4,0,66,5,1,0,0,0,67,68,5,21,0,
	0,68,69,5,20,0,0,69,70,5,1,0,0,70,7,1,0,0,0,71,73,5,16,0,0,72,74,3,10,5,
	0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,
	77,78,5,17,0,0,78,9,1,0,0,0,79,84,3,12,6,0,80,84,3,14,7,0,81,84,3,18,9,
	0,82,84,3,16,8,0,83,79,1,0,0,0,83,80,1,0,0,0,83,81,1,0,0,0,83,82,1,0,0,
	0,84,11,1,0,0,0,85,86,5,4,0,0,86,87,5,21,0,0,87,88,5,13,0,0,88,89,3,20,
	10,0,89,90,5,19,0,0,90,13,1,0,0,0,91,92,5,6,0,0,92,93,3,20,10,0,93,94,5,
	19,0,0,94,15,1,0,0,0,95,96,5,8,0,0,96,97,5,14,0,0,97,98,3,20,10,0,98,99,
	5,15,0,0,99,102,3,8,4,0,100,101,5,9,0,0,101,103,3,8,4,0,102,100,1,0,0,0,
	102,103,1,0,0,0,103,17,1,0,0,0,104,105,3,20,10,0,105,106,5,19,0,0,106,19,
	1,0,0,0,107,109,5,21,0,0,108,110,3,22,11,0,109,108,1,0,0,0,109,110,1,0,
	0,0,110,132,1,0,0,0,111,113,5,22,0,0,112,114,3,22,11,0,113,112,1,0,0,0,
	113,114,1,0,0,0,114,132,1,0,0,0,115,117,5,25,0,0,116,118,3,22,11,0,117,
	116,1,0,0,0,117,118,1,0,0,0,118,132,1,0,0,0,119,121,5,2,0,0,120,122,3,22,
	11,0,121,120,1,0,0,0,121,122,1,0,0,0,122,132,1,0,0,0,123,125,3,24,12,0,
	124,126,3,22,11,0,125,124,1,0,0,0,125,126,1,0,0,0,126,132,1,0,0,0,127,129,
	3,26,13,0,128,130,3,22,11,0,129,128,1,0,0,0,129,130,1,0,0,0,130,132,1,0,
	0,0,131,107,1,0,0,0,131,111,1,0,0,0,131,115,1,0,0,0,131,119,1,0,0,0,131,
	123,1,0,0,0,131,127,1,0,0,0,132,21,1,0,0,0,133,134,5,10,0,0,134,135,3,20,
	10,0,135,23,1,0,0,0,136,137,5,21,0,0,137,146,5,14,0,0,138,143,3,20,10,0,
	139,140,5,18,0,0,140,142,3,20,10,0,141,139,1,0,0,0,142,145,1,0,0,0,143,
	141,1,0,0,0,143,144,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,146,138,1,0,
	0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,149,5,15,0,0,149,25,1,0,0,0,150,
	151,5,21,0,0,151,152,5,11,0,0,152,153,3,24,12,0,153,27,1,0,0,0,18,31,36,
	38,47,57,60,75,83,102,109,113,117,121,125,129,131,143,146];

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
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public LEFTPAREN(): TerminalNode {
		return this.getToken(GomParser.LEFTPAREN, 0);
	}
	public RIGHTPAREN(): TerminalNode {
		return this.getToken(GomParser.RIGHTPAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(GomParser.COLON, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(GomParser.TYPE, 0);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public PUB(): TerminalNode {
		return this.getToken(GomParser.PUB, 0);
	}
	public typedIdentifier_list(): TypedIdentifierContext[] {
		return this.getTypedRuleContexts(TypedIdentifierContext) as TypedIdentifierContext[];
	}
	public typedIdentifier(i: number): TypedIdentifierContext {
		return this.getTypedRuleContext(TypedIdentifierContext, i) as TypedIdentifierContext;
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


export class TypedIdentifierContext extends ParserRuleContext {
	constructor(parser?: GomParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GomParser.IDENTIFIER, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(GomParser.COLON, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(GomParser.TYPE, 0);
	}
    public get ruleIndex(): number {
    	return GomParser.RULE_typedIdentifier;
	}
	public enterRule(listener: GomListener): void {
	    if(listener.enterTypedIdentifier) {
	 		listener.enterTypedIdentifier(this);
		}
	}
	public exitRule(listener: GomListener): void {
	    if(listener.exitTypedIdentifier) {
	 		listener.exitTypedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GomVisitor<Result>): Result {
		if (visitor.visitTypedIdentifier) {
			return visitor.visitTypedIdentifier(this);
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
