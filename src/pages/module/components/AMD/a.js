var myModule = (function () {
  var var1 = 1
  var var2 = 2

  function fn1() {
    return var1 + var2
  }

  function fn2() {
    return var1 - var2
  }

  return {
    fn1: fn1,
    fn2: fn2,
  }
})()

console.log(myModule, 'myModule')
console.log(myModule, 'myModule')
