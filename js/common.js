window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const body = document.querySelector('body');
    const title = document.querySelector('h1');

    btn.addEventListener('click', (e)=> changeHex(e));

    function getRandomHexColor() {
        return '#'+ Math.floor(Math.random() * 2 **24 ).toString(16).padStart(0,6);
    }

    function changeHex(e) {
        if(e)
            clearInterval(interval);

        let color = getRandomHexColor();
        title.querySelector('strong').innerHTML = color;
        body.style.backgroundColor = color;
    }

    const interval  = setInterval(() => {changeHex()}, 1000)
});