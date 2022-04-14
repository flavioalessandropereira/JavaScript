function filtraPares(arr){
    return arr.filter(callback);

}

function filtraImpares(arr){
    return arr.filter(callback2);

}
function callback(item){
    return item % 2 === 0;
}

function callback2(item){
    return item % 2 !== 0;
}
const meuArray = [2, 7, 12, 1, 17, 302];

console.log('Array pares: '+ filtraPares(meuArray));
console.log('Array impares: '+filtraImpares(meuArray));