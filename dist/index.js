import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../dist/InputsAdvent/AdventInput.txt');
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
const lines = readFileContent(filePath);
readFileContent(filePath);
const leftList = [];
const rightList = [];
lines.forEach(string => {
    const parts = string.trim().replace(/\s+/g, ' ').split(' ');
    const firstNumber = parseInt(parts[0], 10);
    const secondNumber = parseInt(parts[1], 10);
    leftList.push(firstNumber);
    rightList.push(secondNumber);
});
function calculateTotalDistance(leftList, rightList) {
    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);
    let totalDistance = 0;
    for (let i = 0; i < sortedLeft.length; i++) {
        totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
    }
    return totalDistance;
}
calculateTotalDistance(leftList, rightList);
function similarityScore(leftList, rightList) {
    let totalScore = 0;
    const rightCounts = new Map();
    for (const num of rightList) {
        rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
    }
    for (const num of leftList) {
        const count = rightCounts.get(num) || 0;
        totalScore += num * count;
    }
    return totalScore;
}
similarityScore(leftList, rightList);
const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
let finalResult = 0;
let flag = true;
for (let y = 0; y < lines.length; y++) {
    let exampleInput = lines[y];
    const risultato = [];
    for (const match of exampleInput.matchAll(regex)) {
        risultato.push(match[0]);
    }
    console.log(risultato);
    const newResult = [];
    for (let i = 0; i < risultato.length; i++) {
        newResult[i] = risultato[i].replace(/[mul()]/g, "");
    }
    console.log(newResult);
    for (let i = 0; i < newResult.length; i++) {
        if (newResult[i] === "don't") {
            flag = false;
        }
        if (newResult[i] === "do") {
            flag = true;
        }
        else if (flag) {
            let arrayString = [];
            arrayString = newResult[i].split(",");
            finalResult += parseInt(arrayString[0]) * parseInt(arrayString[1]);
        }
    }
}
console.log(finalResult);
let verticalLength = lines.length;
console.log(verticalLength);
let orizzontalLength = lines[0].length;
console.log(orizzontalLength);
let arrayBidim = [];
for (let str of lines) {
    arrayBidim.push(str.split(""));
}
console.log(arrayBidim[0]);
let total = 0;
for (let i = 0; i < verticalLength; i++) {
    for (let j = 0; j < orizzontalLength; j++) {
        if (arrayBidim[i][j] === 'X') {
            total += orizzontalControl(arrayBidim, i, j, orizzontalLength);
            total += verticalControl(arrayBidim, i, j, verticalLength);
        }
    }
}
function orizzontalControl(arrayBidim, i, j, orizzontalLength) {
    let tot = 0;
    if (j >= 3) {
        if (arrayBidim[i][j - 1] === "M" && arrayBidim[i][j - 2] === "A" && arrayBidim[i][j - 3] === "S") {
            tot++;
        }
    }
    if (j <= orizzontalLength - 4) {
        if (arrayBidim[i][j + 1] === "M" && arrayBidim[i][j + 2] === "A" && arrayBidim[i][j + 3] === "S") {
            tot++;
        }
    }
    return tot;
}
function verticalControl(arrayBidim, i, j, verticalLength) {
    let tot = 0;
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
console.log(total);
//# sourceMappingURL=index.js.map