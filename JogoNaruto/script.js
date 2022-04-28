const naruto = document.querySelector('.naruto');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if (event.keyCode === 32){
        if (!isJumping) {
            jump();
        } 
    }
}

function jump() {
   
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if(position <=0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    naruto.style.bottom = position + 'px';
                }
            },20);
        }else{
        //subindo naruto
        position += 20;
        naruto.style.bottom = position + 'px';
        }
    },20);
}


function createninja(){
    const ninja = document.createElement('div');
    let ninjaPosition = 1000;
    let randomTime = Math.random() * 6000;
      


    ninja.classList.add('ninja');
    ninja.style.left = ninjaPosition + 'px';
    background.appendChild(ninja);
    

    let leftInterval = setInterval (() => {
          
        if (ninjaPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(ninja);
        }else if (ninjaPosition > 0 && ninjaPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over">GAME OVER</h1>';
        } else{
            ninjaPosition -= 10;
            ninja.style.left = ninjaPosition + 'px';
        }

    },20);

    setTimeout(createninja, randomTime);
}

createninja();
document.addEventListener('keyup',handleKeyUp);