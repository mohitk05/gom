grammar Gom;

program
    : importStatement* (functionDecl | statement)+ EOF
    ;

importStatement
    : IMPORT IDENTIFIER SEMICOLON
    ;

functionDecl
    : PUB? FUNCTION IDENTIFIER LEFTPAREN (typedIdentifier (COMMA typedIdentifier)*)? RIGHTPAREN COLON TYPE statementBlock
    ;

typedIdentifier
    : IDENTIFIER COLON TYPE
    ; 

statementBlock
    : LEFTBRACE statement+ RIGHTBRACE
    ;

statement
    : letStatement
    | returnStatement
    | expressionStatement
    | ifStatement
    ;

letStatement
    : LET IDENTIFIER EQ expression SEMICOLON
    ;

returnStatement
    : RETURN expression SEMICOLON
    ;

ifStatement
    : IF LEFTPAREN expression RIGHTPAREN statementBlock (ELSE statementBlock)?
    ;

expressionStatement
    : expression SEMICOLON
    ;   

expression
    : IDENTIFIER expressionTail?
    | NUMBER expressionTail?
    | STRING_LITERAL expressionTail?
    | BOOLEAN expressionTail?
    | call expressionTail?
    | access expressionTail?
    ;

expressionTail    
    : OPERATOR expression
    ;

call
    : IDENTIFIER LEFTPAREN (expression (COMMA expression)*)? RIGHTPAREN
    ;

access
    : IDENTIFIER DOT call
    ;

TYPE
    : 'int'
    | 'string'
    | 'bool'
    | 'null'
    ;

BOOLEAN
    : 'true'
    | 'false'
    ;

PUB
    : 'pub'
    ;

LET
    : 'let'
    ;

FUNCTION
    : 'fn'
    ;

RETURN
    : 'return'
    ;

IMPORT
    : 'import'
    ;

IF
    : 'if'
    ;

ELSE
    : 'else'
    ;

OPERATOR
    : '+'
    | '-'
    ;

DOT
    : '.'
    ;

QUOTE
    : '"'
    ;

EQ
    : '='
    ;

LEFTPAREN
    : '('
    ;

RIGHTPAREN
    : ')'
    ;

LEFTBRACE
    : '{'
    ;

RIGHTBRACE
    : '}'
    ;

COMMA
    : ','
    ;

SEMICOLON
    : ';'
    ;

COLON
    : ':'
    ;
    
IDENTIFIER
    : LETTER (LETTER | '_' | DIGIT)*
    ;

NUMBER
    : DIGIT+
    ;

DIGIT
    : [0-9]
    ;

LETTER
    : [a-zA-Z]
    ;

STRING_LITERAL
    : QUOTE ~["]* QUOTE
    ;

WHITE_SPACE
    : [ \t\r\n]+ -> skip
    ;