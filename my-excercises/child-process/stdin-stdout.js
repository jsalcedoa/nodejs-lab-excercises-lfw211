
let answers = [];
process.stdout.write('\n Hello world! \n\n');

process.stdin.on('data', (data) => {
    answers.push(data);
    process.exit();
});

process.on('exit', () => {
    // process.stdout.write(answers[0]);
    answers.map((answer) => process.stdout.write("\n Response: " + answer + "\n"));
})

// THIS OUTPUTS WHATEVER IS INPUTTED
// process.stdin.pipe(process.stdout);
