let sentence = "The wind whispered softly through the trees as night fell";
let words = sentence.split(" ");
let longWords = [];

for(let i=0; i < words.length; i++){
    if(words[i].length >= 5){
        longWords.push(words[i])
    }
}

document.writeln("<h3>Original Sentence</h3><br>")
document.writeln(sentence + "<br><br>")
document.writeln("<h3>Long Words of the sentence</h3><br>")
document.writeln(longWords);

console.log(typeof words)