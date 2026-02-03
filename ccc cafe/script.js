let scale = 1;

document.querySelectorAll(".menu img").forEach(img => {
  img.addEventListener("dblclick", () => {
    scale = scale === 1 ? 2 : 1;
    img.style.transform = `scale(${scale})`;
    img.style.transformOrigin = "center";
  });
});
