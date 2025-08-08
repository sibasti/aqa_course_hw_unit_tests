/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function getUniquePizzas(myPizzas, competitorPizzas){
  let unique = [];
  
  for(let i = 0; i < myPizzas.length; i++) {
    const myPizzaLower = myPizzas[i].toLowerCase();

    let found = false;

    for (let j = 0; j < competitorPizzas.length; j++) {
      if (myPizzaLower === competitorPizzas[j].toLowerCase()){
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(myPizzas[i]);
    }
  }
  return unique.length > 0 ? unique: null;
}

let resultUnique = getUniquePizzas(myPizzasT1,competitorPizzas);

let resultNull = getUniquePizzas(myPizzasT2,competitorPizzas);

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
