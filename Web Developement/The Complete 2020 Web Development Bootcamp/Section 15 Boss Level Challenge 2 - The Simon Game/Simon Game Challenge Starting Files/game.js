buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

var started = false;
var level = 0;


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
}


$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    console.log("success")
    if(gamePattern.length==userClickedPattern.length){
      setTimeout(nextSequence, 1000);
    }
  }else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 100);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("currentColour").addClass("pressed");
  setTimeout(() => $("currentColour").removeClass("pressed"), 100);
}

$(".btn").click(function(event) {
  // console.log(event.currentTarget.id);
  // userChoosenColor=event.currentTarget.id;
  console.log($(this).attr("id"));
  userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  animatePress(userChoosenColor);
  playSound(userChoosenColor);
  checkAnswer(userClickedPattern.length-1);
});
