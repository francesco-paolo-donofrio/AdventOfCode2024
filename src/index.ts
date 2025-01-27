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

const leftList : number[] = [];
const rightList : number[] = [];

for (let i = 0; i < 10; i++){
    const parts = lines[i].split("/\s+/");
    console.log("Questo è parts " , parts);
    const firstNumber = parseInt(parts[0], 10);
    const rightParts = lines[i].split(/\s+/);
    const secondNumber = parseInt(rightParts[1], 10);
    leftList.push(firstNumber);
    rightList.push(secondNumber);
}
function calculateTotalDistance(leftList: number[], rightList: number[]): number {

    for (let i = 0; i < 10; i++) {
        const parts = lines[i].split("/\s+/");
        console.log("Questo è parts ", parts);
        const firstNumber = parseInt(parts[0], 10);
        const rightParts = lines[i].split(/\s+/);
        const secondNumber = parseInt(rightParts[1], 10);
        leftList.push(firstNumber);
        rightList.push(secondNumber);
    }

    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);

    let totalDistance = 0;

    for (let i = 0; i < sortedLeft.length; i++) {
        totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
    }

    return totalDistance;
}

calculateTotalDistance(leftList, rightList);
