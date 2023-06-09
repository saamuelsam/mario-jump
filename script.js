const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}



const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPostion = window.getComputedStyle(mario).bottom.replace('px', '');

   
    if(pipePosition <= 120 && pipePosition > 0 && marioPostion < 100) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPostion}px`

        mario.src = 'images/gameOver.webp';
        mario.style.width = '120px'
        mario.style.marginLeft = '10px'

        clouds.style.animationPlayState = 'paused'; /* clouds paused */


        clearInterval(loop);
    }
},10);




document.addEventListener('keydown', jump);

