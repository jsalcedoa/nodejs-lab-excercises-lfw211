const { join } = require('path');

// ========================= FILE SYSTEM (FS) - SYNCHRONOUS READING AND WRITING =========================
const outSync = join(__dirname, 'out.txt');
const { readFileSync, writeFileSync } = require('fs');
const contents = readFileSync(__filename, { encoding: 'utf-8' });
writeFileSync(outSync, contents.toUpperCase());
console.log('Synchronous Reading and Writing Completed.');

// // ========================= FILE SYSTEM (FS) - CALLBACK BASED READING AND WRITING =========================
const outCB = join(__dirname, 'outCB.txt');
const { readFile, writeFile } = require('fs'); // This is commented to avoid name conflict with the promise base solution. 
readFile(__filename, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    writeFile(outCB, data.toUpperCase(), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Callback Reading and Writing Completed.');
    })
})

// ========================= FILE SYSTEM (FS) - PROMISE BASED READING AND WRITING =========================
const { readFile: readFileProm, writeFile: writeFileProm } = require('fs').promises;

const run = async () => {
    const contentsProm = await readFileProm(__filename, { encoding: 'utf-8' });
    const outProm = join(__dirname, 'outProm.txt');
    await writeFileProm(outProm, contentsProm.toUpperCase());
    console.log('Promise Reading and Writing Completed.');
}

run().catch(console.error);
