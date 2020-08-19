function rollDice() {
    return Math.floor(Math.random()*6)+1;
}
function play(){
  p1=rollDice();
  p2=rollDice();
  document.querySelector(".img1").setAttribute("src","images/dice"+p1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+p2+".png");
  if(p2>p1){
    document.querySelector("h1").textContent="Player 2 wins 🚩";
  }else if(p1>p2){
    document.querySelector("h1").textContent="🚩 Player 1 wins";
  }else{
    document.querySelector("h1").textContent="Draw";
  }
}
play();
