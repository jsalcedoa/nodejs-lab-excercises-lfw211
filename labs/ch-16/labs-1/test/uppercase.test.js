const { test } = require('tap')
const uppercase = require('../uppercase')

test('The input is not a string.', async ({ throws }) => {
    throws(() => uppercase(8), Error('input must be a string'));
    throws(() => uppercase(null), Error('input must be a string'));
    throws(() => uppercase(undefined), Error('input must be a string'));

})

test('result is in uppercase.', async ({ equal }) => {
  equal(uppercase('node js'), 'NODE JS')
  equal(uppercase('Louisiana'), 'LOUISIANA')
})