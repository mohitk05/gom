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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"BOOLEAN", "PUB", "LET", "FUNCTION", "RETURN", "IMPORT", "IF", "ELSE", 
		"OPERATOR", "DOT", "QUOTE", "EQ", "LEFTPAREN", "RIGHTPAREN", "LEFTBRACE", 
		"RIGHTBRACE", "COMMA", "SEMICOLON", "IDENTIFIER", "NUMBER", "DIGIT", "LETTER", 
		"STRING_LITERAL", "WHITE_SPACE",
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

	public static readonly _serializedATN: number[] = [4,0,24,144,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,59,8,0,1,1,1,1,1,1,1,1,1,2,1,2,
	1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
	1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,4,18,115,
	8,18,11,18,12,18,116,1,19,4,19,120,8,19,11,19,12,19,121,1,20,1,20,1,21,
	1,21,1,22,1,22,1,22,1,22,4,22,132,8,22,11,22,12,22,133,1,22,1,22,1,23,4,
	23,139,8,23,11,23,12,23,140,1,23,1,23,0,0,24,1,1,3,2,5,3,7,4,9,5,11,6,13,
	7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,
	39,20,41,21,43,22,45,23,47,24,1,0,4,2,0,43,43,45,45,1,0,48,57,2,0,65,90,
	97,122,3,0,9,10,13,13,32,32,150,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
	1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
	0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
	0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,
	0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,58,1,0,0,0,3,60,1,
	0,0,0,5,64,1,0,0,0,7,68,1,0,0,0,9,71,1,0,0,0,11,78,1,0,0,0,13,85,1,0,0,
	0,15,88,1,0,0,0,17,93,1,0,0,0,19,95,1,0,0,0,21,97,1,0,0,0,23,99,1,0,0,0,
	25,101,1,0,0,0,27,103,1,0,0,0,29,105,1,0,0,0,31,107,1,0,0,0,33,109,1,0,
	0,0,35,111,1,0,0,0,37,114,1,0,0,0,39,119,1,0,0,0,41,123,1,0,0,0,43,125,
	1,0,0,0,45,127,1,0,0,0,47,138,1,0,0,0,49,50,5,116,0,0,50,51,5,114,0,0,51,
	52,5,117,0,0,52,59,5,101,0,0,53,54,5,102,0,0,54,55,5,97,0,0,55,56,5,108,
	0,0,56,57,5,115,0,0,57,59,5,101,0,0,58,49,1,0,0,0,58,53,1,0,0,0,59,2,1,
	0,0,0,60,61,5,112,0,0,61,62,5,117,0,0,62,63,5,98,0,0,63,4,1,0,0,0,64,65,
	5,108,0,0,65,66,5,101,0,0,66,67,5,116,0,0,67,6,1,0,0,0,68,69,5,102,0,0,
	69,70,5,110,0,0,70,8,1,0,0,0,71,72,5,114,0,0,72,73,5,101,0,0,73,74,5,116,
	0,0,74,75,5,117,0,0,75,76,5,114,0,0,76,77,5,110,0,0,77,10,1,0,0,0,78,79,
	5,105,0,0,79,80,5,109,0,0,80,81,5,112,0,0,81,82,5,111,0,0,82,83,5,114,0,
	0,83,84,5,116,0,0,84,12,1,0,0,0,85,86,5,105,0,0,86,87,5,102,0,0,87,14,1,
	0,0,0,88,89,5,101,0,0,89,90,5,108,0,0,90,91,5,115,0,0,91,92,5,101,0,0,92,
	16,1,0,0,0,93,94,7,0,0,0,94,18,1,0,0,0,95,96,5,46,0,0,96,20,1,0,0,0,97,
	98,5,34,0,0,98,22,1,0,0,0,99,100,5,61,0,0,100,24,1,0,0,0,101,102,5,40,0,
	0,102,26,1,0,0,0,103,104,5,41,0,0,104,28,1,0,0,0,105,106,5,123,0,0,106,
	30,1,0,0,0,107,108,5,125,0,0,108,32,1,0,0,0,109,110,5,44,0,0,110,34,1,0,
	0,0,111,112,5,59,0,0,112,36,1,0,0,0,113,115,3,43,21,0,114,113,1,0,0,0,115,
	116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,38,1,0,0,0,118,120,3,41,
	20,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,
	40,1,0,0,0,123,124,7,1,0,0,124,42,1,0,0,0,125,126,7,2,0,0,126,44,1,0,0,
	0,127,131,3,21,10,0,128,132,3,41,20,0,129,132,3,43,21,0,130,132,5,32,0,
	0,131,128,1,0,0,0,131,129,1,0,0,0,131,130,1,0,0,0,132,133,1,0,0,0,133,131,
	1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,136,3,21,10,0,136,46,1,0,0,
	0,137,139,7,3,0,0,138,137,1,0,0,0,139,140,1,0,0,0,140,138,1,0,0,0,140,141,
	1,0,0,0,141,142,1,0,0,0,142,143,6,23,0,0,143,48,1,0,0,0,7,0,58,116,121,
	131,133,140,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GomLexer.__ATN) {
			GomLexer.__ATN = new ATNDeserializer().deserialize(GomLexer._serializedATN);
		}

		return GomLexer.__ATN;
	}


	static DecisionsToDFA = GomLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}