import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import _ from "lodash";

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
// let verticalLength: number = lines.length;
// // console.log(verticalLength);
// let orizzontalLength: number = lines[0].length;
// // console.log(orizzontalLength);
// let arrayBidim: string[][] = [];



// for (let str of lines) {
//     arrayBidim.push(str.split(""))
// }

// // console.log(arrayBidim[0]);

// let total: number = 0;
// let totalPartTwo: number = 0;

// for (let i = 0; i < verticalLength; i++) {
//     for (let j = 0; j < orizzontalLength; j++) {
//         if (arrayBidim[i][j] === 'X') {
//             total += orizzontalControl(arrayBidim, i, j, orizzontalLength);
//             total += verticalControl(arrayBidim, i, j, verticalLength);
//             total += diagonalControl(arrayBidim, i, j, orizzontalLength, verticalLength);
//         } else if (arrayBidim[i][j] === 'A') {
//             if (i > 0 && i <= verticalLength - 1 && j >= 1 && j <= orizzontalLength - 1) {
//                 totalPartTwo += masControl(arrayBidim, i, j)
//             }
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

// function diagonalControl(arrayBidim: string[][], i: number, j: number, orizzontalLength: number, verticalLength: number): number {
//     let tot = 0;
//     // Controllo da sopra a destra a sotto a sinistra
//     if (j >= 3 && i <= verticalLength - 4) {
//         if (arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 2][j - 2] === "A" && arrayBidim[i + 3][j - 3] === "S") {
//             tot++;
//         }
//     }

//     // Controllo da sotto a sinistra a sopra a destra

//     if (j <= orizzontalLength - 4 && i >= 3) {
//         if (arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i - 2][j + 2] === "A" && arrayBidim[i - 3][j + 3] === "S") {
//             tot++;
//         }
//     }

//     // Controllo da sopra a sinistra a sotto a destra

//     if (j <= orizzontalLength - 4 && i <= verticalLength - 4) {
//         if (arrayBidim[i + 1][j + 1] === "M" && arrayBidim[i + 2][j + 2] === "A" && arrayBidim[i + 3][j + 3] === "S") {
//             tot++;
//         }
//     }
//     return tot;
// }

// function masControl(arrayBidim: string[][], i: number, j: number): number {
//     let tot = 0;
//     if (i > 0 && j > 0 && i < arrayBidim.length - 1 && j < arrayBidim[i].length - 1) {
//     if (arrayBidim[i - 1][j - 1] === "M" && arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i - 1][j + 1] === "S" && arrayBidim[i + 1][j + 1] === "S") {
//         tot++;
//     }
//     if (arrayBidim[i - 1][j - 1] === "S" && arrayBidim[i + 1][j - 1] === "S" && arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i + 1][j + 1] === "M") {
//         tot++;
//     }
//     if (arrayBidim[i - 1][j - 1] === "M" && arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i + 1][j - 1] === "S" && arrayBidim[i + 1][j + 1] === "S") {
//         tot++;
//     }
//     if (arrayBidim[i - 1][j - 1] === "S" && arrayBidim[i - 1][j + 1] === "S" && arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 1][j + 1] === "M") {
//         tot++;
//     }
//     }
//     return tot;
// }
// console.log(totalPartTwo);

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

// map.set("marco", [33, 44, 55]);

// console.log(map.get("marco"));
// console.log(map.keys);

// for (let keys of map.keys()){
//     console.log(keys);
// }

// console.log(map.size);

// let hashMap: Map<string, number[]> = new Map();
// let updates : string[] = [];
// let invalidUpdates : string[] = [];
// let resultPart1 : number = 0;



// function computeIfAbsent<K, V>(map: Map<K, V>, key: K, mappingFunction: (key: K) => V): V {
//     if (!map.has(key)) {
//         const newValue = mappingFunction(key);
//         map.set(key, newValue);
//     }
//     return map.get(key)!;
// }

// let flag : boolean = false;
// for (let i = 0; i < lines.length; i++) {
//     if (lines[i] !== "" && !lines[i].includes(",")) {
//         let splittedLines: string[] = lines[i].split("|");

//         const values = computeIfAbsent(hashMap, splittedLines[0], () => []);
//         values.push(parseInt(splittedLines[1])); // Ora l'array contiene [42]
//         // hashMap.set(splittedLines[0], splittedLines[1])
//     }
//     else if (lines[i] === ""){
//         flag = true;
//     }
//     else if (flag){
//         updates.push(lines[i]);
//     }
// }

// console.log(hashMap);
// console.log(updates);



