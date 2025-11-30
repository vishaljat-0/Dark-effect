let main = document.querySelector("main");
let x = 0;
let y = 0;
let targetSize = 100;
let currentSize = 100;

main.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;

  targetSize = Math.floor(Math.random() * 255);
});

function animate() {
  // smooth spotlight position
  let currentX = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--x")
  );
  let currentY = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--y")
  );

  let newX = currentX + (x - currentX) * 0.1;
  let newY = currentY + (y - currentY) * 0.1;

  document.documentElement.style.setProperty("--x", newX + "px");
  document.documentElement.style.setProperty("--y", newY + "px");

  // smooth random size change
  currentSize = currentSize + (targetSize - currentSize) * 0.05; 
  document.documentElement.style.setProperty("--shape", currentSize + "px");

  requestAnimationFrame(animate);
}

animate();
