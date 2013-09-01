var assert = require('assert')
  , indexOf = require('./')

var buffer = new Buffer([0, 1,2,3,4,5])
  , arr = [0,1,2,3,4,5,[1,2,3,4]]
  , str = '012345'

assert.strictEqual(
    0
  , indexOf(buffer, new Buffer([0,1,2,3]))
  , 'Buffer had wrong index'
)
assert.strictEqual(
    0
  , indexOf(arr, [0, 1,2,3])
  , 'Array had wrong index'
)
assert.strictEqual(
    0
  , indexOf(str, '0123')
  , 'String had wrong index'
)

console.log('tests successful')
