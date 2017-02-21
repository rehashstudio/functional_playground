//TYPESCRIPT FUNCTION OVERLOADING

//this function works, but exposes code to type errors

function reverse(stringOrArray: string | any[]): string | any[] {
    return typeof stringOrArray === "string"
        ? stringOrArray.split("").reverse().join("")
        : stringOrArray.slice().reverse();
}

const tpircsepyt: string | any[] = reverse('typescript'); //logs 'tpircsepyt'
// reverse(true) //errors

const numbers: string | any[] = reverse([1,2,3,4,5]);
console.log('numbers: ', numbers) //[ 5, 4, 3, 2, 1 ]

//problem, the typescript return annotation is non-specific, so we
//don't get access to array.prototype methods in the return value

numbers.filter(function(el){ return el }); //Error: Property 'filter' does not exist on type 'string | any[]'.

// solution is to overload the function with separate declarations of the function heading for each annotation 
// parameter and return type, followed by the combined signature of the function

function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse(stringOrArray: string | any[]): string | any[] {
    return typeof stringOrArray === "string"
        ? stringOrArray.split("").reverse().join("")
        : stringOrArray.slice().reverse();
}


const numbers: string | any[] = reverse([1,2,3,4,5]);
console.log('numbers: ', numbers) //[ 5, 4, 3, 2, 1 ]

//array.prototype methods now available

const oddNumbers: string | any[] = numbers.filter(function(el){ return (el % 2) }); //[ 5, 3, 1 ]
console.log('oddNumbers: ', oddNumbers)
