function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function main() {
    const filePath = "C:\Users\newFr\OneDrive\Desktop\InputExercise.txt";
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split(/\r?\n/);
    console.log(lines);
    let totale = 0;
    for (const line of lines) {
        if (line.trim() === "")
            continue;
        const numeri = line.split(" ").map(s => parseInt(s));
        console.log(numeri.join(" "));
        if (isSicuroConDampener(numeri)) {
            totale++;
        }
    }
    console.log("TOTALE: " + totale);
}
function isSicuroConDampener(numeri) {
    if (isSicuro(numeri)) {
        return true;
    }
    for (let i = 0; i < numeri.length; i++) {
        const numeriModificato = [...numeri];
        numeriModificato.splice(i, 1);
        if (isSicuro(numeriModificato)) {
            return true;
        }
    }
    return false;
}
function isSicuro(numeri) {
    const crescente = numeri[0] < numeri[1];
    for (let i = 0; i < numeri.length - 1; i++) {
        const differenza = numeri[i + 1] - numeri[i];
        if (Math.abs(differenza) > 3 || differenza === 0) {
            return false;
        }
        if ((crescente && differenza < 0) || (!crescente && differenza > 0)) {
            return false;
        }
    }
    return true;
}
main();
//# sourceMappingURL=index.js.map