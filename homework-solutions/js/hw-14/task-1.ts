//1
function wrapInArray <T>(element: T):T[] {
    return [element];
};

const numberArray = wrapInArray(5);
const stringArray = wrapInArray('hello');

console.log(numberArray);
console.log(stringArray);
//2
function getLastElement<T>(array: T[]):T | undefined {
    return array[array.length -1];
};
console.log(getLastElement([1,2,3,4]));
console.log(getLastElement(['a','b']));

//3
interface IPair<T,U>{
    first: T,
    second: U;
};

function describePair<T,U>(pair: IPair<T,U>): string {
    return `${pair.first} and ${pair.second}`;
};

console.log(describePair({first: 'Alice', second: 30}));;
