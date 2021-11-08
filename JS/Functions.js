//To bring up a random image on button click 'new image'

document.querySelector("button").addEventListener("click", () => {
  document.body.style.background = 
    `url(https://picsum.photos/400/400?random=${ImageId})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition="center";
});

ImageId = Math.floor(Math.random() * maxNo);

// Email form



//To validate email

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Using cookies to store email address to image





