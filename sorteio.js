const fs = require('fs');
let lista = [];
let i = 0;

function sorteio(){
    return Math.ceil(Math.random() * 60);    
}

for(i=0; i < 6; i++){
    lista.push(sorteio());
}

fs.writeFile('sorteo.txt', lista, function(erro){
    if(erro){
        console.log('Não foi possível gravar o arquivo');
        console.log(erro);
    }
    else{
        console.log('O arquivo foi gravado com os números!' + lista);
    }
});