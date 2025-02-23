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

// const leftList: number[] = [];
// const rightList: number[] = [];

// // const rightParts = lines[1].split("/\s+/");
// // console.log("Questo è rightParts ", rightParts);
// // console.log("Questo è parts " , parts);

// lines.forEach(string => {
//     const parts = string.trim().replace(/\s+/g, ' ').split(' ');
//     // console.log(parts);
//     const firstNumber = parseInt(parts[0], 10);
//     const secondNumber = parseInt(parts[1], 10);
//     // console.log("Questo è firstNumber ", firstNumber);
//     // console.log("Questo è secondNumber ", secondNumber);
//     leftList.push(firstNumber);
//     rightList.push(secondNumber);
// });

// // console.log("Questo è leftList ", leftList);
// // console.log("Questo è rightList ", rightList);

// function calculateTotalDistance(leftList: number[], rightList: number[]): number {

//     const sortedLeft = [...leftList].sort((a, b) => a - b);
//     const sortedRight = [...rightList].sort((a, b) => a - b);

//     let totalDistance = 0;

//     for (let i = 0; i < sortedLeft.length; i++) {
//         totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
//     }

//     return totalDistance;
// }

// calculateTotalDistance(leftList, rightList);

// // Advent 1 second part

// // function similarityScore(leftList: number[], rightList: number[]): void {
// //     for (let i = 0; i < leftList.length; i++) {
// //         const sameNumber = rightList.filter(num => num === leftList[i])
// //         // console.log("this is samenumber[0]" , sameNumber[0]);
// //         for (let y = 0; y < sameNumber.length; y++){
// //             // let sum = 0;
// //             console.log("this is samenumber.length" , sameNumber.length);
// //             console.log("this is samenumber[0]" , sameNumber[0]);
// //              let moltiplication = sameNumber[0] * sameNumber.length;
// //             console.log("moltiplication" , moltiplication);
// //         }
// //     }
// // }
// // similarityScore(leftList, rightList);

// function similarityScore(leftList: number[], rightList: number[]): number {
//     let totalScore = 0;

//     // Conta la frequenza dei numeri nella lista destra
//     const rightCounts = new Map<number, number>();
//     for (const num of rightList) {
//         rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
//     }

//     // Calcola il punteggio di similarità
//     for (const num of leftList) {
//         const count = rightCounts.get(num) || 0;
//         totalScore += num * count;
//     }

//     return totalScore;
// }

// similarityScore(leftList, rightList);

// // Advent 3 - First part
// const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
// let finalResult = 0;
// let flag = true;
// for (let y = 0; y < lines.length; y++) {

//     let exampleInput: string = lines[y];

//     const risultato: string[] = [];
//     for (const match of exampleInput.matchAll(regex)) {
//         risultato.push(match[0]);
//         // console.log(risultato);
//     }

//     console.log(risultato);
//     const newResult: string[] = [];
//     for (let i = 0; i < risultato.length; i++) {
//         newResult[i] = risultato[i].replace(/[mul()]/g, "");
//     }

//     console.log(newResult);

//     for (let i = 0; i < newResult.length; i++) {
//         if (newResult[i] === "don't") {
//             flag = false;
//         } if (newResult[i] === "do") {
//             flag = true;
//         } else if (flag) {
//             let arrayString: string[] = [];
//             arrayString = newResult[i].split(",");
//             finalResult += parseInt(arrayString[0]) * parseInt(arrayString[1]);
//         }
//     }
// }
// console.log(finalResult);



// // Advent of code n°4
// let verticalLength: number = lines.length;
// console.log(verticalLength);
// let orizzontalLength: number = lines[0].length;
// console.log(orizzontalLength);
// let arrayBidim: string[][] = [];



// for (let str of lines) {
//     arrayBidim.push(str.split(""))
// }

// console.log(arrayBidim[0]);

// let total: number = 0;

// for (let i = 0; i < verticalLength; i++) {
//     for (let j = 0; j < orizzontalLength; j++) {
//         if (arrayBidim[i][j] === 'X') {
//             total += orizzontalControl(arrayBidim, i, j, orizzontalLength);
//             total += verticalControl(arrayBidim, i, j, verticalLength);
//             total += diagonalControl(arrayBidim, i, j, orizzontalLength, verticalLength);
//         }
//     }
// }

// function orizzontalControl(arrayBidim: string[][], i: number, j: number, orizzontalLength: number): number {
//     let tot = 0;

//     // Controllo orizzontale da destra a sinistra
//     if (j >= 3) {
//         if (arrayBidim[i][j - 1] === "M" && arrayBidim[i][j - 2] === "A" && arrayBidim[i][j - 3] === "S") {
//             tot++;
//         }
//     }

//     // Controllo orizzontale da sinistra a destra 

