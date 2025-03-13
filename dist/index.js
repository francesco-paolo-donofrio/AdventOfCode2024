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
function prova(lines) {
    let map = lines.map(str => str.split(""));
    stampaMappa(map);
    let i = 0;
    let guard = "^";
    while (isAlive(map)) {
        i++;
        let prevPos = getPosition(map);
        if (guard === "^")
            upMovement(map);
        if (guard === ">")
            rightMovement(map);
        if (guard === "v")
            downMovement(map);
        if (guard === "<")
            leftMovement(map);
        let pos = getPosition(map);
        guard = rotation(map);
        if (pos[0] === -1 || pos[1] === -1) {
            map[prevPos[0]][prevPos[1]] = "X";
            console.log("Movimento numero:", i);
            stampaMappa(map);
            console.log("Posizioni visitate:");
            break;
        }
        map[pos[0]][pos[1]] = guard;
        if (i === 11)
            console.log("ROTAZIONE GUARDIA:", guard);
        console.log("Movimento numero:", i);
        stampaMappa(map);
    }
    let countedX = XCount(map);
    console.log("Posizioni visitate:", countedX);
    provaPart2(map, lines);
}
function XCount(map) {
    let visitedCount = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === "X")
                visitedCount++;
        }
    }
    return visitedCount;
}
function stampaMappa(map) {
    console.log(map.map(row => row.join(" ")).join("\n"));
}
function getPosition(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (["^", ">", "v", "<"].includes(map[i][j]))
                return [i, j];
        }
    }
    return [-1, -1];
}
function isAlive(map) {
    return map.some(row => row.some(cell => ["^", ">", "v", "<"].includes(cell)));
}
function rotation(map) {
    const rotations = { "^": ">", ">": "v", "v": "<", "<": "^" };
    let [r, c] = getPosition(map);
    return r !== -1 && c !== -1 ? rotations[map[r][c]] : "^";
}
function moveGuard(map, dr, dc, symbol) {
    let [r, c] = getPosition(map);
    while (true) {
        let nr = r + dr, nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= map.length || nc >= map[0].length) {
            map[r][c] = "X";
            break;
        }
        if (map[nr][nc] === "#" || map[nr][nc] === "O")
            break;
        map[r][c] = "X";
        map[nr][nc] = symbol;
        r = nr;
        c = nc;
    }
}
function getObstaclePosition(map) {
    let positionsArray = [];
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
function getCleanedMap(lines) {
    let map = lines.map(str => str.split(""));
    return map;
}
function provaPart2(map, lines) {
    let listOfObstacle = getObstaclePosition(map);
    let obstacleCount = 0;
    while (obstacleCount < listOfObstacle.length) {
        let cleanedMap = getCleanedMap(lines);
        let singleObstacle = listOfObstacle[obstacleCount].split(",");
        if (cleanedMap[parseInt(singleObstacle[0])][parseInt(singleObstacle[1])] === ".") {
            cleanedMap[parseInt(singleObstacle[0])][parseInt(singleObstacle[1])] = "O";
            obstacleCount++;
        }
        else {
            obstacleCount++;
            continue;
        }
        let listArr = [];
        listArr.push(cleanedMap, map);
        console.log(listArr[1]);
        break;
    }
}
function upMovement(map) {
    moveGuard(map, -1, 0, "^");
}
function rightMovement(map) { moveGuard(map, 0, 1, ">"); }
function downMovement(map) { moveGuard(map, 1, 0, "v"); }
function leftMovement(map) { moveGuard(map, 0, -1, "<"); }
console.log(prova(lines));
//# sourceMappingURL=index.js.map