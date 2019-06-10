//Create an array of words 
var word = ["foo fighters", "dave matthews band", "animals as leaders", "creed","staind","nirvana","green day","linkin park","fall out boy","system of a down","disturbed","breaking benjamin","between the buried and me","august burns red"]
var rightWord = [];
var wrongWord = [];
var underScore = []; 
var chosenWord;
var remainingGuesses = 5;

function startGame(){
  //Choose word randomly and other vars
var randNum = Math.floor(Math.random() * word.length);
chosenWord = word[randNum];
console.log(chosenWord);


//Create underscores based on legnth of word
for (var i = 0; i < chosenWord.length; i++) {
  if (chosenWord[i] === " ") {
    underScore.push(" ");
  } else {
    underScore.push("_");
  }
}
document.getElementById("underscores").innerHTML = underScore.join(" ");
}
startGame();


//Get users guess 
document.addEventListener("keypress", function (event) {
  var keycode = event.keyCode;
  var keyword = String.fromCharCode(keycode);
  var pos = 0;
  var i = -1;

    //if user's guess is right
    if (chosenWord.indexOf(keyword) > -1) {

    //Replace underscore with right letter
    while (pos != -1) {
      pos = chosenWord.indexOf(keyword, i + 1);
      if (pos >= 0) {
        underScore[chosenWord.indexOf(keyword, i + 1)] = keyword;
        i = pos;
      }
    }
    document.getElementById("underscores").innerHTML = underScore.join(" ");
    // console.log(chosenWord,underScore.join(" "));
     
    
    //if user's answer is right, store in bank
    if (rightWord.indexOf(keyword) > -1) {

    } else {
      rightWord.push(keyword);
      
    }
  document.getElementById("rightGuess").innerHTML = rightWord.join(" ");

  } else {
      if (wrongWord.indexOf(keyword) > -1) {
      } else {
        wrongWord.push(keyword);
        remainingGuesses -= 1;
        console.log(remainingGuesses);
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        if (remainingGuesses === 0) {
        document.getElementById("lossCounter").innerHTML = +document.getElementById("lossCounter").innerHTML +1; 
        chosenWord = "";
        underScore = [];
        rightWord = [];
        wrongWord = [];
        remainingGuesses = 5;
        document.getElementById("rightGuess").innerHTML = "";
        document.getElementById("wrongGuess").innerHTML = "";
        document.getElementById("remainingGuesses").innerHTML = "5";
        startGame();
        }
      }
    document.getElementById("wrongGuess").innerHTML = wrongWord.join(" ");
  }

var finalWord = underScore.join(" ").replace(/ /g, "");
var comparison = chosenWord.replace(/ /g, "");

console.log(finalWord);
console.log(comparison);

//track wins
  if(finalWord === comparison) {
  console.log("You win!")
  var winCounter = document.getElementById("winCounter")
  winCounter.innerHTML = +winCounter.innerHTML + 1;
  chosenWord = "";
  underScore = [];
  rightWord = [];
  wrongWord = [];
  remainingGuesses = 5;
  document.getElementById("rightGuess").innerHTML = "";
  document.getElementById("wrongGuess").innerHTML = "";
  startGame();
}

//track losses (same as track wins)

});


//   limit amount of guesses or "Number of Guesses remaining"
//   while (remainingGuesses > 0) {
//   document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
// }

// When number blanks are filled with all the right letters then you win
// if(rightWord.join(" ") === chosenWord) {
//   alert("You win!");
// } 
  
//track losses 

