const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const folder = join(__dirname, '../readable-files');
const out = join(__dirname, 'out2.txt');

const files = readdirSync(folder, { encoding: 'utf-8' });
console.log(files);
writeFileSync(out, files.toString());
