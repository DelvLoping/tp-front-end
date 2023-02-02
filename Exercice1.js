const  { Parser } = require("./Parser.js")

//exercice 1
const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";
const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007