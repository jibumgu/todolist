const canvas = document.querySelector(".bgrain");

const ctx = canvas.getContext("2d"); // 우리가 그리게될 도구다.
const dpr = window.devicePixelRatio;

const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";

canvas.width = canvasWidth * dpr;
canvas.height = canvasHeight * dpr;
ctx.scale(dpr, dpr);

class Particle {
  constructor(x, y, radius, vy, rain) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vy = vy;
    this.acc = 1.03;
    this.rain = rain;
  }
  update() {
    this.vy *= this.acc;
    this.y += this.vy;
  }
  draw() {
    ctx.beginPath();
    // ctx.arc(this.x, this.y, 100, 0, (Math.PI / 180) * 360);
    ctx.fillRect(this.x, this.y, 2, this.rain);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

const TOTAL = 100;
const randomNumBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

let particles = [];

for (let i = 0; i < TOTAL; i++) {
  const x = randomNumBetween(0, canvasWidth);
  const y = randomNumBetween(0, canvasHeight);
  const radius = randomNumBetween(1, 10);
  const vy = randomNumBetween(1, 1.5);
  const rain = randomNumBetween(20, 80);
  const particle = new Particle(x, y, radius, vy, rain);
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

    if (particle.y - particle.radius > canvasHeight) {
      particle.y = -particle.radius;
      particle.x = randomNumBetween(0, canvasWidth);
      particle.radius = randomNumBetween(1, 10);
      particle.vy = randomNumBetween(1, 1.5);
    }
  });

  then = now - (delta % interval);
}

animate();
