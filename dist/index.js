"use strict";
const fs = require('fs');
const filePath = "C:\\Desktop_nuovo\\esercizi-boolean\\Typescript\\AdventOfCode2024\\dist\\file-di-prova.txt";
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Errore nella lettura del file:', err);
        return;
    }
    console.log('Contenuto del file:');
    console.log(data);
});
//# sourceMappingURL=index.js.map