//Initialise a random background image 

var id;
setBackgroundImage();

var storageArray = [];

//set up events

document.querySelector("#change-background-button").addEventListener("click",() => {setBackgroundImage();});

document.querySelector("#save-background-button").addEventListener("click",() => 
{storageArray.push({ emailAddress:document.querySelector("#user-email").value, id: id });setBackgroundImage();});

document.querySelector("#show-linked-emails").addEventListener("click",() => { var listElement = document.querySelector("#email-list")
listElement.innerHTML = ""; for(let i = 0; i < storageArray.length; i++) { var li = document.createElement("li"); li.style.listStyle = "none";
var img = document.createElement("img"); img.src = "https://picsum.photos/id/" + storageArray[i].id + "/400/400";
img.style.width = "100px";
img.style.height = "100px";
li.appendChild(img);
var p = document.createElement("p");
p.innerHTML = storageArray[i].emailAddress;
li.appendChild(p);
listElement.appendChild(li)}});

//Styling image

function setBackgroundImage() {
    id = Math.floor(Math.random()*1000);
    document.body.style.background = 'url(https://picsum.photos/id/' + id + '/400/400)';
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
  
  
//To validate email

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}







