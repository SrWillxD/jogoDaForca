//* Palavras a serem adivinhadas.
const palavras = {
    Vulcões: ["PNEUMOULTRAMICROSCOPICOSSILICOVULCANOCONIOTICO", "LAVA", "QUENTE", "CINZA", "ROCHA", "CALOR", "DERRETIMENTO"], 
    Cozinha: ["PANELAS", "COLHER", "RALADOR", "FRITADEIRA", "ELETRODOMESTICOS", "DEPURADOR", "CHAIRA", "TALHER"], 

}

//* Inicializando a variavel palavra fora pois preciso q ela esteja em com o escopo global;
let palavra="";

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
    const underscore = palavra.replace(/\S/g, "— ");
    console.log(underscore);
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
    verificaCertoErrado(teclaPressionada, palavra);
    }
});



function verificaCertoErrado(teclaPressionada, palavra){
    //TODO verificar se a palavra contem a tecla q foi clicada
    if(palavra.includes(teclaPressionada)){
        acertou(teclaPressionada, palavra);
    }else{
        errou();
    }
    //TODO Se a palavra conter a letra, chamar a função acertou()

    //TODO Se não tiver, chamar a função errou()
}

function acertou(){
    //TODO Substituit os tracinhos pela letra em todas as ocorrencias da palavra
    console.log("Boa");
}

function errou(){
    console.log("Não existe esta letra na palavra");

}