function customMap<T, U>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => U
): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];

const multipliedByIndex = customMap(numbers, (num, index) => num * index);

console.log(multipliedByIndex);