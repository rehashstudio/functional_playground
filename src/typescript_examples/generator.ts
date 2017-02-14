// Generators only work if you target es6 or above
function* myGen() {
  const hello = yield 1
  yield hello
  return 3
}

const gen = myGen()

console.log(gen.next())
console.log(gen.next('echo'))
console.log(gen.next('echo'))
console.log(gen.next('echo'))
console.log(gen.next('echo'))
console.log(gen.next('echo'))
