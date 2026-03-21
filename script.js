function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5577991508733';

const texto = `Olá, me chamo ${nome}, ${mensagem}`;
const msgformatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgformatada}`;

window.open(url, '_blank');



}

const texto = "MAYSON LIMA"
const elemento = document.querySelector(".nome_mayson")

let index = 0

function digitar(){
    if(index < texto.length){
        elemento.textContent += texto.charAt(index)
        index++
        setTimeout(digitar, 150) // velocidade
    }
}

digitar()