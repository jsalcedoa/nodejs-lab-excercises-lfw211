// import { Readable } from 'node:stream';
// import { Resolver } from 'node:dns/promises';

// // With a synchronous mapper.
// for await (const chunk of Readable.from([1, 2, 3, 4]).map((x) => x * 2)) {
//   console.log(chunk); // 2, 4, 6, 8
// }
// // With an asynchronous mapper, making at most 2 queries at a time.
// const resolver = new Resolver();
// const dnsResults = Readable.from([
//   'nodejs.org',
//   'openjsf.org',
//   'www.linuxfoundation.org',
// ]).map((domain) => resolver.resolve4(domain), { concurrency: 2 });
// for await (const result of dnsResults) {
//   console.log(result); // Logs the DNS result of resolver.resolve4.
// }

import { Readable } from 'stream';
import { join } from 'path';
import fs  from 'fs';

const arr1 = [1, 2, 3, 4];
const readable = Readable.from(arr1);
readable.on('data', (chunk) => console.log(chunk) )


// const files = join(__dirname, 'readable-files');
// const fileArray = fs.readdirSync();
// const readable2 = Readable.from(fileArray, { objectMode: true })
// readable.on('data', (chunk) => console.log(chunk) )