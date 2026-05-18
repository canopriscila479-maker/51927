// Generated from MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,15,82,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,51,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,3,7,64,8,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,75,8,9,10,9,12,
9,78,9,9,1,10,1,10,1,10,0,2,2,18,11,0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,
12,14,75,0,22,1,0,0,0,2,25,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,50,1,0,0,
0,10,52,1,0,0,0,12,58,1,0,0,0,14,63,1,0,0,0,16,65,1,0,0,0,18,69,1,0,0,0,
20,79,1,0,0,0,22,23,3,2,1,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,6,1,-1,0,26,
27,3,4,2,0,27,32,1,0,0,0,28,29,10,1,0,0,29,31,3,4,2,0,30,28,1,0,0,0,31,34,
1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,3,6,
3,0,36,5,1,0,0,0,37,38,5,1,0,0,38,39,5,4,0,0,39,40,3,14,7,0,40,41,5,5,0,
0,41,42,5,6,0,0,42,43,3,8,4,0,43,44,5,7,0,0,44,7,1,0,0,0,45,51,3,10,5,0,
46,47,3,10,5,0,47,48,3,8,4,0,48,51,1,0,0,0,49,51,3,12,6,0,50,45,1,0,0,0,
50,46,1,0,0,0,50,49,1,0,0,0,51,9,1,0,0,0,52,53,5,2,0,0,53,54,5,4,0,0,54,
55,3,16,8,0,55,56,5,5,0,0,56,57,5,8,0,0,57,11,1,0,0,0,58,59,5,3,0,0,59,60,
5,8,0,0,60,13,1,0,0,0,61,64,5,10,0,0,62,64,5,11,0,0,63,61,1,0,0,0,63,62,
1,0,0,0,64,15,1,0,0,0,65,66,5,9,0,0,66,67,3,18,9,0,67,68,5,9,0,0,68,17,1,
0,0,0,69,70,6,9,-1,0,70,71,3,20,10,0,71,76,1,0,0,0,72,73,10,1,0,0,73,75,
3,20,10,0,74,72,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,19,
1,0,0,0,78,76,1,0,0,0,79,80,7,0,0,0,80,21,1,0,0,0,4,32,50,63,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'while'", "'printf'", "'break'", "'('", 
                            "')'", "'{'", "'}'", "';'", "'\"'", "'0'", "'1'" ];
    static symbolicNames = [ null, "WHILE", "PRINTF", "BREAK", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", 
                             "COMILLA", "CERO", "UNO", "LETRA", "DIGITO", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones(0);
	        this.state = 23;
	        this.match(MiLenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MiLenguajeParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_instrucciones);
	                this.state = 28;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 29;
	                this.instruccion(); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_bucle);
	    try {
	        localctx = new WhileBucleContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(MiLenguajeParser.WHILE);
	        this.state = 38;
	        this.match(MiLenguajeParser.LPAREN);
	        this.state = 39;
	        this.condicion();
	        this.state = 40;
	        this.match(MiLenguajeParser.RPAREN);
	        this.state = 41;
	        this.match(MiLenguajeParser.LBRACE);
	        this.state = 42;
	        this.sentencia();
	        this.state = 43;
	        this.match(MiLenguajeParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_sentencia);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SalidaSolaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.salida();
	            break;

	        case 2:
	            localctx = new SalidaYMasContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.salida();
	            this.state = 47;
	            this.sentencia();
	            break;

	        case 3:
	            localctx = new TerminarSolaContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_salida);
	    try {
	        localctx = new PrintfSalidaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(MiLenguajeParser.PRINTF);
	        this.state = 53;
	        this.match(MiLenguajeParser.LPAREN);
	        this.state = 54;
	        this.cadena();
	        this.state = 55;
	        this.match(MiLenguajeParser.RPAREN);
	        this.state = 56;
	        this.match(MiLenguajeParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_terminar);
	    try {
	        localctx = new BreakTerminarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(MiLenguajeParser.BREAK);
	        this.state = 59;
	        this.match(MiLenguajeParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiLenguajeParser.RULE_condicion);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new CondFalseContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(MiLenguajeParser.CERO);
	            break;
	        case 11:
	            localctx = new CondTrueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(MiLenguajeParser.UNO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiLenguajeParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MiLenguajeParser.COMILLA);
	        this.state = 66;
	        this.caracteres(0);
	        this.state = 67;
	        this.match(MiLenguajeParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, MiLenguajeParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_caracteres);
	                this.state = 72;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 73;
	                this.caracter(); 
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiLenguajeParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.WHILE = 1;
MiLenguajeParser.PRINTF = 2;
MiLenguajeParser.BREAK = 3;
MiLenguajeParser.LPAREN = 4;
MiLenguajeParser.RPAREN = 5;
MiLenguajeParser.LBRACE = 6;
MiLenguajeParser.RBRACE = 7;
MiLenguajeParser.SEMICOLON = 8;
MiLenguajeParser.COMILLA = 9;
MiLenguajeParser.CERO = 10;
MiLenguajeParser.UNO = 11;
MiLenguajeParser.LETRA = 12;
MiLenguajeParser.DIGITO = 13;
MiLenguajeParser.SIMBOLO = 14;
MiLenguajeParser.WS = 15;

MiLenguajeParser.RULE_programa = 0;
MiLenguajeParser.RULE_instrucciones = 1;
MiLenguajeParser.RULE_instruccion = 2;
MiLenguajeParser.RULE_bucle = 3;
MiLenguajeParser.RULE_sentencia = 4;
MiLenguajeParser.RULE_salida = 5;
MiLenguajeParser.RULE_terminar = 6;
MiLenguajeParser.RULE_condicion = 7;
MiLenguajeParser.RULE_cadena = 8;
MiLenguajeParser.RULE_caracteres = 9;
MiLenguajeParser.RULE_caracter = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(MiLenguajeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_bucle;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class WhileBucleContext extends BucleContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(MiLenguajeParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(MiLenguajeParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiLenguajeParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MiLenguajeParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(MiLenguajeParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterWhileBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitWhileBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitWhileBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.WhileBucleContext = WhileBucleContext;

class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_sentencia;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SalidaYMasContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterSalidaYMas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitSalidaYMas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitSalidaYMas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.SalidaYMasContext = SalidaYMasContext;

class SalidaSolaContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterSalidaSola(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitSalidaSola(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitSalidaSola(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.SalidaSolaContext = SalidaSolaContext;

class TerminarSolaContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterTerminarSola(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitTerminarSola(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitTerminarSola(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.TerminarSolaContext = TerminarSolaContext;

class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_salida;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintfSalidaContext extends SalidaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PRINTF() {
	    return this.getToken(MiLenguajeParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(MiLenguajeParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(MiLenguajeParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(MiLenguajeParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrintfSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrintfSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrintfSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.PrintfSalidaContext = PrintfSalidaContext;

class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_terminar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BreakTerminarContext extends TerminarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BREAK() {
	    return this.getToken(MiLenguajeParser.BREAK, 0);
	};

	SEMICOLON() {
	    return this.getToken(MiLenguajeParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterBreakTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitBreakTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitBreakTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.BreakTerminarContext = BreakTerminarContext;

class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_condicion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CondFalseContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CERO() {
	    return this.getToken(MiLenguajeParser.CERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCondFalse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCondFalse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCondFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.CondFalseContext = CondFalseContext;

class CondTrueContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UNO() {
	    return this.getToken(MiLenguajeParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCondTrue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCondTrue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCondTrue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.CondTrueContext = CondTrueContext;

class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiLenguajeParser.COMILLA);
	    } else {
	        return this.getToken(MiLenguajeParser.COMILLA, i);
	    }
	};


	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(MiLenguajeParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(MiLenguajeParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(MiLenguajeParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.ProgramaContext = ProgramaContext; 
MiLenguajeParser.InstruccionesContext = InstruccionesContext; 
MiLenguajeParser.InstruccionContext = InstruccionContext; 
MiLenguajeParser.BucleContext = BucleContext; 
MiLenguajeParser.SentenciaContext = SentenciaContext; 
MiLenguajeParser.SalidaContext = SalidaContext; 
MiLenguajeParser.TerminarContext = TerminarContext; 
MiLenguajeParser.CondicionContext = CondicionContext; 
MiLenguajeParser.CadenaContext = CadenaContext; 
MiLenguajeParser.CaracteresContext = CaracteresContext; 
MiLenguajeParser.CaracterContext = CaracterContext; 
