// REFERENCE: http://www.typescriptlang.org/docs/handbook/advanced-types.html

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

class Person {
  constructor(public name: string) { }
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  constructor(public name?: string) { }
  log() {
    console.log(this.name)
  }
}

var ben = new Person('ben')

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
