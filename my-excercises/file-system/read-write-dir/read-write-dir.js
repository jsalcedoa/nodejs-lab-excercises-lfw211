const { readdirSync, readdir } = require('fs');
const { readdir: readdirProm } = require('fs').promises;
const { join } = require('path');
const filesDir = join(__dirname, '../readable-files');

// ========================= READ DIRRECTORY SYNCRONOUSLY =========================
try{
    console.log('sync:', readdirSync(filesDir));
} catch(error) {
    console.log(error);
}

// ========================= READ DIRRECTORY CALLBACK =========================
readdir(filesDir, (error, files) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('callback:', files);
});

// ========================= READ DIRRECTORY PROMISE =========================
const run = async () => {
    const files = await readdirProm(filesDir);
    console.log('promise:', files);
}

run().catch((error) => console.error(error));
