const { setTimeout } = require('timers/promises');
const ac = new AbortController();
const { signal } = ac;

const timeout = setTimeout(1000, 'Welcome to the AbortController Demo', { signal: signal })

setImmediate(() => {
    ac.abort();
})

const run = async () => {
    try {
        console.log(await timeout);
    } catch(error) {
        // ignore abort errors:
        if (error.code !== 'ABORT_ERR') throw error
    }
}

run();
