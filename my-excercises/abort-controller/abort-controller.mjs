import { setTimeout } from 'timers/promises';

const ac = new AbortController();
const { signal } = ac;

const timeout = setTimeout(1000, 'will not be logged', { signal });

setImmediate(() => {
    ac.abort();
});

try {
    console.log(await timeout);
} catch (error) {
    // Ignore if error is from the Abort
    if (error.code !== 'ABORT_ERR') throw error;
}
