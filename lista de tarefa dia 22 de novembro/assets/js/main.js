const inputTarefa= document.querySelector('input-tarefa');
const btnTarefa= document.querySelector('.btn-tarefa');
const tarefas= document.querySelector('tarefas');

function criarli(){
    const li= document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e){
    if (e.keycode===13){
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

function limparinput(){
    inputTarefa.value= " ";
    inputTarefa.focus();
}

function criarBotãoApagar(li){
    li.innerText+=" ";
    const botãoApagar= document.createElement('button');
    botãoApagar.innerText='Apagar';
    botãoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botãoApagar);
}

function criarTarefa(textoInput){
    const li=criaLi();
    li.immerText=textoInput;
    tarefas.appendChild(li);
    limparInput();
    criarBotãoApagar(li);
    salvarTarefa();
}

