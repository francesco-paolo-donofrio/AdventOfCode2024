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
console.log(verticalLength);
let orizzontalLength = lines[0].length;
console.log(orizzontalLength);
let arrayBidim = [];
for (let str of lines) {
    arrayBidim.push(str.split(""));
}
console.log(arrayBidim[0]);
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
console.log(totalPartTwo);
let hashMap = new Map();
let updates = [];
function computeIfAbsent(map, key, mappingFunction) {
    if (!map.has(key)) {
        const newValue = mappingFunction(key);
        map.set(key, newValue);
    }
    return map.get(key);
}
let flag = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes(",")) {
        let splittedLines = lines[i].split("|");
        const values = computeIfAbsent(hashMap, splittedLines[0], () => []);
        values.push(parseInt(splittedLines[1]));
    }
    else if (lines[i] === "") {
        flag = true;
    }
    else if (flag) {
        updates.push(lines[i]);
    }
}
console.log(hashMap);
console.log(updates);
let variabile = "ciao";
if (variabile.includes(",")) {
    console.log("ciao");
}
//# sourceMappingURL=index.js.map