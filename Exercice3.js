//exercice 3
let results = [];

let data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];

function countNumberInArray(number,array){
    return array.filter((item)=>item==number).length
}

function countArrayNumbers(array){
    let res = array.reduce((prev, cur) => (prev.indexOf(cur) === -1) ? [...prev, cur] : prev, []);
    return res.map((item)=>countNumberInArray(item,array))
}

results=countArrayNumbers(data)
console.log(results)
