
import fs from 'fs';
import * as readline from 'readline';


// Advent number.1



// Advent number.2

function main() {
    const filePath = "C:\\Users\\newFr\\OneDrive\\Desktop\\InputExercise.txt";
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split(/\r?\n/);
    console.log(lines);
    let totale = 0;

    for (const line of lines) {
        if (line.trim() === "") continue;

        const numeri = line.split(" ").map(s => parseInt(s));
        console.log(numeri.join(" "));

        if (isSicuroConDampener(numeri)) {
            totale++;
        }
    }
    console.log("TOTALE: " + totale);
}

function isSicuroConDampener(numeri: number[]): boolean {
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

function isSicuro(numeri: number[]): boolean {
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







// async function leggiFile(filePath: string): Promise<string[]> {
//     const righe: string[] = [];

//     // Creazione dello stream per la lettura del file
//     const fileStream = fs.createReadStream(filePath);

//     // Interfaccia readline per leggere il file riga per riga
//     const rl = readline.createInterface({
//         input: fileStream,
//         crlfDelay: Infinity, // Supporta tutti i tipi di terminatori di riga (\n, \r\n)
//     });

//     // Leggi riga per riga
//     for await (const line of rl) {
//         righe.push(line);
//     }

//     return righe;
// }

// // Esempio di utilizzo
// (async () => {
//     const filePath = "C:\\Users\\newFr\\OneDrive\\Desktop\\InputExercise.txt";
//     try {
//         const righe = await leggiFile(filePath);
//         console.log(righe); 
//     } catch (error) {
//         console.error("Errore durante la lettura del file:", error);
//     }
// })(); 