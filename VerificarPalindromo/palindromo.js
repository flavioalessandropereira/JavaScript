//solução1

function verificaPalindromo(string) {
    if(!string)return "string inexistente";
    
    return string.split("").reverse().join("") === string; //split = separa tudo / reverse = reverte todos os caracteres / join ajunta todos os caracteres separados transformando em uma nova string
}

//let myVar = "ama"
//console.log(verificaPalindromo (myVar));


//solução2

function verificaPalindromo2(string) {
    if(!string)return "string inexistente";
    
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i ]){
            return false;
        }
    }
    return true;
}
let myVar2 = "abba"
console.log(verificaPalindromo (myVar2));