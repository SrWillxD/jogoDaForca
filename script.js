import {wordObject} from './wordObject.js';

let wordToBeGuessed="";

const divSecretWord = document.getElementById("divSecretWord");

function startTheGame(){ 
    const wordGroup = defineWordGroup();
    tipOfWord(wordGroup);
    wordToBeGuessed = defineGroupWord(wordGroup);
    console.log(wordToBeGuessed);//!Remover
    dashesThatHideTheWord(wordToBeGuessed);
}

startTheGame();

function defineWordGroup(){ 
    const group = Object.keys(wordObject)[Math.floor(Math.random() * Object.keys(wordObject).length)];
    return group;
}

function tipOfWord(wordGroup){
    const pFromDivTip = document.getElementById("pFromDivTip");
    pFromDivTip.textContent = `A dica da palavra é: ${wordGroup}`;
}

function defineGroupWord(group){
    const wordToBeGuessed = wordObject[group][Math.floor(Math.random() * wordObject[group].length)];
    return wordToBeGuessed;
}


function dashesThatHideTheWord(wordToBeGuessed){
    const dashesThatHideTheWord = wordToBeGuessed.replace(/\S/g, "— ");
    divSecretWord.textContent = dashesThatHideTheWord;
}

let keyPressedValue = '';

const divKeyboard = document.getElementById('divKeyboard');

divKeyboard.addEventListener('click', (event)=>{
    keyPressedValue = event.target.value;
    let clickEvent = event;
    checkIfContainsLetter(clickEvent);
});

function checkIfContainsLetter(clickEvent){
    if(wordToBeGuessed.includes(keyPressedValue)){
        contains(clickEvent);
    }else{
        notContains(clickEvent);
    }
}

function contains(clickEvent){
    let wordUpdatedEveryKeystroke = UpdatesTheWordWithEveryKeystroke();

    colorTheButtonGreen(clickEvent);
    flashGreenScreen();
    checkIfWon(wordUpdatedEveryKeystroke);
}

function UpdatesTheWordWithEveryKeystroke(){
    let wordUpdatedEveryKeystroke = divSecretWord.textContent;

    for (let i = 0; i < wordToBeGuessed.length; i++){
        if(wordToBeGuessed[i] == keyPressedValue) {
            wordUpdatedEveryKeystroke = wordUpdatedEveryKeystroke.substring(0, 2 * i) + keyPressedValue + wordUpdatedEveryKeystroke.substring(2 * i + 1);
        }
    }

    divSecretWord.textContent = wordUpdatedEveryKeystroke;
    return wordUpdatedEveryKeystroke;
}

function colorTheButtonGreen(clickEvent){
    clickEvent.target.classList.add('rightButton');
}

function flashGreenScreen(){
    document.body.style.backgroundColor = "rgba(62, 255, 62, 0.500)";
    setTimeout(()=>{document.body.style.backgroundColor = "grey"},200);
}

let overlay = document.querySelector('.overlay');
let notification = document.querySelector('.notification');

function checkIfWon(wordUpdatedEveryKeystroke){
    if(!wordUpdatedEveryKeystroke.includes("—")){
        setTimeout(()=> {displayNotificationWon()}, 600);
    }
    
}

function displayNotificationWon(){
    overlay.style.display = 'block';
    notification.style.display = 'block';
}

let gallowsNumber=0;
function notContains(clickEvent){
    if(gallowsNumber<6){
        gallowsNumber++
    }
    
    updateGallowsPhoto();
    colorTheButtonRed(clickEvent);
    flashScreenRed();
    checkIfLost();
}

function updateGallowsPhoto(){
    let divImg = document.getElementById('gallowsImg');
    divImg.src = `./assets/img/imgsForca/forca${gallowsNumber}.png`;
}

function colorTheButtonRed(clickEvent){
    clickEvent.target.classList.add('wrongButton');
}

function flashScreenRed(){
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.300)";
    setTimeout(()=>{document.body.style.backgroundColor = "grey"},200);
}

function checkIfLost(){
    if(gallowsNumber==6){
        setTimeout(()=> {displayNotificationLost()}, 500);
    }
}

function displayNotificationLost(){
    notification.querySelector("p").textContent= `A palavra era: ${wordToBeGuessed}. Você perdeu.`;
    overlay.style.display = 'block';
    notification.style.display = 'block';
}

const resetGameButton = document.querySelector(".restartGame");
resetGameButton.addEventListener("click", ()=>{
    location.reload();
});
