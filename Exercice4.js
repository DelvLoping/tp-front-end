//exercice 4

function char_rot(vector,char){
    return String.fromCharCode((char.charCodeAt(0)+vector))
}
function cesear(vector, text){
    return text.split('').map((char)=>char_rot(vector,char)).join('')
}
console.log(cesear(2,'Bonjour tout le monde'));

function cesearDecode(vector, text){
    return text.split('').map((char)=>char_rot(-vector,char)).join('')
}
console.log(cesearDecode(2,cesear(2,'Bonjour tout le monde')));