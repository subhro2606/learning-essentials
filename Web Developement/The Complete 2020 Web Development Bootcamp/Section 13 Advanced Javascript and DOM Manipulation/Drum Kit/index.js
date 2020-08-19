/*Select all the buttons*/
buttons = document.querySelectorAll(".drum");

/*Play audio based on the character*/
function playAudio(btnChar){
  switch (btnChar) {
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}


/*Used arrow function & forEach*/
//buttons.forEach(button => button.addEventListener("click", () => alert("I got clicked()")));

/*Use for anonymous function and for Each*/
/*Event listner for buttons, Detecting Button Press*/
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var btnChar = this.innerHTML;
    playAudio(btnChar);
    //this.classList.toggle("changeTextColorToWhite");
    buttonAnimation(btnChar);
  });
});

/*Event listner for keys, here we add the event listener to the entire document, detecting key press*/
document.addEventListener("keydown",function(event){
  playAudio(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(()=>activeButton.classList.remove("pressed"), 100);
}

























/*Higher order function demo*/

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
