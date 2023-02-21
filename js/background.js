const body = document.querySelector("body");

const IMG_NUMBER = 9;

function genRandom() {
  return Math.ceil(Math.random() * IMG_NUMBER);
}

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `img/${imgNumber}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
