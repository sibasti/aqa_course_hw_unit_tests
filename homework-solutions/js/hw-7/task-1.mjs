/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {

  return [].concat(...arrays);
  
  
}

console.log(mergeArrays([1,2], [3,4], [5,6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {

    const words = sentence.split(" ");
    let result = "";
    let index = 0;

    for(let i = 0; i < words.length; i++){
      let word = words[i];
      if (word === '') continue;

      if(index === 0){
        word=word.toLowerCase();
      } else {
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result += '_';
      }
      
     
       

      result += word;
      index++;
      
    }
    return result;
}

console.log(devideBy("I am super engineer"));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b =1, num;
  for(let i = 2;i <= n; i++){
    num = a+b;
    a = b;
    b = num;
  }
  return b;
}

console.log(fibonacci(10));

export { mergeArrays, fibonacci, devideBy };
