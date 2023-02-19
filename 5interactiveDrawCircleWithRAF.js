const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

function drawCircle() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle()
  requestAnimationFrame(animate);
}

animate();