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
let verticalLength = lines.length;
let orizzontalLength = lines[0].length;
let arrayBidim = [];
for (let str of lines) {
    arrayBidim.push(str.split(""));
}
let total = 0;
let totalPartTwo = 0;
for (let i = 0; i < verticalLength; i++) {
    for (let j = 0; j < orizzontalLength; j++) {
        if (arrayBidim[i][j] === 'X') {
            total += orizzontalControl(arrayBidim, i, j, orizzontalLength);
            total += verticalControl(arrayBidim, i, j, verticalLength);
            total += diagonalControl(arrayBidim, i, j, orizzontalLength, verticalLength);
        }
        else if (arrayBidim[i][j] === 'A') {
            if (i > 0 && i <= verticalLength - 1 && j >= 1 && j <= orizzontalLength - 1) {
                totalPartTwo += masControl(arrayBidim, i, j);
            }
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
function diagonalControl(arrayBidim, i, j, orizzontalLength, verticalLength) {
    let tot = 0;
    if (j >= 3 && i <= verticalLength - 4) {
        if (arrayBidim[i + 1][j - 1] === "M" && arrayBidim[i + 2][j - 2] === "A" && arrayBidim[i + 3][j - 3] === "S") {
            tot++;
        }
    }
    if (j <= orizzontalLength - 4 && i >= 3) {
        if (arrayBidim[i - 1][j + 1] === "M" && arrayBidim[i - 2][j + 2] === "A" && arrayBidim[i - 3][j + 3] === "S") {
            tot++;
        }
    }
    if (j <= orizzontalLength - 4 && i <= verticalLength - 4) {
        if (arrayBidim[i + 1][j + 1] === "M" && arrayBidim[i + 2][j + 2] === "A" && arrayBidim[i + 3][j + 3] === "S") {
            tot++;
        }
    }
    return tot;
}
function masControl(arrayBidim, i, j) {
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
console.log(total);
//# sourceMappingURL=index.js.map