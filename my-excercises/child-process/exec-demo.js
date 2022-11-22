const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.log('error:', error.message);
        return
    }
    if (stderr) {
        console.log('stderr:', stderr);
        return;
    }
    console.log('stdout:', stdout);
});

// ========================= EXEC SYNC =========================
const { execSync } = require('child_process');

const output = execSync('pwd');
console.log(output.toString());
