let sentence = prompt("Enter a sentence:");
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let capitalized = word[0].toUpperCase() + word.slice(1);
  
  if (i < words.length - 1) {
    result += capitalized + " ";
  } else {
    result += capitalized;
  }
}

alert(result);
