// Generated from /Users/mkarekar/Documents/projects/gom-lang/Gom.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class GomLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BOOLEAN=1, PUB=2, LET=3, FUNCTION=4, RETURN=5, IMPORT=6, IF=7, ELSE=8, 
		OPERATOR=9, DOT=10, QUOTE=11, EQ=12, LEFTPAREN=13, RIGHTPAREN=14, LEFTBRACE=15, 
		RIGHTBRACE=16, COMMA=17, SEMICOLON=18, IDENTIFIER=19, NUMBER=20, DIGIT=21, 
		LETTER=22, STRING_LITERAL=23, WHITE_SPACE=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"BOOLEAN", "PUB", "LET", "FUNCTION", "RETURN", "IMPORT", "IF", "ELSE", 
			"OPERATOR", "DOT", "QUOTE", "EQ", "LEFTPAREN", "RIGHTPAREN", "LEFTBRACE", 
			"RIGHTBRACE", "COMMA", "SEMICOLON", "IDENTIFIER", "NUMBER", "DIGIT", 
			"LETTER", "STRING_LITERAL", "WHITE_SPACE"
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


	public GomLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Gom.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0018\u0090\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000;\b\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0004\u0012s\b\u0012\u000b\u0012\f\u0012t\u0001"+
		"\u0013\u0004\u0013x\b\u0013\u000b\u0013\f\u0013y\u0001\u0014\u0001\u0014"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0004\u0016\u0084\b\u0016\u000b\u0016\f\u0016\u0085\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0004\u0017\u008b\b\u0017\u000b\u0017\f\u0017\u008c"+
		"\u0001\u0017\u0001\u0017\u0000\u0000\u0018\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018\u0001\u0000\u0004\u0002"+
		"\u0000++--\u0001\u000009\u0002\u0000AZaz\u0003\u0000\t\n\r\r  \u0096\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/"+
		"\u0001\u0000\u0000\u0000\u0001:\u0001\u0000\u0000\u0000\u0003<\u0001\u0000"+
		"\u0000\u0000\u0005@\u0001\u0000\u0000\u0000\u0007D\u0001\u0000\u0000\u0000"+
		"\tG\u0001\u0000\u0000\u0000\u000bN\u0001\u0000\u0000\u0000\rU\u0001\u0000"+
		"\u0000\u0000\u000fX\u0001\u0000\u0000\u0000\u0011]\u0001\u0000\u0000\u0000"+
		"\u0013_\u0001\u0000\u0000\u0000\u0015a\u0001\u0000\u0000\u0000\u0017c"+
		"\u0001\u0000\u0000\u0000\u0019e\u0001\u0000\u0000\u0000\u001bg\u0001\u0000"+
		"\u0000\u0000\u001di\u0001\u0000\u0000\u0000\u001fk\u0001\u0000\u0000\u0000"+
		"!m\u0001\u0000\u0000\u0000#o\u0001\u0000\u0000\u0000%r\u0001\u0000\u0000"+
		"\u0000\'w\u0001\u0000\u0000\u0000){\u0001\u0000\u0000\u0000+}\u0001\u0000"+
		"\u0000\u0000-\u007f\u0001\u0000\u0000\u0000/\u008a\u0001\u0000\u0000\u0000"+
		"12\u0005t\u0000\u000023\u0005r\u0000\u000034\u0005u\u0000\u00004;\u0005"+
		"e\u0000\u000056\u0005f\u0000\u000067\u0005a\u0000\u000078\u0005l\u0000"+
		"\u000089\u0005s\u0000\u00009;\u0005e\u0000\u0000:1\u0001\u0000\u0000\u0000"+
		":5\u0001\u0000\u0000\u0000;\u0002\u0001\u0000\u0000\u0000<=\u0005p\u0000"+
		"\u0000=>\u0005u\u0000\u0000>?\u0005b\u0000\u0000?\u0004\u0001\u0000\u0000"+
		"\u0000@A\u0005l\u0000\u0000AB\u0005e\u0000\u0000BC\u0005t\u0000\u0000"+
		"C\u0006\u0001\u0000\u0000\u0000DE\u0005f\u0000\u0000EF\u0005n\u0000\u0000"+
		"F\b\u0001\u0000\u0000\u0000GH\u0005r\u0000\u0000HI\u0005e\u0000\u0000"+
		"IJ\u0005t\u0000\u0000JK\u0005u\u0000\u0000KL\u0005r\u0000\u0000LM\u0005"+
		"n\u0000\u0000M\n\u0001\u0000\u0000\u0000NO\u0005i\u0000\u0000OP\u0005"+
		"m\u0000\u0000PQ\u0005p\u0000\u0000QR\u0005o\u0000\u0000RS\u0005r\u0000"+
		"\u0000ST\u0005t\u0000\u0000T\f\u0001\u0000\u0000\u0000UV\u0005i\u0000"+
		"\u0000VW\u0005f\u0000\u0000W\u000e\u0001\u0000\u0000\u0000XY\u0005e\u0000"+
		"\u0000YZ\u0005l\u0000\u0000Z[\u0005s\u0000\u0000[\\\u0005e\u0000\u0000"+
		"\\\u0010\u0001\u0000\u0000\u0000]^\u0007\u0000\u0000\u0000^\u0012\u0001"+
		"\u0000\u0000\u0000_`\u0005.\u0000\u0000`\u0014\u0001\u0000\u0000\u0000"+
		"ab\u0005\"\u0000\u0000b\u0016\u0001\u0000\u0000\u0000cd\u0005=\u0000\u0000"+
		"d\u0018\u0001\u0000\u0000\u0000ef\u0005(\u0000\u0000f\u001a\u0001\u0000"+
		"\u0000\u0000gh\u0005)\u0000\u0000h\u001c\u0001\u0000\u0000\u0000ij\u0005"+
		"{\u0000\u0000j\u001e\u0001\u0000\u0000\u0000kl\u0005}\u0000\u0000l \u0001"+
		"\u0000\u0000\u0000mn\u0005,\u0000\u0000n\"\u0001\u0000\u0000\u0000op\u0005"+
		";\u0000\u0000p$\u0001\u0000\u0000\u0000qs\u0003+\u0015\u0000rq\u0001\u0000"+
		"\u0000\u0000st\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001"+
		"\u0000\u0000\u0000u&\u0001\u0000\u0000\u0000vx\u0003)\u0014\u0000wv\u0001"+
		"\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000"+
		"yz\u0001\u0000\u0000\u0000z(\u0001\u0000\u0000\u0000{|\u0007\u0001\u0000"+
		"\u0000|*\u0001\u0000\u0000\u0000}~\u0007\u0002\u0000\u0000~,\u0001\u0000"+
		"\u0000\u0000\u007f\u0083\u0003\u0015\n\u0000\u0080\u0084\u0003)\u0014"+
		"\u0000\u0081\u0084\u0003+\u0015\u0000\u0082\u0084\u0005 \u0000\u0000\u0083"+
		"\u0080\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0083"+
		"\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085"+
		"\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086"+
		"\u0087\u0001\u0000\u0000\u0000\u0087\u0088\u0003\u0015\n\u0000\u0088."+
		"\u0001\u0000\u0000\u0000\u0089\u008b\u0007\u0003\u0000\u0000\u008a\u0089"+
		"\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008a"+
		"\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u008e"+
		"\u0001\u0000\u0000\u0000\u008e\u008f\u0006\u0017\u0000\u0000\u008f0\u0001"+
		"\u0000\u0000\u0000\u0007\u0000:ty\u0083\u0085\u008c\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}