function calculaTabuada() {
    let tabuada = document.querySelector("#tabuada tbody");
    //obter conteudo do tbody
    let valorA = parseInt(document.querySelector("#valorA").value);
    //limpar o conteudo
    tabuada.innerHTML = " ";
    //criar o laço de repetição do valor de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {
        //calculando o resultado da operação
        let resultado = valorA * valorB;
        //criando o template das colunas da linha atual
        let template = `
            <td> ${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;
        //criando o elemento tr
        let tr = document.createElement('tr')

        tr.innerHTML = template;

        tabuada.append(tr);
    }
};

calculaTabuada();

document.querySelector('#valorA').addEventListener('change', calculaTabuada);