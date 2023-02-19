const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class App {
  constructor() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.ballSize = 10;

    this.x = Math.round(this.windowWidth / 2);
    this.y = Math.round(this.windowHeight / 2);
    this.speedX = (Math.random() * 1 - 0.5) * 10;
    this.speedY = (Math.random() * 1 - 0.5) * 10;
  }

  updateWindowParams() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  updateWindow() {
    this.updateWindowParams();

    canvas.width = this.windowWidth;
    canvas.height = this.windowHeight;
  }

  clearCanvas() {
    ctx.clearRect(0, 0, this.windowWidth, this.windowHeight);
  }

  drawBall() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.ballSize, 0, Math.PI * 2);
    ctx.fill();
  }

  moveBall() {

    if (this.x >= this.windowWidth || this.x <= 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.y >= this.windowHeight || this.y <= 0) {
      this.speedY = this.speedY * -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  initAnimation() {
    this.clearCanvas();

    this.moveBall();
    this.drawBall();


    requestAnimationFrame(this.initAnimation.bind(this));
  }
}

const app = new App();

window.addEventListener("resize", () => app.updateWindow());
window.addEventListener("load", () => {
  app.updateWindow();
  app.initAnimation();
});

