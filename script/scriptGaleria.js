let botaoArtistaUm = document.getElementById("botao-artista-um");
let botaoArtistaDois = document.getElementById("botao-artista-dois");
let botaoArtistaTres = document.getElementById("botao-artista-tres");
let botaoArtistaQuatro = document.getElementById("botao-artista-quatro");

 
let conteudoFixo = document.getElementById("galeria-descricao-um");
let conteudoDois = document.getElementById("galeria-descricao-dois");
let conteudoTres = document.getElementById("galeria-descricao-tres");
let conteudoQuatro = document.getElementById("galeria-descricao-quatro");
let conteudoAlbunsAdicionais = document.getElementById("galeria-albuns-extra");

botaoArtistaUm.addEventListener('click', () => {
    if (conteudoDois.style.display === 'none' || conteudoDois.style.display === '') {
        conteudoFixo.style.display = 'none';
        conteudoDois.style.display = 'block';
        conteudoFixo = conteudoDois;
    } else {
        conteudoFixo = document.getElementById("galeria-descricao-um");
        conteudoDois.style.display = 'none';
        conteudoFixo.style.display = 'block';
    }  
});

botaoArtistaDois.addEventListener('click', () => {
    if (conteudoTres.style.display === 'none' || conteudoTres.style.display === '') {
        conteudoFixo.style.display = 'none';
        conteudoTres.style.display = 'block';
        conteudoFixo = conteudoTres;
    } else {
        conteudoFixo = document.getElementById("galeria-descricao-um");
        conteudoTres.style.display = 'none';
        conteudoFixo.style.display = 'block';
    }  
});

botaoArtistaTres.addEventListener('click', () => {
    if (conteudoQuatro.style.display === 'none' || conteudoQuatro.style.display === '') {
        conteudoFixo.style.display = 'none';
        conteudoQuatro.style.display = 'block';
        conteudoFixo = conteudoQuatro;
    } else {
        conteudoFixo = document.getElementById("galeria-descricao-um");
        conteudoQuatro.style.display = 'none';
        conteudoFixo.style.display = 'block';
    }  
});

botaoArtistaQuatro.addEventListener('click', () => {
    if (conteudoAlbunsAdicionais.style.display === 'none' || conteudoAlbunsAdicionais.style.display === '') {
        conteudoFixo.style.display = 'none';
        conteudoAlbunsAdicionais.style.display = 'block';
        conteudoFixo = conteudoAlbunsAdicionais;
    } else {
        conteudoFixo = document.getElementById("galeria-descricao-um");
        conteudoAlbunsAdicionais.style.display = 'none';
        conteudoFixo.style.display = 'block';
    }  
});