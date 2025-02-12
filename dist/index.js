import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../dist/InputsAdvent/AdventInput.txt');
function readFileContent(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent.replace(/\r/g, '').split('\n');
    }
    catch (error) {
        console.error("Errore durante la lettura del file:", error);
        return [];
    }
}
const lines = readFileContent(filePath);
readFileContent(filePath);
console.log(lines[0]);
let arrayString = [];
arrayString[0] = "lots";
console.log(arrayString[0]);
let stringExample = "lots";
let car = 'a';
const valueOfA = car.toLowerCase().charCodeAt(0);
const arr = new Array(26).fill(0);
console.log(arr);
for (let i = 0; i < stringExample.length; i++) {
    let char = stringExample.toLowerCase().charAt(i);
    arr[char.charCodeAt(0) - valueOfA]++;
}
let contoAnagramma = 0;
for (let i = 0; i < lines.length; i++) {
    const arrDiControllo = new Array(26).fill(0);
    if (lines[i].length != stringExample.length) {
        continue;
    }
    for (let j = 0; j < stringExample.length; j++) {
        let char = lines[i].toLowerCase().charAt(j);
        arrDiControllo[char.charCodeAt(0) - valueOfA]++;
    }
    if (lines[i] !== stringExample) {
        if (arr.length === arrDiControllo.length && arr.every((value, index) => value === arrDiControllo[index])) {
            contoAnagramma++;
        }
    }
}
console.log(contoAnagramma);
//# sourceMappingURL=index.js.map