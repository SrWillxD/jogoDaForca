//* Palavras a serem adivinhadas.
const palavras = {
    Profissões: [    "APICULTOR",    "AUDITOR",    "BARTENDER",    "CERIMONIALISTA",    "CHEF",    "COACH",    "DESEMBARGADOR",    "DESPACHANTE",    "ENDOCRINOLOGISTA",    "EMBAIXADOR",    "HEADHUNTER",    "JUIZ",    "PIZZAIOLO",    "PERITO",    "QUIROPRATA",    "ROTEIRIZADOR",    "SILVICULTOR",    "TRADER"],

}

//* Inicializando a variavel fora pois preciso q ela esteja com o escopo global;
let palavra="";
let underscore="";

//* Chamo a função inicial para escolher CATEGORIA, PALAVRA, definir a DICA e criar os UNDERSCORES.
init();


function init(){
    //* Seleciona uma categoria e uma palavra
    const valoresDasChavesDoObjeto = Object.keys(palavras);
    const grupo = valoresDasChavesDoObjeto[Math.floor(Math.random() * valoresDasChavesDoObjeto.length)];
    palavra = palavras[grupo][Math.floor(Math.random() * palavras[grupo].length)];

    //* Pega a categoria escolhida e usa como dica no HTML 
    document.getElementById("pDaDivDica").textContent = `A dica da palavra é: ${grupo}`;

    //* Coloca a quantidade de underscores referente a quantidade de letras 
    underscore = palavra.replace(/\S/g, "— ");
    console.log(underscore.length);
    console.log(palavra.length);
    document.getElementById("divPalavraSecreta").textContent = underscore;
}

//* Capturo a div pai do teclado
const divTeclado = document.getElementById('divTeclado');

//* Cria uma variável para armazenar a tecla pressionada
let teclaPressionada = '';

//* Adicione um event listener a div pai do teclado
divTeclado.addEventListener('click', function(event) {
    //* Verifica se o elemento clicado é um botão
    if (event.target.nodeName === 'BUTTON') {
    //* Atualiza a variável com a tecla pressionada
    teclaPressionada = event.target.value;
    let eventDoClique = event;
    verificaCertoErrado(teclaPressionada, palavra, eventDoClique);
    }
});



function verificaCertoErrado(teclaPressionada, palavra, eventDoClique){
    if(palavra.includes(teclaPressionada)){
        acertou(teclaPressionada, palavra, eventDoClique);
    }else{
        errou();
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
}

function coloreBotaoAcerto(eventDoClique){
    eventDoClique.target.classList.add('btn-acerto');
    
}

function errou(){
    console.log("Não existe esta letra na palavra");

}

