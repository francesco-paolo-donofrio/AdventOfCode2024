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
console.log("File letto correttamente:", lines);
for (let i = 0; i < 10; i++) {
    const parts = lines[i].split("/\s+/");
    console.log(parts);
    const firstNumber = parseInt(parts[0], 10);
    const rightParts = lines[i].split(/\s+/);
    const secondNumber = parseInt(rightParts[1], 10);
    console.log("Questo è il secondo elemento ", secondNumber);
    const leftList = [];
    leftList.push(firstNumber);
}
//# sourceMappingURL=index.js.map