/**
 * Takes a string and adds 'padding' to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
}

console.log(padLeft('Hello world', 'hi ')) // returns '    Hello world'


///////////////////////////////////////////////////

type fish_or_bird = Fish | Bird

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  name: string;
  swim(): void;
  layEggs(): void;
}

// const myFish: Fish = {
//   name: 'seth',
// } // should error because it doesn't have all methods

function getSmallPet(): fish_or_bird {
  // ...
  return { fly() { }, layEggs() { } }
}

let pet = getSmallPet()
pet.layEggs() // okay

function isFish(pet: fish_or_bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
