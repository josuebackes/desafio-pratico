const carroselConteudo = document.querySelectorAll('.carrosel-container-conteudo-itens');
const botaoVoltar = document.getElementById('carrosel-botao-voltar');
const botaoAvancar = document.getElementById('carrosel-botao-avancar');

let conteudoAtual = 0;

function esconderConteudo() {
    carroselConteudo.forEach(item => item.classList.remove('ativo'));
}

function mostrarConteudo() {
    carroselConteudo[conteudoAtual].classList.add('ativo');
}

function proximoConteudo() {
    esconderConteudo();
    conteudoAtual = (conteudoAtual + 1) % carroselConteudo.length;
    mostrarConteudo();   
}

function voltarConteudo() {
    esconderConteudo();
    conteudoAtual = (conteudoAtual - 1 + carroselConteudo.length) % carroselConteudo.length;
    mostrarConteudo();
}

botaoAvancar.addEventListener('click', proximoConteudo);
botaoVoltar.addEventListener('click', voltarConteudo);

mostrarConteudo();