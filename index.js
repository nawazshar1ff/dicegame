const dicebtn=document.getElementById('dice-btn');

function dicegame(){
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNum1 +".png";

var randomDiceImage2 = "dice" + randomNum2 +".png";

var randomImagesource =  randomDiceImage1;

var randomImagesource2 = randomDiceImage2;

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomImagesource);

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomImagesource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML ="🏆Player 1 Wins"
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆"
}
else if(randomNum1 == randomNum2){
    document.querySelector("h1  ").innerHTML = "🏆Draw🏆" 
}
 
dicebtn.innerHTML="PLAY AGAIN"
}
