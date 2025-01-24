import fs from 'fs';
import { URL } from 'url';
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
const filePath = new URL('C:\\Desktop_nuovo\\esercizi-boolean\\Typescript\\AdventOfCode2024\\dist\\file-di-prova.txt', import.meta.url).pathname;
const lines = readFileContent(filePath);
console.log("File letto correttamente:", lines);
//# sourceMappingURL=index.js.map