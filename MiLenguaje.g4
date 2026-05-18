grammar MiLenguaje;

programa : instrucciones EOF ;

instrucciones
    : instruccion
    | instrucciones instruccion
    ;

instruccion : bucle ;

bucle
    : WHILE LPAREN condicion RPAREN LBRACE sentencia RBRACE  #whileBucle
    ;

sentencia
    : salida              #salidaSola
    | salida sentencia    #salidaYMas
    | terminar            #terminarSola
    ;

salida    : PRINTF LPAREN cadena RPAREN SEMICOLON  #printfSalida ;
terminar  : BREAK SEMICOLON                        #breakTerminar ;
condicion : CERO #condFalse | UNO #condTrue ;

cadena      : COMILLA caracteres COMILLA ;
caracteres  : caracter | caracteres caracter ;
caracter    : LETRA | DIGITO | SIMBOLO ;

WHILE   : 'while' ;
PRINTF  : 'printf' ;
BREAK   : 'break' ;
LPAREN  : '(' ;
RPAREN  : ')' ;
LBRACE  : '{' ;
RBRACE  : '}' ;
SEMICOLON : ';' ;
COMILLA : '"' ;
CERO    : '0' ;
UNO     : '1' ;
LETRA   : [a-zA-Z] ;
DIGITO  : [0-9] ;
SIMBOLO : '.' | ',' | '!' | '?' | ':' | '-' ;
WS      : [ \t\r\n]+ -> skip ;