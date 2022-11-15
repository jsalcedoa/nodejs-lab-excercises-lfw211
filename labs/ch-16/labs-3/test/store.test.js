'use strict'
const { test } = require('tap');
const store = require('../store');

test('The input value must be a buffer.', async ({ rejects }) => {
    await rejects(store('Hi'), Error('input must be a buffer'));
});

test('The length of the id must be 4 digits only.', async ({ equal }) => {
    const { id } = await store(Buffer.alloc(0));
    equal(id.length, 4);
});
