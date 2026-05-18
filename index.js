import antlr4 from 'antlr4';
const { CharStreams, CommonTokenStream } = antlr4;
import MiLenguajeLexer from './generated/MiLenguajeLexer.js';
import MiLenguajeParser from './generated/MiLenguajeParser.js';
import { CustomMiLenguajeVisitor } from './CustomMiLenguajeVisitor.js';

import fs from 'fs';

class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errores.push(`❌ Error en línea ${line}, columna ${column}: ${msg}`);
    }
}

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error('No se encontró input.txt');
        process.exit(1);
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new MiLenguajeLexer(inputStream);
    const errorListener = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    console.log('\n=== TABLA DE TOKENS ===');
    for (const token of tokenStream.tokens) {
        if (token.type !== -1) {
            console.log(`Línea ${token.line} | Token: "${token.text}" | Tipo: ${token.type}`);
        }
    }

    const parser = new MiLenguajeParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    const tree = parser.programa();

    if (errorListener.errores.length > 0) {
        console.log('\n=== ERRORES ENCONTRADOS ===');
        errorListener.errores.forEach(e => console.log(e));
    } else {
        console.log('\n✅ Entrada válida.');
        console.log('\n=== ÁRBOL SINTÁCTICO ===');
        console.log(tree.toStringTree(parser.ruleNames));
        console.log('\n=== INTERPRETACIÓN ===');
        const visitor = new CustomMiLenguajeVisitor();
        visitor.visit(tree);
    }
}

main();