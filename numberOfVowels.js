const numberOfVowels = function(data) {
  const vowels = (/[a,e,i,o,u]/g)
  return data.match(vowels).length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));