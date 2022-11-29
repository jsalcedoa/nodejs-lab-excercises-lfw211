const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { join } = require('path');
const arrFiles = readdirSync(join(__dirname, '../readable-files'));
const arrayContents = [];
const arrayPaths = [];

console.log(arrFiles);

arrFiles.map(file => {
    filePath = join(__dirname, '../readable-files/', file);
    // console.log(filePath);
    arrayPaths.push(filePath);
    const readable = readFileSync(filePath, {encoding: 'utf-8'});
    arrayContents.push(readable);
})

console.log('Arr Paths: ', arrayPaths);
console.log('Arr Contents: ', arrayContents);
writeFileSync('./outnew.txt', arrayContents.toString());
