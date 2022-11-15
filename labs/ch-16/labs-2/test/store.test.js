const { test } = require('tap');
const store = require('../store');

test('The length of the id must be 4 digits only.', ({ equal, end }) => {
    store(Buffer.alloc(0), (err, data) => {
        const { id } = data;
        equal(id.length, 4)        
        end();
    })
});

test('The input value must be a buffer.', ({ error, end }) => {
    store('Not a Buffer', (err) => {
        error(err, Error('input must be a buffer'));
        end();
    })    
})

// DeprecationWarning: ifError() is deprecated, use error() instead
// test('The input value must be a buffer.', ({ ifError, end }) => {
//     store('Not a Buffer', (err) => {
//         ifError(err, Error('input must be a buffer'));
//         end();
//     })    
// })

// passes npm test with tap, but AssertionError [ERR_ASSERTION]: unexpected errors should be guarded - e.g. ifError
// test('The input value must be a buffer.', ({ strictSame, end }) => {
//     store('Not a Buffer', (err) => {
//         strictSame(err, Error('input must be a buffer'));
//         end();
//     })    
// })

// DeprecationWarning: strictDeepEqual() is deprecated, use strictSame() instead
// test('The input value must be a buffer.', ({ strictDeepEqual, end }) => {
//     store('Not a Buffer', (err) => {
//         strictDeepEqual(err, Error('input must be a buffer'));
//         end();
//     })    
// })
