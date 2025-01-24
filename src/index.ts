const fs = require('fs');

const filePath = "C:\\Desktop_nuovo\\esercizi-boolean\\Typescript\\AdventOfCode2024\\dist\\file-di-prova.txt";

fs.readFile(filePath, 'utf-8', (err : any, data : any) => {
    if (err) {
        console.error('Errore nella lettura del file:', err);
        return;
    }

    console.log('Contenuto del file:');
    console.log(data);
});

// Advent number.1

// Advent number.2

// function main(): void {
//     const filePath = "C:\\Desktop_nuovo\\esercizi-boolean\\Typescript\\AdventOfCode2024\\dist\\file-di-prova.txt";
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//          const lines = fileContent.split(/\r?\n/);
//          console.log("File letto correttamente:", lines);
//     for (let i = 0; i < 10; i++) {
//         console.log("Riga " + i + ": " + lines[i]);
//     }
//     // try {
//     //     // Leggi il contenuto del file
//     //     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     //     const lines = fileContent.split(/\r?\n/);
//     //     console.log("File letto correttamente:", lines);

//     //     let totale = 0;

//     //     for (const line of lines) {
//     //         if (line.trim() === "") continue; // Ignora righe vuote

//     //         const numeri = line
//     //             .split(" ")
//     //             .map(s => parseInt(s))
//     //             .filter(n => !isNaN(n)); // Filtra eventuali valori NaN

//     //         console.log("Numeri analizzati:", numeri.join(" "));

//     //         if (isSicuroConDampener(numeri)) {
//     //             totale++;
//     //         }
//     //     }
//     //     console.log("TOTALE: " + totale);
//     // } catch (error) {
//     //     console.error("Errore durante la lettura del file:", error);
//     // }
// }

// function isSicuroConDampener(numeri: number[]): boolean {
//     if (isSicuro(numeri)) {
//         return true;
//     }
//     for (let i = 0; i < numeri.length; i++) {
//         const numeriModificato = [...numeri];
//         numeriModificato.splice(i, 1); // Rimuove un elemento
//         if (isSicuro(numeriModificato)) {
//             return true;
//         }
//     }
//     return false;
// }

// function isSicuro(numeri: number[]): boolean {
//     if (numeri.length < 2) return false; // Una sequenza con meno di due numeri non può essere sicura

//     const crescente = numeri[0] < numeri[1];
//     for (let i = 0; i < numeri.length - 1; i++) {
//         const differenza = numeri[i + 1] - numeri[i];

//         if (Math.abs(differenza) > 3 || differenza === 0) {
//             return false;
//         }
//         if ((crescente && differenza < 0) || (!crescente && differenza > 0)) {
//             return false;
//         }
//     }
//     return true;
// }

// Esegui la funzione principale
// console.log(main());
