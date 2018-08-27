let lista = [];

function inserir(){
    console.log('A tarfa foi inserida com sucesso')
    // lista.push(inserir());
}

if(process.argv[2] == "inserir"){
    inserir();
}

function listar(){
}

if(process.argv[2] == "listar"){
    listar();
}

function fazer(){
    console.log('A tarefa foi marcada como feita')
}
if(process.argv[2] == "fazer"){
    fazer();
}

function limpar(){
    console.log('A lista de tarefas foi excluída')
}

if(process.argv[2] == "limpar"){
    limpar();
}