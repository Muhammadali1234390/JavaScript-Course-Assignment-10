let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = [];
let oddNumbers = [];

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}

document.writeln("Even numbers:", evenNumbers);
document.writeln("Odd numbers:", oddNumbers);
