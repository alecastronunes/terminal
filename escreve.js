const fs = require('fs');

fs.writeFile('teste.txt','Hello',function(erro){
    if(erro){
        console.log("Não foi possível acessar o arquivo");
    }
    else{
        console.log("O arquivo foi gravado");
    }
});