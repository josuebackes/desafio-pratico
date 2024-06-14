const itensDoCarrosel = document.querySelectorAll('.carrosel-container-conteudo-itens');
const botaoVoltar = document.getElementById('carrosel-botao-voltar');
const botaoAvancar = document.getElementById('carrosel-botao-avancar');

let indiceAtual = 0;
let transicaoEmProgresso = false;

function esconderItem(direcao) {
    const itemAtual = itensDoCarrosel[indiceAtual];
    const classeDeSaida = direcao === 'direita' ? 'saindo-para-direita' : 'saindo-para-esquerda';
    itemAtual.classList.add(classeDeSaida);

    itemAtual.addEventListener('animationend', function() {
        itemAtual.classList.remove('ativo', classeDeSaida);
        transicaoEmProgresso = false; 
    }, { once: true });
}

function mostrarItem(direcao) {
    const novoItem = itensDoCarrosel[indiceAtual];
    const classeDeEntrada = direcao === 'direita' ? 'entrando-da-direita' : 'entrando-da-esquerda';
    novoItem.classList.add('ativo', classeDeEntrada);


    novoItem.addEventListener('animationend', function() {
        novoItem.classList.remove(classeDeEntrada);
        transicaoEmProgresso = false;
    }, { once: true });
}

function avancarItem() {
    if (transicaoEmProgresso) return; 
    transicaoEmProgresso = true;
    esconderItem('direita');
    indiceAtual = (indiceAtual + 1) % itensDoCarrosel.length;
    mostrarItem('esquerda');
}

function voltarItem() {
    if (transicaoEmProgresso) return; 
    transicaoEmProgresso = true;
    esconderItem('esquerda');
    indiceAtual = (indiceAtual - 1 + itensDoCarrosel.length) % itensDoCarrosel.length;
    mostrarItem('direita');
}

botaoAvancar.addEventListener('click', avancarItem);
botaoVoltar.addEventListener('click', voltarItem);

mostrarItem('direita'); 
