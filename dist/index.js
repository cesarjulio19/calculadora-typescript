"use strict";
// src/index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
function main() {
    console.log('=== Calculadora Basica en TypeScript ===');
    // Solicitar al usuario que ingrese dos números
    const num1 = readline.questionFloat('Ingrese el primer numero: ');
    const num2 = readline.questionFloat('Ingrese el segundo numero: ');
    // Mostrar menú de operaciones
    const operaciones = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];
    const indice = readline.keyInSelect(operaciones, 'Seleccione una operacion: ');
    if (indice === -1) {
        console.log('Operacion cancelada.');
        return;
    }
    // Realizar la operación seleccionada
    let resultado;
    switch (indice) {
        case 0: // Sumar
            resultado = num1 + num2;
            break;
        case 1: // Restar
            resultado = num1 - num2;
            break;
        case 2: // Multiplicar
            resultado = num1 * num2;
            break;
        case 3: // Dividir
            if (num2 === 0) {
                console.log('Error: Division por cero.');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            console.log('Operacion no valida.');
            return;
    }
    console.log(`El resultado es: ${resultado}`);
    // Preguntar si desea realizar otra operación
    const continuar = readline.keyInYN('¿Desea realizar otra operacion? ');
    if (continuar) {
        main(); // Llamada recursiva para reiniciar el proceso
    }
    else {
        console.log('Gracias por usar la calculadora.');
    }
}
// Ejecutar la función principal
main();
//# sourceMappingURL=index.js.map