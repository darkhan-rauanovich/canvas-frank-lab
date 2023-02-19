const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

const mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

window.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;

  for (let i = 0; i < 10; i++) {
    particlesArray.push(new Particle());
  }
})

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;


  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle());
  }}
)


class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;

    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    const particle = particlesArray[i];
    particle.update();
    particle.draw();

    if (particle.size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();