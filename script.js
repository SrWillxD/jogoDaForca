const palavras = {
    Animais: ['ALBATROZ',  'ALPACA',  'ANCHOVA',  'BACALHAU',  'BADEJO',  'BARRACUDA',  'BELUGA',  'CHINCHILA',  'CRACA',  'ESCARAVELHO',  'GERBO',  'GNU',  'GRALHA',  'HAMSTER',  'LHAMA',  'LINCE',  'MARRECO',  'MELRO',  'OCAPI',  'PELICANO',  'PERCEVEJO',  'PIRILAMPO',  'QUATI',  'ROUXINOL',  'SANGUESSUGA',  'SURUCUCU',  'TAPIR',  'TEXUGO'],
    Objetos: ["AMPULHETA",  "ANZOL",  "ALMOFARIZ",  "BOTIJA",  "CANDELABRO",  "DEDALEIRA",  "DESFIBRILADOR",  "ECHARPE",  "ESTRIBO",  "FAGOTE",  "FANTOCHE",  "FREEZER",  "NAVALHA",  "JALECO",  "MODEM",  "NEBULIZADOR",  "NOVELO",  "QUEPE",  "SELIM",  "SINTETIZADOR",  "SPRAY",  "URINOL",  "VUVUZELA",  "WEBCAM",  "XADREZ",  "XILOFONE"],
    Frutas: ["ALFARROBA", "BERGAMOTA", "CIRIGUELA", "CRANBERRY", "FEIJOA", "GROSELHA", "IMBU", "JENIPAPO", "KIWI", "LICHIA", "MEXERICA", "NECTARINA", "PEQUI", "PISTACHE", "POMELO", "SAGUARAJI"],
    Vulcões: ["LAVA", "QUENTE", "CINZA", "ROCHA", "CALOR", "DERRETIMENTO"], 
    Cozinha: ["PANELAS", "COLHER", "RALADOR", "FRITADEIRA", "ELETRODOMESTICOS", "DEPURADOR", "CHAIRA", "TALHER",],
    Profissões: ["APICULTOR",    "AUDITOR",    "BARTENDER",    "CERIMONIALISTA", "CHEF",    "COACH",    "DESEMBARGADOR",    "DESPACHANTE",    "ENDOCRINOLOGISTA",    "EMBAIXADOR",    "HEADHUNTER",    "JUIZ",    "PIZZAIOLO",    "PERITO",    "QUIROPRATA",    "ROTEIRIZADOR",    "SILVICULTOR",    "TRADER"],
    Jardim: ["FLORES", "MINHOCA", "VASO", "TERRA", "PEDRA", "GRAMA", "FONTE"],
    País: ["BRASIL", "ALEMANHA", "CHINA", "PORTUGAL", "CUBA", "NEPAL", "SURINAME", "UGANDA", "NORUEGA", "IRAQUE", "BOTSWANA"],
    Escola: ["LIVRO", "CANETA", "BORRACHA", "CADEIRA", "CADERNO", "QUADRO", "GIZ", "PROVA", "APAGADOR", "MATERIAL", "DISCIPLINA", "ENSINO", "ALUNO", "PROFESSOR", "CURSO", "AULA", "NOTA", "APRENDIZADO"],
    Prédio: ['ELEVADOR', 'PORTARIA', 'GARAGEM', 'ESCADARIA', 'JANELA', 'VARANDA', 'ANDAR', 'TELHADO', 'CIMENTO', 'BLOCOS', 'CATAVENTO', 'ESTRUTURA', 'REVESTIMENTO', 'APARTAMENTO', 'CIMENTEIRA'],
    Árvore: ["FOLHA", "RAMO", "TRONCO", "RAIZ", "FRUTO", "SEMENTE", "GALHO", "FLORESTA", "FLORESCER", "JARDIM", "AROEIRA", "JABUTICABEIRA", "CEREJEIRA", "MANGUEIRA", "LARANJEIRA", "CAJUEIRO", "PINHEIRO"],
    Filme: ['CINEMA', 'DIRETOR', 'ROTEIRISTA', 'FIGURINO', 'TRILHA', 'EFEITOS', 'FESTIVAL', 'TAPETE', 'HOLLYWOOD', 'CINEASTA', 'BILHETERIA', 'OSCAR'], 
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
    document.getElementById("divPalavraSecreta").textContent = underscore;
}

const divTeclado = document.getElementById('divTeclado');

let teclaPressionada = '';
divTeclado.addEventListener('click', function(event){
    if (event.target.nodeName === 'BUTTON'){
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

function acertou(teclaPressionada, palavra, eventDoClique){
    let novaPalavraSecreta = palavra.replace(/\s/g, ""); 
    let novaPalavra = document.getElementById("divPalavraSecreta").textContent;
    console.log(novaPalavra);

    for (let i = 0; i < novaPalavraSecreta.length; i++){
        if (novaPalavraSecreta[i] == teclaPressionada) {
            novaPalavra = novaPalavra.substring(0, 2 * i) + teclaPressionada + novaPalavra.substring(2 * i + 1);
        }
    }
    
    document.getElementById("divPalavraSecreta").textContent = novaPalavra;
    coloreBotaoAcerto(eventDoClique);
    piscaTelaVerde();
    if(!novaPalavra.includes("— ")){setTimeout(()=> {exibirNotificacaoGanhou()}, 600)}
}

function coloreBotaoAcerto(eventDoClique){
    eventDoClique.target.classList.add('btn-acerto');
}

function piscaTelaVerde(){
    setTimeout(()=>{document.body.style.backgroundColor = "rgba(62, 255, 62, 0.500)"},1);
    setTimeout(()=>{document.body.style.backgroundColor = "grey"},200);
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
    notificacao.querySelector("p").textContent= `A palavra era: ${palavra}. Você errou.`;
    overlay.style.display = 'block';
    notificacao.style.display = 'block';
}

const reiniciarJogoBotao = document.querySelectorAll(".reiniciarJogo");
for (let i = 0; i < reiniciarJogoBotao.length; i++) {
    reiniciarJogoBotao[i].addEventListener("click", function() {
    location.reload();
    });
}
