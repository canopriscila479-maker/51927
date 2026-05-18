import MiLenguajeVisitor from './generated/MiLenguajeVisitor.js';

export class CustomMiLenguajeVisitor extends MiLenguajeVisitor {

    visitPrograma(ctx) {
        this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
        if (ctx.instrucciones()) {
            this.visit(ctx.instrucciones());
        }
        this.visit(ctx.instruccion());
    }

    visitInstruccion(ctx) {
        this.visit(ctx.bucle());
    }

    visitWhileBucle(ctx) {
        const condicion = this.visit(ctx.condicion());
        if (condicion) {
            this.visit(ctx.sentencia());
        }
    }

    visitCondTrue(ctx) { return true; }
    visitCondFalse(ctx) { return false; }

    visitSalidaSola(ctx) {
        this.visit(ctx.salida());
    }

    visitSalidaYMas(ctx) {
        this.visit(ctx.salida());
        this.visit(ctx.sentencia());
    }

    visitTerminarSola(ctx) {}

    visitPrintfSalida(ctx) {
        const texto = this.visit(ctx.cadena());
        console.log('>> ' + texto);
    }

    visitBreakTerminar(ctx) {}

    visitCadena(ctx) {
        return this.visit(ctx.caracteres());
    }

    visitCaracteres(ctx) {
        if (ctx.caracteres()) {
            return this.visit(ctx.caracteres()) + this.visit(ctx.caracter());
        }
        return this.visit(ctx.caracter());
    }

    visitCaracter(ctx) {
        if (ctx.LETRA()) return ctx.LETRA().getText();
        if (ctx.DIGITO()) return ctx.DIGITO().getText();
        if (ctx.SIMBOLO()) return ctx.SIMBOLO().getText();
        return '';
    }
}