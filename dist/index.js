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
//# sourceMappingURL=index.js.map