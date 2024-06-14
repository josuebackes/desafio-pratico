let botoesArtistas = [
    { botao: "botao-artista-um", conteudo: "galeria-descricao-dois" },
    { botao: "botao-artista-dois", conteudo: "galeria-descricao-tres" },
    { botao: "botao-artista-tres", conteudo: "galeria-descricao-quatro" },
    { botao: "botao-artista-quatro", conteudo: "galeria-albuns-extra" }
];

let conteudoFixo = document.getElementById("galeria-descricao-um");
let conteudoFuncionalidadesImagemUm = document.getElementById("funcionalidades-conteudo-img-um");
let conteudoFuncionalidadesImagemDois = document.getElementById("funcionalidades-conteudo-img-dois");

botoesArtistas.forEach(item => {
    let botao = document.getElementById(item.botao);
    let conteudo = document.getElementById(item.conteudo);

    botao.addEventListener('click', () => {
        if (conteudo.style.display === 'none' || conteudo.style.display === '') {
            conteudoFixo.style.display = 'none';
            conteudo.style.display = 'block';
            if (item.botao === "botao-artista-quatro") {
                conteudoFuncionalidadesImagemUm.style.display = 'none';
                conteudoFuncionalidadesImagemDois.style.display = 'none';
            } else {
                conteudoFuncionalidadesImagemUm.style.display = 'block';
                conteudoFuncionalidadesImagemDois.style.display = 'block';
            }
            conteudoFixo = conteudo;
        } else {
            conteudoFixo = document.getElementById("galeria-descricao-um");
            conteudo.style.display = 'none';
            conteudoFixo.style.display = 'block';
            conteudoFuncionalidadesImagemUm.style.display = 'block';
            conteudoFuncionalidadesImagemDois.style.display = 'block';
        }
    });
});
