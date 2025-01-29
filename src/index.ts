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

