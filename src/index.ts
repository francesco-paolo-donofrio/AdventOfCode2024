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

console.log("File letto correttamente:", lines);

// Advent 1

for (let i = 0; i < 10; i++){
    const parts = lines[i].split("/\s+/");
    console.log(parts);
    const firstNumber = parseInt(parts[0], 10);
    const rightParts = lines[i].split(/\s+/);
    const secondNumber = parseInt(rightParts[1], 10);
    const leftList : number[] = [];
    const rightList : number[] = [];
    leftList.push(firstNumber);
    rightList.push(secondNumber);

    
}


// function calculateTotalDistance(leftList: number[], rightList: number[]): number {
//     // Step 1: Sort both lists in ascending order
//     const sortedLeft = [...leftList].sort((a, b) => a - b);
//     const sortedRight = [...rightList].sort((a, b) => a - b);

//     // Step 2: Calculate the total distance by pairing elements and finding absolute differences
//     let totalDistance = 0;

//     for (let i = 0; i < sortedLeft.length; i++) {
//         totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
//     }

//     return totalDistance;
// }
// console.log("Questo è la prima lista ", firstList)
