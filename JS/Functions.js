
document.querySelector("button").addEventListener("click", () => {
  document.body.style.background = 
    `url(https://picsum.photos/1000/1000?random=${Math.random()})`;
    document.body.style.backgroundRepeat = "no-repeat";
});


