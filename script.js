import {objetoDePalavras} from './objetoDePalavras.js';

let palavraASerAdivinhada="";

const divPalavraSecreta = document.getElementById("divPalavraSecreta");

function iniciaOJogo(){
    const grupoDaPalavra = defineGrupoDaPalavra();
    dicaDaPalavra(grupoDaPalavra);
    palavraASerAdivinhada = definePalavraDoGrupo(grupoDaPalavra);
    tracinhosQueEscondemAPalavra(palavraASerAdivinhada); 

}
iniciaOJogo();

function defineGrupoDaPalavra(){
    const grupo = Object.keys(objetoDePalavras)[Math.floor(Math.random() * Object.keys(objetoDePalavras).length)];
    return grupo;
}

function definePalavraDoGrupo(grupo){
    const palavraASerAdivinhada = objetoDePalavras[grupo][Math.floor(Math.random() * objetoDePalavras[grupo].length)];
    return palavraASerAdivinhada;
}

function dicaDaPalavra(grupoDaPalavra){
    const pDaDivDica = document.getElementById("pDaDivDica");
    pDaDivDica.textContent = `A dica da palavra é: ${grupoDaPalavra}`;
}

function tracinhosQueEscondemAPalavra(palavraASerAdivinhada){
    const tracinhosQueEscondemAPalavra = palavraASerAdivinhada.replace(/\S/g, "— ");
    divPalavraSecreta.textContent = tracinhosQueEscondemAPalavra;
}

//!:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//TODO :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let valorDaTeclaPressionada = '';

const divTeclado = document.getElementById('divTeclado');
divTeclado.addEventListener('click', (event)=>{
    if (event.target.nodeName === 'BUTTON'){
    valorDaTeclaPressionada = event.target.value;
    let eventDoClique = event;
    verificaCertoErrado(eventDoClique);
    }
});

function verificaCertoErrado(eventDoClique){
    if(palavraASerAdivinhada.includes(valorDaTeclaPressionada)){
        acertou(eventDoClique);
    }else{
        errou(eventDoClique);
    }
}

function acertou(eventDoClique){
    let palavraAtualizadaACadaTeclagem = atualizaAPalavraACadaTeclagem();

    coloreBotaoAcerto(eventDoClique);
    piscaTelaVerde();
    verificaSeGanhou(palavraAtualizadaACadaTeclagem);
}

function atualizaAPalavraACadaTeclagem(){
    let palavraASerAdivinhadaSemEspaços = palavraASerAdivinhada.replace(/\s/g, ""); 
    let palavraAtualizadaACadaTeclagem = divPalavraSecreta.textContent;
    console.log(palavraASerAdivinhada);
    
    for (let i = 0; i < palavraASerAdivinhadaSemEspaços.length; i++){
        if(palavraASerAdivinhadaSemEspaços[i] == valorDaTeclaPressionada) {
            palavraAtualizadaACadaTeclagem = palavraAtualizadaACadaTeclagem.substring(0, 2 * i) + valorDaTeclaPressionada + palavraAtualizadaACadaTeclagem.substring(2 * i + 1);
        }
    }
    
    divPalavraSecreta.textContent = palavraAtualizadaACadaTeclagem;
    return palavraAtualizadaACadaTeclagem;
}

function coloreBotaoAcerto(eventDoClique){
    eventDoClique.target.classList.add('btn-acerto');
}

function piscaTelaVerde(){
    setTimeout(()=>{document.body.style.backgroundColor = "rgba(62, 255, 62, 0.500)"},1);
    setTimeout(()=>{document.body.style.backgroundColor = "grey"},200);
}

function verificaSeGanhou(palavraAtualizadaACadaTeclagem){
    if(!palavraAtualizadaACadaTeclagem.includes("— ")){
        setTimeout(()=> {exibirNotificacaoGanhou()}, 600)
    }
    
}

function exibirNotificacaoGanhou(){
    let overlay = document.querySelector('.overlay');
    let notificacao = document.querySelector('.notificationGanhou');
    overlay.style.display = 'block';
    notificacao.style.display = 'block';
}

let numeroDaForca=0;
function errou(eventDoClique){
    let divImagem = document.getElementById('imagemForca');
    if(numeroDaForca<6){numeroDaForca++}

    divImagem.src = `./assets/img/imgsForca/forca${numeroDaForca}.png`;

    coloreBotaoErro(eventDoClique);
    piscaTelaVermelho();
    if(numeroDaForca==6){setTimeout(()=> {exibirNotificacaoPerdeu()}, 500)}
}

function coloreBotaoErro(eventDoClique){
    eventDoClique.target.classList.add('btn-erro');
}

function piscaTelaVermelho(){
    setTimeout(()=>{document.body.style.backgroundColor = "rgba(255, 0, 0, 0.300)"},1);
    setTimeout(()=>{document.body.style.backgroundColor = "grey"},200);
}

function exibirNotificacaoPerdeu(){
    let overlay = document.querySelector('.overlay');
    let notificacao = document.querySelector('.notificationPerdeu');
    notificacao.querySelector("p").textContent= `A palavra era: ${palavraASerAdivinhada}. Você errou.`;
    overlay.style.display = 'block';
    notificacao.style.display = 'block';
}

const reiniciarJogoBotao = document.querySelectorAll(".reiniciarJogo");
for (let i = 0; i < reiniciarJogoBotao.length; i++) {
    reiniciarJogoBotao[i].addEventListener("click", function() {
    location.reload();
    });
}
