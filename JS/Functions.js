//To bring up a random image on button click 'new image' and to assign it a number

document.querySelector("button").addEventListener("click", () => {
  document.body.style.background = 
    `url(https://picsum.photos/${ImageId()}400/400?random)`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition="center";
});

ImageId = Math.floor(Math.random() * maxNo);

// Email form

function FormPopup() {
  document.getElementById('FormContainer').style.display = "block";
  }
  
//To validate email

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Using cookies to store email address to image





