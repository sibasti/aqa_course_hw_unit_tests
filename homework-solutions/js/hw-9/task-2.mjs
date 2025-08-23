/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if(!character || typeof character.name !== 'string' || typeof character.age !== 'number'){
    throw new Error('Invalid character')
  }
  

  characters.push(character);
  return character;
}

console.log(addCharacter({name: 'denis', age: 27}))
console.log(characters);

function getCharacter(name) {
  return characters.find(characters => characters.name === name);
}
console.log(getCharacter('Fred'));

function getCharactersByAge(minAge) {
  if(typeof minAge !== 'number'){
    throw new Error('Invalid character');
  }
  return characters.filter(el =>el.age >= minAge)
}

console.log(getCharactersByAge(40));

function updateCharacter(name, newCharacter) {
  const character = characters.find(char => char.name ===name);
  if(!character){
    throw new Error('Invalid character');
   }
    character.name = newCharacter.name;
    character.age = newCharacter.age;
    return character;
  }

console.log(updateCharacter('Fred',{name: 'DDenis', age:234}));
console.log(characters);

function removeCharacter(name) {
  const i = characters.findIndex(char => char.name === name)
  if(i === -1){
    throw new Error('Invalid character');
   }
    return characters.splice(i,1)[0];
  }

console.log(removeCharacter('DDenis'));
console.log(characters);

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
