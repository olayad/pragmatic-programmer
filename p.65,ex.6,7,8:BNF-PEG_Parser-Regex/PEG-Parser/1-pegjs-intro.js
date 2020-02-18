var peg = require("pegjs");
var parser = PEG.buildParser('start = expression;expression = text + number;text = a: [a-z]+{return a.join("");};number = b:[0-9]+{return b.join("");}');


wordCount = w:(word space?)* { return w.length; }
word = letter+
letter = [a-zA-Z0-9]
space = " "

string = "word word word";


console.log(parser.parse(string));