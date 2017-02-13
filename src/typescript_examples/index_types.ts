export function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

export function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name] // o[name] is of type T[K]
}

export interface Person {
  name: string;
  age: number;
  hello?: () => 'hi';
}

let person: Person = { name: 'ben', age: 24 }

let strings = pluck(person, ['name', 'age', 'hello'])
let hi = getProperty(person, 'name')
