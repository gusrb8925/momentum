const body = document.querySelector("body");

const IMG_NUM = 4;

function paintImage(imgNum){
    const img = new Image();
    img.src = `img/${imgNum+1}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();