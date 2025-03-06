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
function prova() {
    let map = [];
    for (let str of lines) {
        map.push(str.split(""));
    }
    let verticalLength = map.length;
    let orizzontalLength = map[0].length;
    stampaMappa(map, verticalLength, orizzontalLength);
    let i = 0;
    let guard = "^";
    while (isAlive(map, verticalLength, orizzontalLength)) {
        i++;
        if (guard === "^") {
            upMovement(map, verticalLength, orizzontalLength);
        }
        if (guard === ">") {
            rightMovement(map, verticalLength, orizzontalLength);
        }
        if (guard === "v") {
            downMovement(map, verticalLength, orizzontalLength);
        }
        if (guard === "<") {
            leftMovement(map, verticalLength, orizzontalLength);
        }
        guard = rotation(map, verticalLength, orizzontalLength);
        if (i == 11) {
            process.stdout.write("ROTAZIONE GUARDIA: " + guard);
        }
        process.stdout.write("\n");
        process.stdout.write("Movimento numero: " + (i));
        stampaMappa(map, verticalLength, orizzontalLength);
    }
}
console.log(prova());
function stampaMappa(map, verticalLength, orizzontalLength) {
    for (let i = 0; i < verticalLength; i++) {
        for (let j = 0; j < orizzontalLength; j++) {
            process.stdout.write(map[i][j] + " ");
        }
        process.stdout.write("\n");
    }
}
function getPosition(map, verticalLength, orizzontalLength) {
    let currentPosition = [];
    searching: for (let i = 0; i < verticalLength; i++) {
        for (let j = 0; j < orizzontalLength; j++) {
            switch (map[i][j]) {
                case "^":
                case ">":
                case "v":
                case "<":
                    currentPosition.push(i);
                    currentPosition.push(j);
                    break searching;
            }
        }
    }
    return currentPosition;
}
function isAlive(map, verticalLength, orizzontalLength) {
    for (let i = 0; i < verticalLength; i++) {
        for (let j = 0; j < orizzontalLength; j++) {
            switch (map[i][j]) {
                case "^":
                case ">":
                case "v":
                case "<":
                    return true;
            }
        }
    }
    return false;
}
function rotation(map, verticalLength, orizzontalLength) {
    let currentPosition = getPosition(map, verticalLength, orizzontalLength);
    let guard = "";
    if (map[currentPosition[0]][currentPosition[1]] === "^") {
        guard = ">";
    }
    else if (map[currentPosition[0]][currentPosition[1]] === ">") {
        guard = "v";
    }
    else if (map[currentPosition[0]][currentPosition[1]] === "v") {
        guard = "<";
    }
    else if (map[currentPosition[0]][currentPosition[1]] === "<") {
        guard = "^";
    }
    ;
    return guard;
}
function upMovement(map, verticalLength, orizzontalLength) {
    let currentPosition = getPosition(map, verticalLength, orizzontalLength);
    for (let i = currentPosition[0]; i >= 0; i--) {
        if (i === 0) {
            map[i][currentPosition[1]] = "X";
            break;
        }
        if (map[i - 1][currentPosition[1]] === "#") {
            break;
        }
        else {
            map[i][currentPosition[1]] = "X";
            map[i - 1][currentPosition[1]] = "^";
        }
    }
}
function rightMovement(map, verticalLength, orizzontalLength) {
    let currentPosition = getPosition(map, verticalLength, orizzontalLength);
    for (let j = currentPosition[1]; j < orizzontalLength; j++) {
        if (j === orizzontalLength - 1) {
            map[currentPosition[0]][j] = "X";
            break;
        }
        if (map[currentPosition[0]][j + 1] === "#") {
            break;
        }
        else {
            map[currentPosition[0]][j] = "X";
            map[currentPosition[0]][j + 1] = ">";
        }
    }
}
function downMovement(map, verticalLength, orizzontalLength) {
    let currentPosition = getPosition(map, verticalLength, orizzontalLength);
    for (let i = currentPosition[0]; i < verticalLength; i++) {
        if (i === verticalLength - 1) {
            map[i][currentPosition[1]] = "X";
            break;
        }
        if (map[i + 1][currentPosition[1]] === "#") {
            break;
        }
        else {
            map[i][currentPosition[1]] = "X";
            map[i + 1][currentPosition[1]] = "v";
        }
    }
}
function leftMovement(map, verticalLength, orizzontalLength) {
    let currentPosition = getPosition(map, verticalLength, orizzontalLength);
    for (let j = currentPosition[1]; j >= 0; j--) {
        if (j === 0) {
            map[currentPosition[0]][j] = "X";
            break;
        }
        if (map[currentPosition[0]][j - 1] === "#") {
            break;
        }
        else {
            map[currentPosition[0]][j] = "X";
            map[currentPosition[0]][j - 1] = "<";
        }
    }
}
//# sourceMappingURL=index.js.map