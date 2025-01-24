import fs from 'fs';
import { URL } from 'url';

function readFileContent(filePath: string): string[] {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent.replace(/\r/g, '').split('\n');
    } catch (error) {
        console.error("Errore durante la lettura del file:", error);
        return [];
    }
}

const filePath = new URL('C:\\Desktop_nuovo\\esercizi-boolean\\Typescript\\AdventOfCode2024\\dist\\file-di-prova.txt', import.meta.url).pathname;
const lines = readFileContent(filePath);

// Logica di elaborazione delle linee qui
console.log("File letto correttamente:", lines);
// Questo approccio esegue la lettura e l'elaborazione direttamente, senza bisogno di chiamare una funzione main().

//  Copy
// Retry



// Claude can make mistakes. Please double-check responses.



