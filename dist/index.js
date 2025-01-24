"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function main() {
    const filePath = "C:\\Users\\newFr\\OneDrive\\Desktop\\InputExercise.txt";
    try {
        const fileContent = fs_1.default.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split(/\r?\n/);
        console.log("File letto correttamente:", lines);
        let totale = 0;
        for (const line of lines) {
            if (line.trim() === "")
                continue;
            const numeri = line
                .split(" ")
                .map(s => parseInt(s))
                .filter(n => !isNaN(n));
            console.log("Numeri analizzati:", numeri.join(" "));
            if (isSicuroConDampener(numeri)) {
                totale++;
            }
        }
        console.log("TOTALE: " + totale);
    }
    catch (error) {
        console.error("Errore durante la lettura del file:", error);
    }
}
function isSicuroConDampener(numeri) {
    if (isSicuro(numeri)) {
        return true;
    }
    for (let i = 0; i < numeri.length; i++) {
        const numeriModificato = [...numeri];
        numeriModificato.splice(i, 1);
        if (isSicuro(numeriModificato)) {
            return true;
        }
    }
    return false;
}
function isSicuro(numeri) {
    if (numeri.length < 2)
        return false;
    const crescente = numeri[0] < numeri[1];
    for (let i = 0; i < numeri.length - 1; i++) {
        const differenza = numeri[i + 1] - numeri[i];
        if (Math.abs(differenza) > 3 || differenza === 0) {
            return false;
        }
        if ((crescente && differenza < 0) || (!crescente && differenza > 0)) {
            return false;
        }
    }
    return true;
}
main();
isSicuro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]);
//# sourceMappingURL=index.js.map