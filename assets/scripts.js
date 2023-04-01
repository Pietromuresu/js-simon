

const limit = 5;
const inputContainer = document.querySelector('.inputContainer');
const arrContainer = document.querySelector('.arrContainer');
const containerGame = document.querySelector('.containerGame');
const containerStart = document.querySelector('.containerStart');
const containerResults = document.querySelector('.containerResults');
const results = document.querySelector('.results');
const mineNumbers = document.getElementById('mineNumbers');
const userNumbers = document.getElementById('userNumbers');
const invia = document.getElementById('invia');
const letsStart = document.querySelector('.letStart');
const retry = document.querySelector('.retry');
const score = document.querySelector('.score');
// arrays
let arrRandomNum = [];
let arrUserNum = [];
let arrWrongNum = [];

// inputs
let inputs1  = document.querySelector('.inputs1');
let inputs2  = document.querySelector('.inputs2');
let inputs3  = document.querySelector('.inputs3');
let inputs4  = document.querySelector('.inputs4');
let inputs5  = document.querySelector('.inputs5');
let points = [0];


letsStart.addEventListener('click', function(){
  containerStart.classList.add('hide');
  containerGame.classList.remove('hide');
randomNumbers( 9, 0)



for(let i = 0; i < arrRandomNum.length; i++){
  mineNumbers.innerHTML  += ' ' + arrRandomNum[i];
}

  setTimeout(function(){
  inputContainer.classList.remove('hide');
  arrContainer.classList.add('hide');
}, 5000);

score.innerHTML = `
Points: ${points}
`;

})







// evento 'click' al bottone invia 
invia.addEventListener('click', function(){
  // salvo i numeri dell'utente in un array
  arrUserNum.push(parseInt(inputs1.value));
  arrUserNum.push(parseInt(inputs2.value));
  arrUserNum.push(parseInt(inputs3.value));
  arrUserNum.push(parseInt(inputs4.value));
  arrUserNum.push(parseInt(inputs5.value));
  
  for(let i = 0; i < arrUserNum.length; i++){
    userNumbers.innerHTML  += ' ' + arrUserNum[i];
  }
  
  inputContainer.classList.add('hide');
  arrContainer.classList.remove('hide');
  containerResults.classList.remove('hide');

  // Salvo i numeri giusti in un array e controllo che i numeri non siano doppi in quel caso li pusho solo una volta
  
  if (arrRandomNum.includes(parseInt(inputs1.value)) && (!arrWrongNum.includes(inputs1.value))){
    arrWrongNum.push(inputs1.value);
  }
  if(arrRandomNum.includes(parseInt(inputs2.value))  && (!arrWrongNum.includes(inputs2.value))){
    arrWrongNum.push(inputs2.value);
  }
  if(arrRandomNum.includes(parseInt(inputs3.value)) && (!arrWrongNum.includes(inputs3.value))){
    arrWrongNum.push(inputs3.value);
  } 
  if(arrRandomNum.includes(parseInt(inputs4.value)) && (!arrWrongNum.includes(inputs4.value))){
    arrWrongNum.push(inputs4.value);
  } 
  if(arrRandomNum.includes(parseInt(inputs5.value)) && (!arrWrongNum.includes(inputs5.value))){
    arrWrongNum.push(inputs5.value);
  } 



  // imposto la vittoria o la sconfitta
  // se hai inserito i numeri corretti in ordine corretto hai vinto
  // se hai sbagliato dei numeri hai perso e vengono mostrati solo quelli giusti 

  if(JSON.stringify(arrRandomNum) === JSON.stringify(arrUserNum)){
    results.innerHTML  = `
    Hai indovinato tutti i numeri!
    `
    results.classList.add('win')
    points++;

 score.innerHTML = `
  Points: ${points}
 `
  }else {
    results.innerHTML  = `
    Hai indovinato solo ${arrWrongNum.length} numeri.<br>
    Corrispondono solo ${arrWrongNum} .
    `
    results.classList.add('lose');
  points = [0];
  score.innerHTML = `
  Points: ${points}
  `
  }

  // se hai inserito i numeri corretti ma in ordine sbagliato viene mostrato l'ordine corretto e hai perso 
  if (arrWrongNum.length === 5 && JSON.stringify(arrRandomNum) !== JSON.stringify(arrUserNum)){
    results.innerHTML  = `
    Hai sbagliato l'ordine dei numeri.<br>
    l'ordine giusto era ${arrRandomNum} .
    `
    results.classList.add('lose');
  
    points = [0];
    score.innerHTML = `
    Points: ${points}
 `
  }

})


retry.addEventListener('click', function(){
  inputs1.value = "";
  inputs2.value = "";
  inputs3.value = "";
  inputs4.value = "";
  inputs5.value = "";
  arrUserNum = [];
  arrWrongNum = [];
  arrRandomNum =[];
  mineNumbers.innerHTML = '';
  userNumbers.innerHTML = ''
  arrContainer.classList.remove('hide');
  containerStart.classList.remove('hide');
  containerGame.classList.add('hide');
  containerResults.classList.add('hide');
  results.classList.remove('win');
  results.classList.remove('lose');
})




// Functions

function randomNumbers(max, min){
  while (arrRandomNum.length < limit){
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    if (!arrRandomNum.includes(randomNum)){
      arrRandomNum.push (randomNum);
    }
  }
  return arrRandomNum
}