// for (let linea = 0; linea < updates.length; linea++) {
//     let splittedUpdates: string[] = updates[linea].split(",");
//     let validUpdate : boolean = true;
//     for (let update = 0; update < splittedUpdates.length; update++) {
//         if (update + 1 !== splittedUpdates.length) {
//             if (
//                 hashMap.has(splittedUpdates[update + 1]) &&
//                 hashMap.get(splittedUpdates[update + 1]) !== null &&
//                 hashMap.get(splittedUpdates[update + 1])!.includes(parseInt(splittedUpdates[update]))
//             ) {
//                 // Qui dovrebbe esserci il codice da eseguire in caso la condizione sia vera (commento Update non valido)
//                 validUpdate = false;
//                 let failedUpdate : string = splittedUpdates.join(",");
//                 invalidUpdates.push(failedUpdate);
//                 break;
//             }
//         }
//     }
//     if (validUpdate){
//         let number : number = Math.floor(splittedUpdates.length / 2);
//         resultPart1 += parseInt(splittedUpdates[number]);
//     }
// }

// console.log(resultPart1);
// console.log(invalidUpdates);
// // let number : number = 5;
// // console.log(Math.floor(number / 2));



// function topologicalSort(orderRules: Map<string, number[]>, pages: number[]): number[] {
//     let inDegree: Map<number, number> = new Map();
//     let adjacencyList: Map<number, number[]> = new Map();

//     // Inizializza i nodi
//     for (let page of pages) {
//         inDegree.set(page, 0);
//         adjacencyList.set(page, []);
//     }

//     // Costruzione del grafo
//     for (let [key, values] of orderRules.entries()) {
//         let from = parseInt(key);
//         for (let to of values) {
//             if (pages.includes(from) && pages.includes(to)) {
//                 adjacencyList.get(from)!.push(to);
//                 inDegree.set(to, (inDegree.get(to) || 0) + 1);
//             }
//         }
//     }

//     // Queue per nodi senza dipendenze
//     let queue: number[] = [];
//     for (let [key, value] of inDegree.entries()) {
//         if (value === 0) {
//             queue.push(key);
//         }
//     }

//     let sortedPages: number[] = [];
//     while (queue.length > 0) {
//         let node = queue.shift()!;
//         sortedPages.push(node);
//         for (let neighbor of adjacencyList.get(node)!) {
//             inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
//             if (inDegree.get(neighbor) === 0) {
//                 queue.push(neighbor);
//             }
//         }
//     }

//     return sortedPages;
// }

// // Seconda parte - correzione degli aggiornamenti errati
// let resultPart2: number = 0;

// for (let invalidUpdate of invalidUpdates) {
//     let pages = invalidUpdate.split(",").map(Number);
//     let sortedPages = topologicalSort(hashMap, pages);
//     let middlePage = sortedPages[Math.floor(sortedPages.length / 2)];
//     resultPart2 += middlePage;
// }

// console.log("Result Part 2:", resultPart2);

// Advent n° 6
// function prova() {

//     let map: string[][] = [];

//     for (let str of lines) {
//         map.push(str.split(""))
//     }

//     let verticalLength: number = map.length;
//     let orizzontalLength: number = map[0].length;
//     stampaMappa(map, verticalLength, orizzontalLength);



//     let i = 0;
//     let guard: string = "^";

//     while (isAlive(map, verticalLength, orizzontalLength)) {
//         i++;

//         if (guard === "^") {
//             upMovement(map, verticalLength, orizzontalLength);
//         }
//         if (guard === ">") {
//             rightMovement(map, verticalLength, orizzontalLength);
//         }
//         if (guard === "v") {
//             downMovement(map, verticalLength, orizzontalLength);
//         }
//         if (guard === "<") {
//             leftMovement(map, verticalLength, orizzontalLength);
//         }
//         let pos = getPosition(map, verticalLength, orizzontalLength);
//         guard = rotation(map, verticalLength, orizzontalLength);
//         map[pos[0]][pos[1]] = guard;

//         if(i === 11){
//             process.stdout.write("ROTAZIONE GUARDIA: " + guard);
//         }
//         process.stdout.write("\n");
//         process.stdout.write("Movimento numero: " + (i));
//         stampaMappa(map, verticalLength, orizzontalLength);
//     } 
// }


// console.log(prova());

// function stampaMappa(map: string[][], verticalLength: number, orizzontalLength: number): void {
//     for (let i = 0; i < verticalLength; i++) {
//         for (let j = 0; j < orizzontalLength; j++) {
//             process.stdout.write(map[i][j] + " ");
//         }
//         process.stdout.write("\n");
//     }
// }

