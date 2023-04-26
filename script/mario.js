function play(){
    document.querySelector('.logo').style.display = 'none'
    document.querySelector('.play').style.display = 'none'
    document.querySelector('.fireball').style.display = 'flex'
    document.querySelector('.player').style.opacity = '1'
    document.querySelector('.cannon').style.opacity = '1'
    document.querySelector('.clouds').style.display = 'flex'

   

    const mario = document.querySelector('.player');
    const fire = document.querySelector('.fireball');
    const cloud = document.querySelector('#nuvem')

    const jump = () => {
        mario.classList.add('jump');
        

        setTimeout(() => { 

            mario.classList.remove('jump');

        },550);
    }

    const loop = setInterval(() => {

        const firePositinon = fire.offsetLeft;
        const playerPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        
        if(firePositinon <= 100 && playerPosition < 430){

            fire.style.animation = 'none';
            fire.style.left = `${firePositinon}px`
            mario.style.animation = 'none';
            document.querySelector('.died').style.display = 'block'

           
        }



    } ,10);

    document.addEventListener('keydown', jump);
}



