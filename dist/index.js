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
    for (let i = 0; i < leftList.length; i++) {
        const sameNumber = rightList.filter(num => num === leftList[i]);
        for (let y = 0; y < sameNumber.length; y++) {
            console.log("this is samenumber.length", sameNumber.length);
            console.log("this is samenumber[0]", sameNumber[0]);
            let moltiplication = sameNumber[0] * sameNumber.length;
            console.log("moltiplication", moltiplication);
        }
    }
}
similarityScore(leftList, rightList);
//# sourceMappingURL=index.js.map