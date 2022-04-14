function validaArray(arr,numero){ //criou uma função com parametros => array e número

  try{

    if(!arr && !numero) throw new ReferenceError('Envie os parâmetros'); // se os parâmetros não enviados, lance um erro do tipo ReferenceError

    if( typeof arr !== 'object') throw new TypeError('Array tem que ser do tipo object'); // se o array não for do tipo 'object', lance um erro do tipo TypeError

    if (typeof numero !== 'number') throw new TypeError ('Numero te que ser do tipo number') //Se o número não for do tipo 'number', lance um erro do tipo TypeError

    if (arr.length !== numero) throw new RangeError('Tamanho Inválido');//Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError

    return arr; //caso o arran seja válido retorne o array.

  }catch(e) {

    if (e instanceof ReferenceError){
        console.log('Este erro é um ReferenceError');
        console.log(e.message);
     
     

    }else if (e instanceof TypeError){
        console.log('Este erro é um TypeError');
        console.log(e.message);
     
        
    }else if (e instanceof RangeError){
        console.log('Este erro é um RangeError');
        console.log(e.message);
     
        
    }else{
        console.log("Aconteceu um tipo de erro não esperado: " + e);    
    }

  }


} 

//console.log(validaArray());
//console.log(validaArray(5,5));
//console.log(validaArray([],'a'));
//console.log(validaArray([],5));
console.log(validaArray([1,2,3,4,5],5));