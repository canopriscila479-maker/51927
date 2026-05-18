grammar ejercicio4;

// ── REGLAS SINTÁCTICAS ──────────────────────

prog : stat+ ;

stat : decl
     | assign
     | expr ';'
     ;

decl   : ('let' | 'var') ID ('=' expr)? ';' ;

assign : ID '=' expr ';' ;

expr : expr ('*' | '/') expr    #MulDiv
     | expr ('+' | '-') expr    #AddSub
     | '(' expr ')'             #parens
     | ID                       #id
     | NUMBER                   #number
     ;

// ── REGLAS LÉXICAS (TOKENS) ─────────────────

ID     : [a-zA-Z_][a-zA-Z_0-9]* ;
NUMBER : [0-9]+ ;
WS     : [ \t\r\n]+ -> skip ;
