

const limit = 5;
const inputContainer = document.querySelector('.inputContainer');
const arrContainer = document.querySelector('.arrContainer');

const mineNumbers = document.getElementById('mineNumbers');
const userNumbers = document.getElementById('userNumbers');
const invia = document.getElementById('invia');

// arrays
const arrRandomNum = [];
const arrUserNum = [];

// inputs
const inputs1  = document.querySelector('.inputs1');
const inputs2  = document.querySelector('.inputs2');
const inputs3  = document.querySelector('.inputs3');
const inputs4  = document.querySelector('.inputs4');
const inputs5  = document.querySelector('.inputs5');




setTimeout(function(){
  inputContainer.classList.remove('hide');
  arrContainer.classList.add('hide');
}, 5000);

randomNumbers( 9, 0)

mineNumbers.innerHTML = arrRandomNum;
console.log(arrRandomNum);


invia.addEventListener('click', function(){
  arrUserNum.push(inputs1.value);
  arrUserNum.push(inputs2.value);
  arrUserNum.push(inputs3.value);
  arrUserNum.push(inputs4.value);
  arrUserNum.push(inputs5.value);
  userNumbers.innerHTML = arrUserNum;
  
  inputContainer.classList.add('hide');
  arrContainer.classList.remove('hide');
  
})



// Functions

function randomNumbers(max, min){
  while (arrRandomNum.length < limit){
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    if (!arrRandomNum.includes(randomNum)){
      arrRandomNum.push(randomNum);
    }
  }
  return arrRandomNum
}