// function getPosition(map: string[][], verticalLength: number, orizzontalLength: number): number[] {
//     let currentPosition: number[] = [];
//     searching:
//     for (let i = 0; i < verticalLength; i++) {
//         for (let j = 0; j < orizzontalLength; j++) {
//             switch (map[i][j]) {
//                 case "^":
//                 case ">":
//                 case "v":
//                 case "<":
//                     currentPosition.push(i);
//                     currentPosition.push(j);
//                     return currentPosition;
//                     break searching;
//             }
//         }
//     }
//     return [-1, -1];
// }

// function isAlive(map: string[][], verticalLength: number, orizzontalLength: number): boolean {
//     for (let i = 0; i < verticalLength; i++) {
//         for (let j = 0; j < orizzontalLength; j++) {
//             switch (map[i][j]) {
//                 case "^":
//                 case ">":
//                 case "v":
//                 case "<":
//                     return true;
//             } 
//         }
//     }
//     return false;
// }

// function rotation(map: string[][], verticalLength: number, orizzontalLength: number): string {
//     let currentPosition: number[] = getPosition(map, verticalLength, orizzontalLength);
//     let guard = "";
//     if(map[currentPosition[0]][currentPosition[1]] === "^"){
//         guard = ">";
//     } else if (map[currentPosition[0]][currentPosition[1]] === ">"){
//         guard = "v"
//     } else if (map[currentPosition[0]][currentPosition[1]] === "v"){
//         guard = "<"
//     } else if (map[currentPosition[0]][currentPosition[1]] === "<"){
//         guard = "^"
//     };

//     return guard;
// }

// function upMovement(map: string[][], verticalLength: number, orizzontalLength: number): void {
//     let currentPosition: number[] = getPosition(map, verticalLength, orizzontalLength);
//     for (let i = currentPosition[0]; i >= 0; i--) {
//         if (i === 0) {
//             map[i][currentPosition[1]] = "X";
//             break;


//         }
//         if (map[i - 1][currentPosition[1]] === "#") {
//             break;
//         } else {
//             map[i][currentPosition[1]] = "X";
//             map[i - 1][currentPosition[1]] = "^";
//         }
//     }
// }

// function rightMovement(map: string[][], verticalLength: number, orizzontalLength: number): void {
//     let currentPosition: number[] = getPosition(map, verticalLength, orizzontalLength);
//     for (let j = currentPosition[1]; j < orizzontalLength; j++) {
//         if (j === orizzontalLength - 1) {
//             map[currentPosition[0]][j] = "X";
//             break;
//         }
//         if (map[currentPosition[0]][j + 1] === "#") {
//             break;
//         } else {
//             map[currentPosition[0]][j] = "X";
//             map[currentPosition[0]][j + 1] = ">";
//         }
//     }
// }

// function downMovement(map: string[][], verticalLength: number, orizzontalLength: number): void {
//     let currentPosition: number[] = getPosition(map, verticalLength, orizzontalLength);
//     for (let i = currentPosition[0]; i < verticalLength; i++) {
//         if (i === verticalLength - 1) {
//             map[i][currentPosition[1]] = "X";
//             break;


//         }
//         if (map[i + 1][currentPosition[1]] === "#") {
//             break;
//         } else {
//             map[i][currentPosition[1]] = "X";
//             map[i + 1][currentPosition[1]] = "v";
//         }
//     }
// }

// function leftMovement(map: string[][], verticalLength: number, orizzontalLength: number): void {
//     let currentPosition: number[] = getPosition(map, verticalLength, orizzontalLength);
//     for (let j = currentPosition[1]; j >= 0; j--) {
//         if (j === 0) {
//             map[currentPosition[0]][j] = "X";
//             break;
//         }
//         if (map[currentPosition[0]][j - 1] === "#") {
//             break;
//         } else {
//             map[currentPosition[0]][j] = "X";
//             map[currentPosition[0]][j - 1] = "<";
//         }
//     }
// }


function prova(lines: string[]) {
    let map: string[][] = lines.map(str => str.split(""));

    stampaMappa(map);

    let i = 0;
    let guard = "^";


    while (isAlive(map)) {
        i++;
        let prevPos = getPosition(map);

        if (guard === "^") upMovement(map,);
        if (guard === ">") rightMovement(map,);
        if (guard === "v") downMovement(map,);
        if (guard === "<") leftMovement(map,);

        let pos = getPosition(map);
        guard = rotation(map);

        if (pos[0] === -1 || pos[1] === -1) {
            map[prevPos[0]][prevPos[1]] = "X"; // Mark last position before exiting

            console.log("Movimento numero:", i);
            // stampaMappa(map);
            console.log("Posizioni visitate:");
            break;
        }

        map[pos[0]][pos[1]] = guard;

        if (i === 11) console.log("ROTAZIONE GUARDIA:", guard);
        console.log("Movimento numero:", i);
        // stampaMappa(map);
    }

    let countedX = XCount(map);
    console.log("Posizioni visitate:", countedX);
    console.log("--------INIZIO PARTE 2--------")
    console.log("risultato parte 2: " + provaPart2(map, lines));
}




