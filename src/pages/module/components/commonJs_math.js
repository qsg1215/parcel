//在math.js中，我们定义了一个变量和一个函数并把它暴露出来
let num = 0
function add(a, b) {
  return a + b
}
// console.time()
// for (let i = 0; i < 10000000000; i++) {}
// console.timeEnd()

module.exports = {
  //在这向外暴露出函数与变量
  add: add,
  num: num,
}
