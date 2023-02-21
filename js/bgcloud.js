const canvas = document.querySelector(".bgcloud");

const button = document.querySelector(".btn2");
button.addEventListener("click", () => {
  if (canvas.style.display === "none") {
    canvas.style.display = "block";
  } else {
    canvas.style.display = "none";
  }
});

const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";

canvas.width = canvasWidth * dpr;
canvas.height = canvasHeight * dpr;
ctx.scale(dpr, dpr);

class Particle {
  constructor(x, y, radius, vy, fontsize) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vy = vy;
    this.acc = 1.03;
    this.fontsize = fontsize;
  }
  update() {
    // this.vy *= this.acc;
    this.x += this.vy;
  }
  draw() {
    ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360); // 파이 / 180 = 1도
    ctx.font = `${this.fontsize}px serif`;
    ctx.fillText("☁️", this.x, this.y);
    ctx.fillStyle = "white";
    // ctx.fill();
    ctx.closePath();
  }
}

const TOTAL = 3;
const randomNumBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

let particles = [];

for (let i = 0; i < TOTAL; i++) {
  const x = randomNumBetween(0, canvasWidth);
  const y = randomNumBetween(0, canvasHeight);
  const radius = randomNumBetween(50, 100);
  const vy = randomNumBetween(0.005, 0.01);
  const fontsize = randomNumBetween(300, 700);
  const particle = new Particle(x, y, radius, vy, fontsize);
  particles.push(particle);
}

let interval = 1000 / 60;
let now, delta;
let then = Date.now();

function animate() {
  window.requestAnimationFrame(animate);
  now = Date.now();
  delta = now - then;

  if (delta < interval) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();

    if (particle.x > canvasWidth) {
      particle.x = -particle.fontsize;
      particle.y = randomNumBetween(0, canvasHeight);
      particle.radius = randomNumBetween(1, 10);
      particle.vy = randomNumBetween(1, 1.5);
    }
  });

  then = now - (delta % interval);
}

animate();
