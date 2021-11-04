
document.querySelector("button").addEventListener("click", () => {
  document.body.style.background = 
    `url(https://picsum.photos/500/500?random=${Math.random()})`;
    document.body.style.backgroundRepeat = "no-repeat";
});


