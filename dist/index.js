"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function main() {
    const filePath = "C:\\Users\\newFr\\OneDrive\\Desktop\\InputExercise.txt";
    const fileContent = fs_1.default.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split(/\r?\n/);
    console.log(lines);
    let totale = 0;
    for (const line of lines) {
        if (line.trim() === "")
            continue;
        const numeri = line.split(" ").map(s => parseInt(s));
        console.log(numeri.join(" "));
        if (isSicuroConDampener(numeri)) {
            totale++;
        }
    }
    console.log("TOTALE: " + totale);
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
console.log(main());
//# sourceMappingURL=index.js.map