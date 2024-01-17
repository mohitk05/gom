// Generated from /Users/mkarekar/Documents/projects/gom-lang/Gom.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class GomParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BOOLEAN=1, PUB=2, LET=3, FUNCTION=4, RETURN=5, IMPORT=6, IF=7, ELSE=8, 
		OPERATOR=9, DOT=10, QUOTE=11, EQ=12, LEFTPAREN=13, RIGHTPAREN=14, LEFTBRACE=15, 
		RIGHTBRACE=16, COMMA=17, SEMICOLON=18, IDENTIFIER=19, NUMBER=20, DIGIT=21, 
		LETTER=22, STRING_LITERAL=23, WHITE_SPACE=24;
	public static final int
		RULE_program = 0, RULE_importStatement = 1, RULE_functionDecl = 2, RULE_statementBlock = 3, 
		RULE_statement = 4, RULE_letStatement = 5, RULE_returnStatement = 6, RULE_ifStatement = 7, 
		RULE_expressionStatement = 8, RULE_expression = 9, RULE_expressionTail = 10, 
		RULE_call = 11, RULE_access = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "importStatement", "functionDecl", "statementBlock", "statement", 
			"letStatement", "returnStatement", "ifStatement", "expressionStatement", 
			"expression", "expressionTail", "call", "access"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'pub'", "'let'", "'fn'", "'return'", "'import'", "'if'", 
			"'else'", null, "'.'", "'\"'", "'='", "'('", "')'", "'{'", "'}'", "','", 
			"';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "BOOLEAN", "PUB", "LET", "FUNCTION", "RETURN", "IMPORT", "IF", 
			"ELSE", "OPERATOR", "DOT", "QUOTE", "EQ", "LEFTPAREN", "RIGHTPAREN", 
			"LEFTBRACE", "RIGHTBRACE", "COMMA", "SEMICOLON", "IDENTIFIER", "NUMBER", 
			"DIGIT", "LETTER", "STRING_LITERAL", "WHITE_SPACE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Gom.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GomParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(GomParser.EOF, 0); }
		public List<ImportStatementContext> importStatement() {
			return getRuleContexts(ImportStatementContext.class);
		}
		public ImportStatementContext importStatement(int i) {
			return getRuleContext(ImportStatementContext.class,i);
		}
		public List<FunctionDeclContext> functionDecl() {
			return getRuleContexts(FunctionDeclContext.class);
		}
		public FunctionDeclContext functionDecl(int i) {
			return getRuleContext(FunctionDeclContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPORT) {
				{
				{
				setState(26);
				importStatement();
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(34); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(34);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PUB:
				case FUNCTION:
					{
					setState(32);
					functionDecl();
					}
					break;
				case BOOLEAN:
				case LET:
				case RETURN:
				case IF:
				case IDENTIFIER:
				case NUMBER:
				case STRING_LITERAL:
					{
					setState(33);
					statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(36); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 9961662L) != 0) );
			setState(38);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(GomParser.IMPORT, 0); }
		public TerminalNode IDENTIFIER() { return getToken(GomParser.IDENTIFIER, 0); }
		public TerminalNode SEMICOLON() { return getToken(GomParser.SEMICOLON, 0); }
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_importStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(IMPORT);
			setState(41);
			match(IDENTIFIER);
			setState(42);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(GomParser.FUNCTION, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(GomParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(GomParser.IDENTIFIER, i);
		}
		public TerminalNode LEFTPAREN() { return getToken(GomParser.LEFTPAREN, 0); }
		public TerminalNode RIGHTPAREN() { return getToken(GomParser.RIGHTPAREN, 0); }
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public TerminalNode PUB() { return getToken(GomParser.PUB, 0); }
		public List<TerminalNode> COMMA() { return getTokens(GomParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GomParser.COMMA, i);
		}
		public FunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDecl; }
	}

	public final FunctionDeclContext functionDecl() throws RecognitionException {
		FunctionDeclContext _localctx = new FunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_functionDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PUB) {
				{
				setState(44);
				match(PUB);
				}
			}

			setState(47);
			match(FUNCTION);
			setState(48);
			match(IDENTIFIER);
			setState(49);
			match(LEFTPAREN);
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(50);
				match(IDENTIFIER);
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(51);
					match(COMMA);
					setState(52);
					match(IDENTIFIER);
					}
					}
					setState(57);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(60);
			match(RIGHTPAREN);
			setState(61);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementBlockContext extends ParserRuleContext {
		public TerminalNode LEFTBRACE() { return getToken(GomParser.LEFTBRACE, 0); }
		public TerminalNode RIGHTBRACE() { return getToken(GomParser.RIGHTBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementBlock; }
	}

	public final StatementBlockContext statementBlock() throws RecognitionException {
		StatementBlockContext _localctx = new StatementBlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_statementBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(LEFTBRACE);
			setState(65); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(64);
				statement();
				}
				}
				setState(67); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 9961642L) != 0) );
			setState(69);
			match(RIGHTBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public LetStatementContext letStatement() {
			return getRuleContext(LetStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_statement);
		try {
			setState(75);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				letStatement();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 2);
				{
				setState(72);
				returnStatement();
				}
				break;
			case BOOLEAN:
			case IDENTIFIER:
			case NUMBER:
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(73);
				expressionStatement();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 4);
				{
				setState(74);
				ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetStatementContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(GomParser.LET, 0); }
		public TerminalNode IDENTIFIER() { return getToken(GomParser.IDENTIFIER, 0); }
		public TerminalNode EQ() { return getToken(GomParser.EQ, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(GomParser.SEMICOLON, 0); }
		public LetStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStatement; }
	}

	public final LetStatementContext letStatement() throws RecognitionException {
		LetStatementContext _localctx = new LetStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_letStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(LET);
			setState(78);
			match(IDENTIFIER);
			setState(79);
			match(EQ);
			setState(80);
			expression();
			setState(81);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(GomParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(GomParser.SEMICOLON, 0); }
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(RETURN);
			setState(84);
			expression();
			setState(85);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(GomParser.IF, 0); }
		public TerminalNode LEFTPAREN() { return getToken(GomParser.LEFTPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RIGHTPAREN() { return getToken(GomParser.RIGHTPAREN, 0); }
		public List<StatementBlockContext> statementBlock() {
			return getRuleContexts(StatementBlockContext.class);
		}
		public StatementBlockContext statementBlock(int i) {
			return getRuleContext(StatementBlockContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(GomParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(IF);
			setState(88);
			match(LEFTPAREN);
			setState(89);
			expression();
			setState(90);
			match(RIGHTPAREN);
			setState(91);
			statementBlock();
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(92);
				match(ELSE);
				setState(93);
				statementBlock();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(GomParser.SEMICOLON, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			expression();
			setState(97);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(GomParser.IDENTIFIER, 0); }
		public ExpressionTailContext expressionTail() {
			return getRuleContext(ExpressionTailContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(GomParser.NUMBER, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(GomParser.STRING_LITERAL, 0); }
		public TerminalNode BOOLEAN() { return getToken(GomParser.BOOLEAN, 0); }
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public AccessContext access() {
			return getRuleContext(AccessContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expression);
		int _la;
		try {
			setState(123);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				match(IDENTIFIER);
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(100);
					expressionTail();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				match(NUMBER);
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(104);
					expressionTail();
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(107);
				match(STRING_LITERAL);
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(108);
					expressionTail();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(111);
				match(BOOLEAN);
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(112);
					expressionTail();
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(115);
				call();
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(116);
					expressionTail();
					}
				}

				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(119);
				access();
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR) {
					{
					setState(120);
					expressionTail();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionTailContext extends ParserRuleContext {
		public TerminalNode OPERATOR() { return getToken(GomParser.OPERATOR, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionTailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionTail; }
	}

	public final ExpressionTailContext expressionTail() throws RecognitionException {
		ExpressionTailContext _localctx = new ExpressionTailContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_expressionTail);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(OPERATOR);
			setState(126);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(GomParser.IDENTIFIER, 0); }
		public TerminalNode LEFTPAREN() { return getToken(GomParser.LEFTPAREN, 0); }
		public TerminalNode RIGHTPAREN() { return getToken(GomParser.RIGHTPAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(GomParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GomParser.COMMA, i);
		}
		public CallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_call; }
	}

	public final CallContext call() throws RecognitionException {
		CallContext _localctx = new CallContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(IDENTIFIER);
			setState(129);
			match(LEFTPAREN);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9961474L) != 0)) {
				{
				setState(130);
				expression();
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(131);
					match(COMMA);
					setState(132);
					expression();
					}
					}
					setState(137);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(140);
			match(RIGHTPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccessContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(GomParser.IDENTIFIER, 0); }
		public TerminalNode DOT() { return getToken(GomParser.DOT, 0); }
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public AccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_access; }
	}

	public final AccessContext access() throws RecognitionException {
		AccessContext _localctx = new AccessContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_access);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			match(IDENTIFIER);
			setState(143);
			match(DOT);
			setState(144);
			call();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u0093\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f\u0000"+
		"\u001f\t\u0000\u0001\u0000\u0001\u0000\u0004\u0000#\b\u0000\u000b\u0000"+
		"\f\u0000$\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0003\u0002.\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u00026\b\u0002"+
		"\n\u0002\f\u00029\t\u0002\u0003\u0002;\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0004\u0003B\b\u0003\u000b\u0003"+
		"\f\u0003C\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004L\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007_\b\u0007\u0001\b\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0003\tf\b\t\u0001\t\u0001\t\u0003\tj\b\t\u0001\t\u0001"+
		"\t\u0003\tn\b\t\u0001\t\u0001\t\u0003\tr\b\t\u0001\t\u0001\t\u0003\tv"+
		"\b\t\u0001\t\u0001\t\u0003\tz\b\t\u0003\t|\b\t\u0001\n\u0001\n\u0001\n"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b"+
		"\u0086\b\u000b\n\u000b\f\u000b\u0089\t\u000b\u0003\u000b\u008b\b\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0000"+
		"\u0000\r\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u0000\u0000\u009d\u0000\u001d\u0001\u0000\u0000\u0000\u0002(\u0001\u0000"+
		"\u0000\u0000\u0004-\u0001\u0000\u0000\u0000\u0006?\u0001\u0000\u0000\u0000"+
		"\bK\u0001\u0000\u0000\u0000\nM\u0001\u0000\u0000\u0000\fS\u0001\u0000"+
		"\u0000\u0000\u000eW\u0001\u0000\u0000\u0000\u0010`\u0001\u0000\u0000\u0000"+
		"\u0012{\u0001\u0000\u0000\u0000\u0014}\u0001\u0000\u0000\u0000\u0016\u0080"+
		"\u0001\u0000\u0000\u0000\u0018\u008e\u0001\u0000\u0000\u0000\u001a\u001c"+
		"\u0003\u0002\u0001\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0001\u0000\u0000\u0000\u001e\"\u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000 #\u0003\u0004\u0002\u0000!#\u0003\b\u0004\u0000\" "+
		"\u0001\u0000\u0000\u0000\"!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000"+
		"\u0000$\"\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%&\u0001\u0000"+
		"\u0000\u0000&\'\u0005\u0000\u0000\u0001\'\u0001\u0001\u0000\u0000\u0000"+
		"()\u0005\u0006\u0000\u0000)*\u0005\u0013\u0000\u0000*+\u0005\u0012\u0000"+
		"\u0000+\u0003\u0001\u0000\u0000\u0000,.\u0005\u0002\u0000\u0000-,\u0001"+
		"\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000"+
		"/0\u0005\u0004\u0000\u000001\u0005\u0013\u0000\u00001:\u0005\r\u0000\u0000"+
		"27\u0005\u0013\u0000\u000034\u0005\u0011\u0000\u000046\u0005\u0013\u0000"+
		"\u000053\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u000075\u0001\u0000"+
		"\u0000\u000078\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u000097\u0001"+
		"\u0000\u0000\u0000:2\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000"+
		";<\u0001\u0000\u0000\u0000<=\u0005\u000e\u0000\u0000=>\u0003\u0006\u0003"+
		"\u0000>\u0005\u0001\u0000\u0000\u0000?A\u0005\u000f\u0000\u0000@B\u0003"+
		"\b\u0004\u0000A@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CA\u0001"+
		"\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000"+
		"EF\u0005\u0010\u0000\u0000F\u0007\u0001\u0000\u0000\u0000GL\u0003\n\u0005"+
		"\u0000HL\u0003\f\u0006\u0000IL\u0003\u0010\b\u0000JL\u0003\u000e\u0007"+
		"\u0000KG\u0001\u0000\u0000\u0000KH\u0001\u0000\u0000\u0000KI\u0001\u0000"+
		"\u0000\u0000KJ\u0001\u0000\u0000\u0000L\t\u0001\u0000\u0000\u0000MN\u0005"+
		"\u0003\u0000\u0000NO\u0005\u0013\u0000\u0000OP\u0005\f\u0000\u0000PQ\u0003"+
		"\u0012\t\u0000QR\u0005\u0012\u0000\u0000R\u000b\u0001\u0000\u0000\u0000"+
		"ST\u0005\u0005\u0000\u0000TU\u0003\u0012\t\u0000UV\u0005\u0012\u0000\u0000"+
		"V\r\u0001\u0000\u0000\u0000WX\u0005\u0007\u0000\u0000XY\u0005\r\u0000"+
		"\u0000YZ\u0003\u0012\t\u0000Z[\u0005\u000e\u0000\u0000[^\u0003\u0006\u0003"+
		"\u0000\\]\u0005\b\u0000\u0000]_\u0003\u0006\u0003\u0000^\\\u0001\u0000"+
		"\u0000\u0000^_\u0001\u0000\u0000\u0000_\u000f\u0001\u0000\u0000\u0000"+
		"`a\u0003\u0012\t\u0000ab\u0005\u0012\u0000\u0000b\u0011\u0001\u0000\u0000"+
		"\u0000ce\u0005\u0013\u0000\u0000df\u0003\u0014\n\u0000ed\u0001\u0000\u0000"+
		"\u0000ef\u0001\u0000\u0000\u0000f|\u0001\u0000\u0000\u0000gi\u0005\u0014"+
		"\u0000\u0000hj\u0003\u0014\n\u0000ih\u0001\u0000\u0000\u0000ij\u0001\u0000"+
		"\u0000\u0000j|\u0001\u0000\u0000\u0000km\u0005\u0017\u0000\u0000ln\u0003"+
		"\u0014\n\u0000ml\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000n|\u0001"+
		"\u0000\u0000\u0000oq\u0005\u0001\u0000\u0000pr\u0003\u0014\n\u0000qp\u0001"+
		"\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000r|\u0001\u0000\u0000\u0000"+
		"su\u0003\u0016\u000b\u0000tv\u0003\u0014\n\u0000ut\u0001\u0000\u0000\u0000"+
		"uv\u0001\u0000\u0000\u0000v|\u0001\u0000\u0000\u0000wy\u0003\u0018\f\u0000"+
		"xz\u0003\u0014\n\u0000yx\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000"+
		"z|\u0001\u0000\u0000\u0000{c\u0001\u0000\u0000\u0000{g\u0001\u0000\u0000"+
		"\u0000{k\u0001\u0000\u0000\u0000{o\u0001\u0000\u0000\u0000{s\u0001\u0000"+
		"\u0000\u0000{w\u0001\u0000\u0000\u0000|\u0013\u0001\u0000\u0000\u0000"+
		"}~\u0005\t\u0000\u0000~\u007f\u0003\u0012\t\u0000\u007f\u0015\u0001\u0000"+
		"\u0000\u0000\u0080\u0081\u0005\u0013\u0000\u0000\u0081\u008a\u0005\r\u0000"+
		"\u0000\u0082\u0087\u0003\u0012\t\u0000\u0083\u0084\u0005\u0011\u0000\u0000"+
		"\u0084\u0086\u0003\u0012\t\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0086"+
		"\u0089\u0001\u0000\u0000\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0087"+
		"\u0088\u0001\u0000\u0000\u0000\u0088\u008b\u0001\u0000\u0000\u0000\u0089"+
		"\u0087\u0001\u0000\u0000\u0000\u008a\u0082\u0001\u0000\u0000\u0000\u008a"+
		"\u008b\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c"+
		"\u008d\u0005\u000e\u0000\u0000\u008d\u0017\u0001\u0000\u0000\u0000\u008e"+
		"\u008f\u0005\u0013\u0000\u0000\u008f\u0090\u0005\n\u0000\u0000\u0090\u0091"+
		"\u0003\u0016\u000b\u0000\u0091\u0019\u0001\u0000\u0000\u0000\u0012\u001d"+
		"\"$-7:CK^eimquy{\u0087\u008a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}