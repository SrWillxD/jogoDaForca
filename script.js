const palavras = {
    Profissões: [    "APICULTOR",    "AUDITOR",    "BARTENDER",    "CERIMONIALISTA",    "CHEF",    "COACH",    "DESEMBARGADOR",    "DESPACHANTE",    "ENDOCRINOLOGISTA",    "EMBAIXADOR",    "HEADHUNTER",    "JUIZ",    "PIZZAIOLO",    "PERITO",    "QUIROPRATA",    "ROTEIRIZADOR",    "SILVICULTOR",    "TRADER"],

}

let palavra="";
let underscore="";

init();


function init(){
    const valoresDasChavesDoObjeto = Object.keys(palavras);
    const grupo = valoresDasChavesDoObjeto[Math.floor(Math.random() * valoresDasChavesDoObjeto.length)];
    palavra = palavras[grupo][Math.floor(Math.random() * palavras[grupo].length)];

    document.getElementById("pDaDivDica").textContent = `A dica da palavra é: ${grupo}`;

    underscore = palavra.replace(/\S/g, "— ");
    console.log(underscore.length);
    console.log(palavra.length);
    document.getElementById("divPalavraSecreta").textContent = underscore;
}

const divTeclado = document.getElementById('divTeclado');

let teclaPressionada = '';

divTeclado.addEventListener('click', function(event) {
    if (event.target.nodeName === 'BUTTON') {
    teclaPressionada = event.target.value;
    let eventDoClique = event;
    verificaCertoErrado(teclaPressionada, palavra, eventDoClique);
    }
});



function verificaCertoErrado(teclaPressionada, palavra, eventDoClique){
    if(palavra.includes(teclaPressionada)){
        acertou(teclaPressionada, palavra, eventDoClique);
    }else{
        errou(eventDoClique);
    }
}

function acertou(teclaPressionada, palavra, eventDoClique) {
    let novaPalavraSecreta = palavra.replace(/\s/g, ""); 
    let novaPalavra = document.getElementById("divPalavraSecreta").textContent;

    for (let i = 0; i < novaPalavraSecreta.length; i++) {
        if (novaPalavraSecreta[i] == teclaPressionada) {
            novaPalavra = novaPalavra.substring(0, 2 * i) + teclaPressionada + novaPalavra.substring(2 * i + 1);
        }
    }
    
    document.getElementById("divPalavraSecreta").textContent = novaPalavra;
    coloreBotaoAcerto(eventDoClique);
    piscaTelaVerde();
}

function coloreBotaoAcerto(eventDoClique){
    eventDoClique.target.classList.add('btn-acerto');
    
}

function piscaTelaVerde() {
    setTimeout(()=>{document.body.style.backgroundColor = "rgba(62, 255, 62, 0.500)"},1)
    setTimeout(()=>{document.body.style.backgroundColor = "white"},200);
}

let numeroDaForca=0;
function errou(eventDoClique){
    let divImagem = document.getElementById('imagemForca');
    numeroDaForca++;

    if(numeroDaForca<6){
        divImagem.src = `assets/img/imgsForca/forca${numeroDaForca}.png`;
    }else{
        divImagem.src = `assets/img/imgsForca/forca${numeroDaForca}.png`;
        perdeu();
    }

    coloreBotaoErro(eventDoClique);
    piscaTelaVermelho();
}

function coloreBotaoErro(eventDoClique){
    eventDoClique.target.classList.add('btn-erro');

}

function piscaTelaVermelho() {
    setTimeout(()=>{document.body.style.backgroundColor = "rgba(255, 0, 0, 0.486)"},1)
    setTimeout(()=>{document.body.style.backgroundColor = "white"},200);
    
}

