/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") return false;
  const lower = word.toLowerCase();
    for (let i = 0; i < lower.length / 2; i++) {
    if (lower[i] !== lower[lower.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrom('level'));
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
   if (typeof sentence !== "string" || sentence === "") return [];
  let result = [];
  let maxLen = 0;
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    const char = sentence[i] || " ";
     if (char !== " ") {
      word += char;
    } else if (word.length > 0) {
      if (word.length > maxLen) {
        maxLen = word.length;
        result = [word];
      } else if (word.length === maxLen) {
        result.push(word);
      }
      word = "";
    }
  }
  
  return result;
}

console.log(findLongestWords('я программироую программирую программу'));

export { isPalindrom, findLongestWords };
