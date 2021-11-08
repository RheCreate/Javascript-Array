document.querySelector("button").addEventListener("click", () => {
    document.body.style.background = 
      `url(https://picsum.photos/400/400?random=${Math.random()})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition="center";
  });