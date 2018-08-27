 let numero1 = Number(process.argv[2]);
let numero2 = Number(process.argv[3]);

if(isNaN(entrada1) || isNaN(entrada2)){
    console.log("É necessário informar dois valores");
}
else{
    let soma = entrada1 + entrada2;

    console.log(soma);
}