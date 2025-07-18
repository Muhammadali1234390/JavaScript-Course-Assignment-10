let names = ["Ali", "Ahmed", "Saad", "Hassan", "AALIYA", "aLi"];
let searchTerm = prompt("Enter a name to search:");

let results = [];

for (let i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().includes(searchTerm.toLowerCase())) {
    results.push(names[i]);
  }
}

if (results.length > 0) {
document.writeln("<h3>Original Array:")
document.writeln(names + "<br><br>")

  document.writeln("Matching Results:", results);
} else {
  document.writeln("<h3>Original Array:")
  document.writeln(names + "<br>")
  
  document.writeln("No match found.");
}