function XCount(map: string[][]): number {
    let visitedCount: number = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === "X") visitedCount++;
        }
    }
    return visitedCount;
}

function stampaMappa(map: string[][]): void {
    console.log(map.map(row => row.join(" ")).join("\n"));
}

function getPosition(map: string[][]): number[] {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (["^", ">", "v", "<"].includes(map[i][j])) return [i, j];
        }
    }
    return [-1, -1];
}

function isAlive(map: string[][]): boolean {
    return map.some(row => row.some(cell => ["^", ">", "v", "<"].includes(cell)));
}

function rotation(map: string[][]): string {
    const rotations: Record<string, string> = { "^": ">", ">": "v", "v": "<", "<": "^" };
    let [r, c] = getPosition(map);
    return r !== -1 && c !== -1 ? rotations[map[r][c]] : "^";
}

function moveGuard(map: string[][], dr: number, dc: number, symbol: string,): void {
    let [r, c] = getPosition(map);
    while (true) {
        let nr = r + dr, nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= map.length || nc >= map[0].length) {
            map[r][c] = "X"; // Mark exit position

            break;
        }
        if (map[nr][nc] === "#" || map[nr][nc] === "O") break;
        map[r][c] = "X";

        map[nr][nc] = symbol;
        r = nr; c = nc;
    }
}

function getObstaclePosition(map: string[][]): string[] {
    let positionsArray: string[] = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === "X") {
                positionsArray.push(i + "," + j);
            }
        }
    }
    console.log(positionsArray);
    return positionsArray;
}

function getCleanedMap(lines: string[]): string[][] {
    let map: string[][] = lines.map(str => str.split(""));
    return map;
}

function normalizeMap(map: string[][]): string[][] {
    let copia: string[][] = [];

    for (let i = 0; i < map.length; i++) {
        copia[i] = []; // Inizializza la riga prima di assegnare valori

        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === "^" || map[i][j] === "v" || map[i][j] === ">" || map[i][j] === "<") {
                copia[i][j] = "X";
            } else {
                copia[i][j] = map[i][j];
            }
        }
    }
    return copia;
}

function provaPart2(oldMap: string[][], lines: string[]): number {
    let listOfObstacle: string[] = getObstaclePosition(oldMap);
    let resultOfLoop: number = 0;
    let obstacleCount: number = 0;
    console.log("NUMERO OSTACOLI: " + listOfObstacle.length)



    while (obstacleCount < listOfObstacle.length) {
        let map: string[][] = getCleanedMap(lines);


        let singleObstacle: string[] = listOfObstacle[obstacleCount].split(",");

        if (map[parseInt(singleObstacle[0])][parseInt(singleObstacle[1])] === ".") {
            map[parseInt(singleObstacle[0])][parseInt(singleObstacle[1])] = "O";
            obstacleCount++;
            // console.log("Ostacolo " + obstacleCount + " piazzato in posizione: " + singleObstacle[0] + " " + singleObstacle[1]);
            // console.log(map.map(row => row.join(" ")).join("\n"));
        } else {
            obstacleCount++;
            continue;
        }

        let listArr: string[][][] = [];
        let guard: string = "^";

        while (isAlive(map)) {
            listArr.push(normalizeMap(map));


            if (listArr.length === 5) {
                if (_.isEqual(listArr[0], listArr[4])) {
                    resultOfLoop++;
                    console.log("Loop detected in obstacle number: " + obstacleCount);

                    // stampaMappa(map);
                    listArr.length = 0;
                    break;
                } else {
                    listArr.length = 0;

                }
            }

            let prevPos = getPosition(map);

            if (guard === "^") upMovement(map);
            if (guard === ">") rightMovement(map);
            if (guard === "v") downMovement(map);
            if (guard === "<") leftMovement(map);

            let pos = getPosition(map);
            guard = rotation(map);

            if (pos[0] === -1 || pos[1] === -1) {
                map[prevPos[0]][prevPos[1]] = "X"; // Mark last position before exitin
                break;
            }

            map[pos[0]][pos[1]] = guard;


        }
    }
    return resultOfLoop;
}

function upMovement(map: string[][],) {
    moveGuard(map, -1, 0, "^");
}
function rightMovement(map: string[][],) { moveGuard(map, 0, 1, ">"); }
function downMovement(map: string[][],) { moveGuard(map, 1, 0, "v"); }
function leftMovement(map: string[][],) { moveGuard(map, 0, -1, "<"); }
console.log(prova(lines));
