// Generated from Gom.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class GomLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"TYPE", "BOOLEAN", "PUB", "LET", "FUNCTION", "RETURN", "IMPORT", "IF", 
		"ELSE", "OPERATOR", "DOT", "QUOTE", "EQ", "LEFTPAREN", "RIGHTPAREN", "LEFTBRACE", 
		"RIGHTBRACE", "COMMA", "SEMICOLON", "COLON", "IDENTIFIER", "NUMBER", "DIGIT", 
		"LETTER", "STRING_LITERAL", "WHITE_SPACE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, GomLexer._ATN, GomLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Gom.g4"; }

	public get literalNames(): (string | null)[] { return GomLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return GomLexer.symbolicNames; }
	public get ruleNames(): string[] { return GomLexer.ruleNames; }

	public get serializedATN(): number[] { return GomLexer._serializedATN; }

	public get channelNames(): string[] { return GomLexer.channelNames; }

	public get modeNames(): string[] { return GomLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,26,172,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
	1,0,1,0,1,0,1,0,3,0,71,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,82,8,
	1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
	10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
	1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,5,20,143,8,20,10,20,12,20,
	146,9,20,1,21,4,21,149,8,21,11,21,12,21,150,1,22,1,22,1,23,1,23,1,24,1,
	24,5,24,159,8,24,10,24,12,24,162,9,24,1,24,1,24,1,25,4,25,167,8,25,11,25,
	12,25,168,1,25,1,25,0,0,26,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
	21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,
	45,23,47,24,49,25,51,26,1,0,5,2,0,43,43,45,45,1,0,48,57,2,0,65,90,97,122,
	1,0,34,34,3,0,9,10,13,13,32,32,181,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
	0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
	0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
	29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,
	0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,
	51,1,0,0,0,1,70,1,0,0,0,3,81,1,0,0,0,5,83,1,0,0,0,7,87,1,0,0,0,9,91,1,0,
	0,0,11,94,1,0,0,0,13,101,1,0,0,0,15,108,1,0,0,0,17,111,1,0,0,0,19,116,1,
	0,0,0,21,118,1,0,0,0,23,120,1,0,0,0,25,122,1,0,0,0,27,124,1,0,0,0,29,126,
	1,0,0,0,31,128,1,0,0,0,33,130,1,0,0,0,35,132,1,0,0,0,37,134,1,0,0,0,39,
	136,1,0,0,0,41,138,1,0,0,0,43,148,1,0,0,0,45,152,1,0,0,0,47,154,1,0,0,0,
	49,156,1,0,0,0,51,166,1,0,0,0,53,54,5,105,0,0,54,55,5,110,0,0,55,71,5,116,
	0,0,56,57,5,115,0,0,57,58,5,116,0,0,58,59,5,114,0,0,59,60,5,105,0,0,60,
	61,5,110,0,0,61,71,5,103,0,0,62,63,5,98,0,0,63,64,5,111,0,0,64,65,5,111,
	0,0,65,71,5,108,0,0,66,67,5,110,0,0,67,68,5,117,0,0,68,69,5,108,0,0,69,
	71,5,108,0,0,70,53,1,0,0,0,70,56,1,0,0,0,70,62,1,0,0,0,70,66,1,0,0,0,71,
	2,1,0,0,0,72,73,5,116,0,0,73,74,5,114,0,0,74,75,5,117,0,0,75,82,5,101,0,
	0,76,77,5,102,0,0,77,78,5,97,0,0,78,79,5,108,0,0,79,80,5,115,0,0,80,82,
	5,101,0,0,81,72,1,0,0,0,81,76,1,0,0,0,82,4,1,0,0,0,83,84,5,112,0,0,84,85,
	5,117,0,0,85,86,5,98,0,0,86,6,1,0,0,0,87,88,5,108,0,0,88,89,5,101,0,0,89,
	90,5,116,0,0,90,8,1,0,0,0,91,92,5,102,0,0,92,93,5,110,0,0,93,10,1,0,0,0,
	94,95,5,114,0,0,95,96,5,101,0,0,96,97,5,116,0,0,97,98,5,117,0,0,98,99,5,
	114,0,0,99,100,5,110,0,0,100,12,1,0,0,0,101,102,5,105,0,0,102,103,5,109,
	0,0,103,104,5,112,0,0,104,105,5,111,0,0,105,106,5,114,0,0,106,107,5,116,
	0,0,107,14,1,0,0,0,108,109,5,105,0,0,109,110,5,102,0,0,110,16,1,0,0,0,111,
	112,5,101,0,0,112,113,5,108,0,0,113,114,5,115,0,0,114,115,5,101,0,0,115,
	18,1,0,0,0,116,117,7,0,0,0,117,20,1,0,0,0,118,119,5,46,0,0,119,22,1,0,0,
	0,120,121,5,34,0,0,121,24,1,0,0,0,122,123,5,61,0,0,123,26,1,0,0,0,124,125,
	5,40,0,0,125,28,1,0,0,0,126,127,5,41,0,0,127,30,1,0,0,0,128,129,5,123,0,
	0,129,32,1,0,0,0,130,131,5,125,0,0,131,34,1,0,0,0,132,133,5,44,0,0,133,
	36,1,0,0,0,134,135,5,59,0,0,135,38,1,0,0,0,136,137,5,58,0,0,137,40,1,0,
	0,0,138,144,3,47,23,0,139,143,3,47,23,0,140,143,5,95,0,0,141,143,3,45,22,
	0,142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,
	1,0,0,0,144,145,1,0,0,0,145,42,1,0,0,0,146,144,1,0,0,0,147,149,3,45,22,
	0,148,147,1,0,0,0,149,150,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,44,
	1,0,0,0,152,153,7,1,0,0,153,46,1,0,0,0,154,155,7,2,0,0,155,48,1,0,0,0,156,
	160,3,23,11,0,157,159,8,3,0,0,158,157,1,0,0,0,159,162,1,0,0,0,160,158,1,
	0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,3,23,11,0,
	164,50,1,0,0,0,165,167,7,4,0,0,166,165,1,0,0,0,167,168,1,0,0,0,168,166,
	1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,171,6,25,0,0,171,52,1,0,0,0,
	8,0,70,81,142,144,150,160,168,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GomLexer.__ATN) {
			GomLexer.__ATN = new ATNDeserializer().deserialize(GomLexer._serializedATN);
		}

		return GomLexer.__ATN;
	}


	static DecisionsToDFA = GomLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}