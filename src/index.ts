import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../dist/InputsAdvent/AdventInput.txt');

function readFileContent(filePath: string): string[] {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent.replace(/\r/g, '').split('\n');
    } catch (error) {
        console.error("Errore durante la lettura del file:", error);
        return [];
    }
}

const lines = readFileContent(filePath);

readFileContent(filePath);

// console.log("File letto correttamente:", lines);

// Advent 1 first part

const leftList: number[] = [];
const rightList: number[] = [];

// const rightParts = lines[1].split("/\s+/");
// console.log("Questo è rightParts ", rightParts);
// console.log("Questo è parts " , parts);

lines.forEach(string => {
    const parts = string.trim().replace(/\s+/g, ' ').split(' ');
    // console.log(parts);
    const firstNumber = parseInt(parts[0], 10);
    const secondNumber = parseInt(parts[1], 10);
    // console.log("Questo è firstNumber ", firstNumber);
    // console.log("Questo è secondNumber ", secondNumber);
    leftList.push(firstNumber);
    rightList.push(secondNumber);
});

// console.log("Questo è leftList ", leftList);
// console.log("Questo è rightList ", rightList);

function calculateTotalDistance(leftList: number[], rightList: number[]): number {

    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);

    let totalDistance = 0;

    for (let i = 0; i < sortedLeft.length; i++) {
        totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
    }

    return totalDistance;
}

calculateTotalDistance(leftList, rightList);

// Advent 1 second part

// function similarityScore(leftList: number[], rightList: number[]): void {
//     for (let i = 0; i < leftList.length; i++) {
//         const sameNumber = rightList.filter(num => num === leftList[i])
//         // console.log("this is samenumber[0]" , sameNumber[0]);
//         for (let y = 0; y < sameNumber.length; y++){
//             // let sum = 0;
//             console.log("this is samenumber.length" , sameNumber.length);
//             console.log("this is samenumber[0]" , sameNumber[0]);
//              let moltiplication = sameNumber[0] * sameNumber.length;
//             console.log("moltiplication" , moltiplication);
//         }
//     }
// }
// similarityScore(leftList, rightList);

function similarityScore(leftList: number[], rightList: number[]): number {
    let totalScore = 0;

    // Conta la frequenza dei numeri nella lista destra
    const rightCounts = new Map<number, number>();
    for (const num of rightList) {
        rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
    }

    // Calcola il punteggio di similarità
    for (const num of leftList) {
        const count = rightCounts.get(num) || 0;
        totalScore += num * count;
    }

    return totalScore;
}

similarityScore(leftList, rightList);

// Advent 3 - First part
const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
let finalResult = 0;
let flag = true;
for (let y = 0; y < lines.length; y++){

    let exampleInput : string = lines[y];
    
const risultato: string[] = [];
for (const match of exampleInput.matchAll(regex)) {
    risultato.push(match[0]);
    // console.log(risultato);
}

console.log(risultato);
const newResult : string[] = [];
for (let i = 0; i < risultato.length; i++){
    newResult[i] = risultato[i].replace(/[mul()]/g, "");
}

console.log(newResult);

for (let i = 0; i < newResult.length; i++){
    if (newResult[i] === "don't"){
        flag = false;
    } if (newResult[i] === "do"){
        flag = true;
    } else if (flag){
        let arrayString : string[] = [];
        arrayString = newResult[i].split(",");
        finalResult += parseInt(arrayString[0]) * parseInt(arrayString[1]);
    } 
}
}
console.log(finalResult);

// Esercizi avvento array bidimensionali

// Esercizio 1:
// Somma degli elementi di una matrice
// Scrivi un programma che calcola la somma di tutti gli elementi in una matrice di interi.
// Esempio:
// Input:
// 1 2 3
// 4 5 6
// 7 8 9

// Output:
// Somma totale: 45

// Obiettivo didattico: Imparare a iterare su ogni elemento di una matrice usando doppi cicli.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 2:
// Trova il massimo e il minimo in una matrice
// Scrivi un programma che trova il valore massimo e il valore minimo in una matrice di interi.
// Esempio:
// Input:
// 3 5 1
// 7 2 9
// 4 6 8

// Output:
// Massimo: 9
// Minimo: 1

// Obiettivo didattico: Prendere confidenza con il confronto tra gli elementi di una matrice.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 3:
// Somma delle righe e delle colonne
// Calcola la somma degli elementi di ciascuna riga e di ciascuna colonna.
// Esempio:
// Input:
// 2 3 4
// 5 6 7
// 8 9 10

// Output:
// Somma righe: [9, 18, 27]
// Somma colonne: [15, 18, 21]

// Obiettivo didattico: Imparare a navigare separatamente righe e colonne.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 4:
// Trasposizione di una matrice
// Scrivi un programma che calcola la trasposta di una matrice. La trasposta si ottiene scambiando righe e colonne.
// Esempio:
// Input:
// 1 2 3
// 4 5 6

// Output (trasposta):
// 1 4
// 2 5
// 3 6

// Obiettivo didattico: Comprendere come accedere agli elementi di una matrice in modo non sequenziale.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 5:
// Trova un elemento specifico nella matrice
// Dato un numero, verifica se è presente nella matrice e restituisci la posizione (riga, colonna).
// Esempio:
// Input:
// Matrice:
// 1 2 3
// 4 5 6
// 7 8 9
// Numero da cercare: 5

// Output:
// Trovato alla posizione: (1, 1)

// Obiettivo didattico: Comprendere l'accesso agli indici e la ricerca in una matrice.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 6:
// Conta elementi pari e dispari
// Scrivi un programma che conta quanti numeri pari e dispari ci sono in una matrice.
// Esempio:
// Input:
// 2 5 8
// 7 4 1
// 9 6 3

// Output:
// Pari: 5
// Dispari: 4

// Obiettivo didattico: Combinare condizioni logiche con iterazioni su matrici.
// ------------------------------------------------------------------------------------------------------------------------------------
// Esercizio 7:
// Confine della matrice
// Dato una matrice, stampa solo i numeri sul bordo (cioè quelli sulla prima e ultima riga e colonna).
// Esempio:
// Input:
// 1 2 3
// 4 5 6
// 7 8 9

// Output:
// ... (48 righe a disposizione)

// Advent of code n°4