//     if (j <= orizzontalLength - 4) {
//         if (arrayBidim[i][j + 1] === "M" && arrayBidim[i][j + 2] === "A" && arrayBidim[i][j + 3] === "S") {
//             tot++;
//         }
//     }
//     return tot;
// }

// function verticalControl(arrayBidim: string[][], i: number, j: number, verticalLength: number): number {
//     let tot = 0;
//     // Controllo da sopra a sotto
//     if (i <= verticalLength - 4) {
//         if (arrayBidim[i + 1][j] === "M" && arrayBidim[i + 2][j] === "A" && arrayBidim[i + 3][j] === "S") {
//             tot++;
//         }
//     }

//     if (i >= 3) {
//         if (arrayBidim[i - 1][j] === "M" && arrayBidim[i - 2][j] === "A" && arrayBidim[i - 3][j] === "S") {
//             tot++;
//         }
//     }
//     return tot;
// }

// function diagonalControl(arrayBidim: string[][], i: number, j: number, orizzontalLength: number, verticalLength : number): number {
//     let tot = 0;
//     // Controllo da sopra a destra a sotto a sinistra
//     if (j >= 3 && i <= verticalLength - 4){
//         if (arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 2][j - 2] === "A" && arrayBidim[i + 3][j - 3] === "S") {
//             tot++;
//         }
//     }

//     // Controllo da sotto a sinistra a sopra a destra

//     if (j <= orizzontalLength - 4 && i >= 3){
//         if (arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i - 2][j + 2] === "A" && arrayBidim[i - 3][j + 3] === "S") {
//             tot++;
//         }
//     }

//     // Controllo da sopra a sinistra a sotto a destra

//     if (j <= orizzontalLength - 4 && i <= verticalLength - 4){
//         if (arrayBidim[i + 1][j + 1] === "M" && arrayBidim[i + 2][j + 2] === "A" && arrayBidim[i + 3][j + 3] === "S") {
//             tot++;
//         }
//     } 

//     // Controllo da sotto a destra a sopra a sinistra

//     if (i >= 3 && j >= 3){
//         if (arrayBidim[i - 1][j - 1] === "M" && arrayBidim[i - 2][j - 2] === "A" && arrayBidim[i - 3][j - 3] === "S") {
//             tot++;
//         }
//     }
//     return tot;
// }
// console.log(total);


// // Advent 3 - First part
// const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
// let finalResult = 0;
// let flag = true;
// for (let y = 0; y < lines.length; y++) {

//     let exampleInput: string = lines[y];

//     const risultato: string[] = [];
//     for (const match of exampleInput.matchAll(regex)) {
//         risultato.push(match[0]);
//         // console.log(risultato);
//     }

//     console.log(risultato);
//     const newResult: string[] = [];
//     for (let i = 0; i < risultato.length; i++) {
//         newResult[i] = risultato[i].replace(/[mul()]/g, "");
//     }

//     console.log(newResult);

//     for (let i = 0; i < newResult.length; i++) {
//         if (newResult[i] === "don't") {
//             flag = false;
//         } if (newResult[i] === "do") {
//             flag = true;
//         } else if (flag) {
//             let arrayString: string[] = [];
//             arrayString = newResult[i].split(",");
//             finalResult += parseInt(arrayString[0]) * parseInt(arrayString[1]);
//         }
//     }
// }
// console.log(finalResult);


// Advent of code n°4
let verticalLength: number = lines.length;
console.log(verticalLength);
let orizzontalLength: number = lines[0].length;
console.log(orizzontalLength);
let arrayBidim: string[][] = [];



for (let str of lines) {
    arrayBidim.push(str.split(""))
}

console.log(arrayBidim[0]);

let total: number = 0;
let totalPartTwo: number = 0;

for (let i = 0; i < verticalLength; i++) {
    for (let j = 0; j < orizzontalLength; j++) {
        if (arrayBidim[i][j] === 'X') {
            total += orizzontalControl(arrayBidim, i, j, orizzontalLength);
            total += verticalControl(arrayBidim, i, j, verticalLength);
            total += diagonalControl(arrayBidim, i, j, orizzontalLength, verticalLength);
        } else if (arrayBidim[i][j] === 'A') {
            if (i > 0 && i <= verticalLength - 1 && j >= 1 && j <= orizzontalLength - 1) {
                totalPartTwo += masControl(arrayBidim, i, j)
            }
        }
    }
}

function orizzontalControl(arrayBidim: string[][], i: number, j: number, orizzontalLength: number): number {
    let tot = 0;

    // Controllo orizzontale da destra a sinistra
    if (j >= 3) {
        if (arrayBidim[i][j - 1] === "M" && arrayBidim[i][j - 2] === "A" && arrayBidim[i][j - 3] === "S") {
            tot++;
        }
    }

    // Controllo orizzontale da sinistra a destra 

    if (j <= orizzontalLength - 4) {
        if (arrayBidim[i][j + 1] === "M" && arrayBidim[i][j + 2] === "A" && arrayBidim[i][j + 3] === "S") {
            tot++;
        }
    }
    return tot;
}

