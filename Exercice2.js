//exercice 2

function getMax(a,b,c){
    //return a > b ? a > c ? a : c : b > c ? b : c
    return Math.max(a,b,c)
}

console.log(getMax(1,8,6))
console.log(getMax(1,8,8))
console.log(getMax(10,8,6))
console.log(getMax(1,8,16))
