'use strict'
const assert = require('assert')
// const buffer = Buffer.allocUnsafe(4096)
const buffer = Buffer.alloc(0);
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')
