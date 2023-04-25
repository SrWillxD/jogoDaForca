const palavras = {
    Profissões: [    "APICULTOR",    "AUDITOR",    "BARTENDER",    "CERIMONIALISTA",    "CHEF",    "COACH",    "DESEMBARGADOR",    "DESPACHANTE",    "ENDOCRINOLOGISTA",    "EMBAIXADOR",    "HEADHUNTER",    "JUIZ",    "PIZZAIOLO",    "PERITO",    "QUIROPRATA",    "ROTEIRIZADOR",    "SILVICULTOR",    "TRADER"],
    Animais: [  'ALBATROZ',  'ALPACA',  'ANCHOVA',  'BACALHAU',  'BADEJO',  'BARRACUDA',  'BELUGA',  'CHINCHILA',  'CRACA',  'ESCARAVELHO',  'GERBO',  'GNU',  'GRALHA',  'HAMSTER',  'LHAMA',  'LINCE',  'MARRECO',  'MELRO',  'OCAPI',  'PELICANO',  'PERCEVEJO',  'PIRILAMPO',  'QUATI',  'ROUXINOL',  'SANGUESSUGA',  'SURUCUCU',  'TAPIR',  'TEXUGO'],
    Objetos: [  "AMPULHETA",  "ANZOL",  "ALMOFARIZ",  "BOTIJA",  "CANDELABRO",  "DEDALEIRA",  "DESFIBRILADOR",  "ECHARPE",  "ESTRIBO",  "FAGOTE",  "FANTOCHE",  "FREEZER",  "NAVALHA",  "JALECO",  "MODEM",  "NEBULIZADOR",  "NOVELO",  "QUEPE",  "SELIM",  "SINTETIZADOR",  "SPRAY",  "URINOL",  "VUVUZELA",  "WEBCAM",  "XADREZ",  "XILOFONE"],
    Frutas: ["ALFARROBA", "BERGAMOTA", "CIRIGUELA", "CRANBERRY", "FEIJOA", "GROSELHA", "IMBU", "JENIPAPO", "KIWI", "LICHIA", "MEXERICA", "NECTARINA", "PEQUI", "PISTACHE", "POMELO", "SAGUARAJI"],
    Vulcões: ["PNEUMOULTRAMICROSCOPICOSSILICOVULCANOCONIOTICO", "LAVA", "QUENTE", "CINZA", "ROCHA", "CALOR", "DERRETIMENTO"], 
    Cozinha: ["PANELAS", "COLHER", "RALADOR", "FRITADEIRA", "ELETRODOMESTICOS", "DEPURADOR", "CHAIRA", "TALHER"], 

}

init();

function init(){
    //* Seleciona uma categoria e uma palavra
    const valoresDasChavesDoObjeto = Object.keys(palavras);
    const grupo = valoresDasChavesDoObjeto[Math.floor(Math.random() * valoresDasChavesDoObjeto.length)];
    const palavra = palavras[grupo][Math.floor(Math.random() * palavras[grupo].length)];

    //* Pega a categoria escolhida e usa como dica no HTML 
    document.getElementById("pDaDivDica").textContent = `A dica da palavra é: ${grupo}`;

    //* Coloca a quantidade de underscores referente a quantidade de letras 
    const underscore = palavra.replace(/\S/g, "___ ");
    document.getElementById("divPalavraSecreta").textContent = underscore;


}

function clicado(){
    
}
