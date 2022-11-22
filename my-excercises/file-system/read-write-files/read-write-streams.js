const { pipeline, Transform } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const outStream = join(__dirname, 'outStream.txt');

const createUppercaseStream = () => {
    return new Transform({
        transform (chunk, enc, next) {
            const uppercased = chunk.toString().toUpperCase();
            next(null, uppercased);
        }
    })
}

pipeline(
    createReadStream(__filename, { encoding: 'utf-8'}),
    createUppercaseStream(),
    createWriteStream(outStream),
    (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Stream Reading and Writing Completed.')
    }
);

// ========================= THIS IS ANOTHER WAY OF EXECUTING THE READ AND WRITE, THIS OPTION DOES NOT LETS YOU ADD THE TRANSFORM =========================
// const readable = createReadStream(__filename, { encoding: 'utf-8' });
// const writable = createWriteStream(outStream);
// readable.pipe(writable);

// ========================= THIS IS ONLY DOING THE READ AND *** NOT *** THE WRITE =========================
// const readable = createReadStream(__filename, { encoding: 'utf-8'});
// readable.on('data', (chunk) => console.log(chunk));
// readable.on('end', () => console.log('Finished reading stream single file excercise.'));
