let numbers = [5, 2, 9, 1, 7, 6];

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

document.writeln("Minimum value:", min);
document.writeln("Maximum value:", max);
