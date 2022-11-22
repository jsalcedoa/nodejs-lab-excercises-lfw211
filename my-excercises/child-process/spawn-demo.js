// ========================= SPAWN =========================
const { spawn } = require('child_process');

const child = spawn('ls', ['-lh']);

child.stdout.on('data', (data) => console.log('stdout:', data.toString()));
child.stderr.on('data', (data => console.log('stderr:', data.toString())));
child.on('error', (error) => console.log('error:', error));
child.on('exit', (code, signal) => {
    if (code) console.log('Process exit with code:', code);
    if (signal) console.log('Process killed with signal:', signal);
    console.log('Process spawn completed.');
})

// ========================= SPAWN SYNC =========================
const { spawnSync } = require('child_process');
const result = spawnSync(
    process.execPath,
    ['-e', `console.log('subprocess stdio output')`]
)

// console.log(result);
console.log(result.stdout.toString());