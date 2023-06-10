let addButton = document.getElementById("add-button");
let autoClickerButton = document.getElementById("autoClickerBuy")
let numcount = document.getElementById("count-id");
let acCount = document.getElementById("numOfAc");
let startAc = document.getElementById("startAutoClick");
let stopAc = document.getElementById("stopAutoClick");
let d100 = document.getElementById("add100");
let donutCount = 0;
let autoClickCount = 0;
let acPrice = 100;

// function add100(){
//     donutCount = donutCount + 100;
//     numcount.innerText = donutCount
//     gameState();
//     }

function addDonut(){
++donutCount;
numcount.innerText = Math.ceil(donutCount)/2;
gameState();

}


// Checks game state 

function gameState(){
    if (donutCount >= acPrice){
    autoClickerButton.disabled = false;
    }
    else{
    autoClickerButton.disabled = true;
}
 if (autoClickCount > 0){
    startAc.disabled = false;
    stopAc.disabled = false;
 } else {  startAc.disabled = true;
            stopAc.disabled = true;
 }

 }


function buyAutoClick(){
    ++autoClickCount;
    acCount.innerHTML = autoClickCount;
    boughtAutoClick();
    gameState();
}

function boughtAutoClick(){

    donutCount = donutCount - acPrice;
    numcount.innerText = donutCount;
    acPrice = acPrice + (acPrice * .10);
}
function startAutoClicking() {
  addButton.click();
//   stopAc.disabled = false;
//   startAc.disabled = true;
  }

  function stopAutoClicking(){

    const intervalId = setInterval(startAutoClicking, autoClickSpeed());

     clearTimeout(intervalId);
    //  intervalId = null
}


 function autoClickSpeed() {
   let autoClickSpeed = 1000 / autoClickCount;
    return autoClickSpeed 
   
 }



///rotate dount when add donut is clicked


const rotateObj = document.querySelector('.rotate-obj');
const rotateBtn = document.querySelector('.rotateBtn')

let rotateDeg = 0;
rotateBtn.addEventListener('click', () => {
    rotateDeg = rotateDeg + 15
        rotateObj.style.transform = 'rotate('+rotateDeg+'deg)';
    addDonut();

});



// popup nav function
let popup = document.getElementById('popup');

function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}

