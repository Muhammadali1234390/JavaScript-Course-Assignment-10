function isPalindrome(word) {
  word = word.toLowerCase();
  
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

let inputWord = "Madam";
if (isPalindrome(inputWord)) {
  document.writeln(inputWord + " palindrome hai.");
} else {
  document.writeln(inputWord + " palindrome nahi hai.");
}
