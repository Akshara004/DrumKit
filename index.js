var sounds=["./sounds/tom-1.mp3" , "./sounds/tom-2.mp3" , "./sounds/tom-3.mp3" ,
             "./sounds/tom-4.mp3" , "./sounds/crash.mp3" , "./sounds/kick-bass.mp3" , "./sounds/snare.mp3"
]
for(let i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", ()=>{
      //  this.style.color="white";
    var audio =new Audio(sounds[i]);
    audio.play();
    var buttonInnerHTML=document.querySelectorAll("button")[i].innerHTML;
    doAnimation(buttonInnerHTML);

});
}

document.addEventListener("keydown",(event)=>{
  makeSound(event.key);
  doAnimation(event.key);
})

function doAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(()=>{
      document.querySelector("."+key).classList.remove("pressed");
    },100);
}

function makeSound(key){
  switch(key){
    case 'w':
      var audio =new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
  
    case 'a':
      var audio =new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
  
    case 's':
      var audio =new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
  
    case 'd':
      var audio =new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  
    case 'j':
      var audio =new Audio("./sounds/crash.mp3");
      audio.play();
      break;
  
    case 'k':
      var audio =new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  
    case 'l':
      var audio =new Audio("./sounds/snare.mp3");
      audio.play();
      break;
          
  }
}
