// b.js
var a = require('./a')
console.log(a.name) // 'morrain'
a.name = 'rename'
var b = require('./a')
console.log(b.name) // 'rename'
