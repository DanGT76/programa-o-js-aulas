const tabela = document.querySelector("#tabela")

const linha = document.createElement("tr");

const celulaNome = document.createElement("td");
const celulaMedia = document.createElement("td");
const celulaSituacao = document.createElement("td");

celulaNome.textContent = "Daniel Dias";
celulaMedia.textContent = 8.5;
celulaSituacao.textContent = "aprovado";

linha.append(celulaNome, celulaMedia, celulaSituacao)

tabela.append(linha)