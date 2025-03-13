function elementos(e) {
    let div = document.getElementsByTagName("div")[0];
    let div1 = document.getElementById("div1");
    console.log(div.nextSibling);
    console.log(div.nextElementSibling);
    console.log(div.parentElement);
}

function criaTabela() {
    let pai = document.getElementsByTagName("body")[0];
    let tabela = document.createElement("table");
    tabela.setAttribute("border", 1);
    for (let i = 0; i < 10; i++) { //cria 1 linha
        let linha = document.createElement("tr");
        for (let j = 0; j < 10; j++) { //cria 10 colunas e dps volta pra outra linha. Qnd terminar manda p tabela.
            let coluna = document.createElement("td");
            linha.appendChild(coluna); //inclui sem apagar oq já existe
            
        }
        tabela.appendChild(linha);
    }
    pai.appendChild(tabela);//onde a tabela vai ser criada dentro
}