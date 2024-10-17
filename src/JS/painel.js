const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvançar = document.getElementById('seta-avancar');

imagemAtual = 0


setaAvançar.addEventListener('click', function(){
    if(imagemAtual === imagens.length -1){
        return
    }

    esconderImagemAberta();

    imagemAtual ++

    mostrarProximaImagem();

    opacidadeSetas();

})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return
    }

    esconderImagemAberta();

    imagemAtual --

    mostrarProximaImagem();

    opacidadeSetas();

})

function opacidadeSetas () {
    EhaPrimeiraImagem = imagemAtual === 0
    
    if(EhaPrimeiraImagem){
        setaVoltar.classList.add('opacidade');
    } else {
        setaVoltar.classList.remove('opacidade')
    }

    naoEhAUltimaImagem = imagemAtual === imagens.length -1
    if(naoEhAUltimaImagem){
        setaAvançar.classList.add('opacidade');
    } else{
        setaAvançar.classList.remove('opacidade');
    }
}


function esconderImagemAberta(){
    imagens[imagemAtual].classList.remove('mostrar');
}

function mostrarProximaImagem(){
    imagens[imagemAtual].classList.add('mostrar');
}