function verticalControl(arrayBidim: string[][], i: number, j: number, verticalLength: number): number {
    let tot = 0;
    // Controllo da sopra a sotto
    if (i <= verticalLength - 4) {
        if (arrayBidim[i + 1][j] === "M" && arrayBidim[i + 2][j] === "A" && arrayBidim[i + 3][j] === "S") {
            tot++;
        }
    }

    if (i >= 3) {
        if (arrayBidim[i - 1][j] === "M" && arrayBidim[i - 2][j] === "A" && arrayBidim[i - 3][j] === "S") {
            tot++;
        }
    }
    return tot;
}

function diagonalControl(arrayBidim: string[][], i: number, j: number, orizzontalLength: number, verticalLength: number): number {
    let tot = 0;
    // Controllo da sopra a destra a sotto a sinistra
    if (j >= 3 && i <= verticalLength - 4) {
        if (arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 2][j - 2] === "A" && arrayBidim[i + 3][j - 3] === "S") {
            tot++;
        }
    }

    // Controllo da sotto a sinistra a sopra a destra

    if (j <= orizzontalLength - 4 && i >= 3) {
        if (arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i - 2][j + 2] === "A" && arrayBidim[i - 3][j + 3] === "S") {
            tot++;
        }
    }

    // Controllo da sopra a sinistra a sotto a destra

    if (j <= orizzontalLength - 4 && i <= verticalLength - 4) {
        if (arrayBidim[i + 1][j + 1] === "M" && arrayBidim[i + 2][j + 2] === "A" && arrayBidim[i + 3][j + 3] === "S") {
            tot++;
        }
    }
    return tot;
}

function masControl(arrayBidim: string[][], i: number, j: number): number {
    let tot = 0;
    if (arrayBidim[i - 1][j - 1] === "M" && arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i - 1][j + 1] === "S" && arrayBidim[i + 1][j + 1] === "S") {
        tot++;
    }
    if (arrayBidim[i - 1][j - 1] === "S" && arrayBidim[i + 1][j - 1] === "S" && arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i + 1][j + 1] === "M") {
        tot++;
    }
    if (arrayBidim[i - 1][j - 1] === "M" && arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i + 1][j - 1] === "S" && arrayBidim[i + 1][j + 1] === "S") {
        tot++;
    }
    if (arrayBidim[i - 1][j - 1] === "S" && arrayBidim[i - 1][j + 1] === "S" && arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 1][j + 1] === "M") {
        tot++;
    }
    return tot;
}
console.log(totalPartTwo);

// Esercizio Anagrammi

// console.log(lines[0]);

// let arrayString : string[] = [];
// arrayString[0] = "lots";

// // console.log(arrayString[0]);

// let stringExample : string = "lots";
// let car : string = 'a';
// const valueOfA : number = car.toLowerCase().charCodeAt(0);

// const arr : number[] = new Array(26).fill(0);

// // console.log(arr);

// for (let i = 0; i < stringExample.length; i++){
//     let char : string = stringExample.toLowerCase().charAt(i);
//     arr[char.charCodeAt(0) - valueOfA] ++;
// }

// let contoAnagramma : number = 0;


// for (let i = 0; i < lines.length; i++){
//     const arrDiControllo : number[] = new Array(26).fill(0);
//     if (lines[i].length != stringExample.length){
//         continue;

//     } 
//     for (let j = 0; j < stringExample.length; j++){
//         let char : string = lines[i].toLowerCase().charAt(j);
//         arrDiControllo[char.charCodeAt(0) - valueOfA] ++;
//     }
//     if (lines[i] !== stringExample){
//         if (arr.length === arrDiControllo.length && arr.every((value, index) => value === arrDiControllo[index])){
//             contoAnagramma ++;
//         }
//     }

// }

// console.log(contoAnagramma);

// Advent n°5

// let map : Map<string, number[]> = new Map();

// map.set("marco", []);

// console.log(map.get("marco"));
// console.log(map.keys);

// for (let keys of map.keys()){
//     console.log(keys);
// }

// console.log(map.size);

let hashMap: Map<string, number[]> = new Map();
// let updates : string[] = [];



copiando:
for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "") {
        let splittedLines: string[] = lines[i].split("|");
        // console.log(splittedLines);
        const values = computeIfAbsent(hashMap, splittedLines[0], () => []);
        values.push(parseInt(splittedLines[1])); // Ora l'array contiene [42]
        // hashMap.set(splittedLines[0], splittedLines[1])
    } else {
        break copiando;
    }
}




function computeIfAbsent<K, V>(map: Map<K, V>, key: K, mappingFunction: (key: K) => V): V {
    if (!map.has(key)) {
        const newValue = mappingFunction(key);
        map.set(key, newValue);
    }
    return map.get(key)!;
}

console.log(hashMap);