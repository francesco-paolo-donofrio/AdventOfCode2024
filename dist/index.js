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
    let visitedCount = 0;
    stampaMappa(map);
    let i = 0;
    let guard = "^";
    while (isAlive(map)) {
        i++;
        let prevPos = getPosition(map);
        if (guard === "^")
            upMovement(map, visitedCount);
        if (guard === ">")
            rightMovement(map, visitedCount);
        if (guard === "v")
            downMovement(map, visitedCount);
        if (guard === "<")
            leftMovement(map, visitedCount);
        let pos = getPosition(map);
        guard = rotation(map);
        if (pos[0] === -1 || pos[1] === -1) {
            map[prevPos[0]][prevPos[1]] = "X";
            visitedCount++;
            console.log("Movimento numero:", i);
            console.log("Posizioni visitate:", visitedCount);
            stampaMappa(map);
            break;
        }
        map[pos[0]][pos[1]] = guard;
        if (i === 11)
            console.log("ROTAZIONE GUARDIA:", guard);
        console.log("Movimento numero:", i);
        console.log("Posizioni visitate:", visitedCount);
        stampaMappa(map);
    }
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
function moveGuard(map, dr, dc, symbol, visitedCount) {
    let [r, c] = getPosition(map);
    while (true) {
        let nr = r + dr, nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= map.length || nc >= map[0].length) {
            map[r][c] = "X";
            visitedCount++;
            break;
        }
        if (map[nr][nc] === "#")
            break;
        map[r][c] = "X";
        visitedCount++;
        map[nr][nc] = symbol;
        r = nr;
        c = nc;
    }
}
function upMovement(map, visitedCount) { moveGuard(map, -1, 0, "^", visitedCount); }
function rightMovement(map, visitedCount) { moveGuard(map, 0, 1, ">", visitedCount); }
function downMovement(map, visitedCount) { moveGuard(map, 1, 0, "v", visitedCount); }
function leftMovement(map, visitedCount) { moveGuard(map, 0, -1, "<", visitedCount); }
console.log(prova(lines));
//# sourceMappingURL=index.js.map