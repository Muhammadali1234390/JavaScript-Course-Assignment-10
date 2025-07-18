let a = [1, 2, 2, 3, 1];
let b = [];

for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) == -1) {
    b.push(a[i]);
  }
}

document.writeln("<h3>Original Array</h3><br>")
document.writeln(a + "<br><br>")
document.writeln("<h3>Updated version of array:</h3><br>")
document.writeln(b);
