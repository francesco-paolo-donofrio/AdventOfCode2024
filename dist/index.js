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
let map = new Map();
map.set("marco", [33, 44, 55]);
console.log(map.get("marco"));
console.log(map.keys);
for (let keys of map.keys()) {
    console.log(keys);
}
console.log(map.size);
let hashMap = new Map();
let updates = [];
let invalidUpdates = [];
let resultPart1 = 0;
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
for (let linea = 0; linea < updates.length; linea++) {
    let splittedUpdates = updates[linea].split(",");
    let validUpdate = true;
    for (let update = 0; update < splittedUpdates.length; update++) {
        if (update + 1 !== splittedUpdates.length) {
            if (hashMap.has(splittedUpdates[update + 1]) &&
                hashMap.get(splittedUpdates[update + 1]) !== null &&
                hashMap.get(splittedUpdates[update + 1]).includes(parseInt(splittedUpdates[update]))) {
                validUpdate = false;
                let failedUpdate = splittedUpdates.join(",");
                invalidUpdates.push(failedUpdate);
                break;
            }
        }
    }
    if (validUpdate) {
        let number = Math.floor(splittedUpdates.length / 2);
        resultPart1 += parseInt(splittedUpdates[number]);
    }
}
console.log(resultPart1);
//# sourceMappingURL=index.js.map