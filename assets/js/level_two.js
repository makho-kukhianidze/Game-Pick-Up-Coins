// Variable block - Start.
var point = document.getElementById('point'); // Button point.
var coins = document.getElementById('coins'); // Cents.
var iPickUpCents = 0;
var levelTwoBtn = document.getElementById('levelTwoBtn'); // Button - Congratulation! Level 2!
var levelThreeBtn = document.getElementById('levelThreeBtn'); // Button - Congratulation! Level 3!
var milliseconds = 950; // 850 milliseconds.
var interval = setInterval(startTimer, milliseconds); // Timer 850 milliseconds.
var GameOverBtn = document.getElementById('GameOverBtn'); // Button - Game over! Try again!
var timer = document.getElementById('timer'); // Timer.
var time = 60; // Time.
var backgroundMusic = new Audio(); // Game music.
backgroundMusic.src="../music_backgound/music.mp3";
var clickSound = new Audio(); // Coins sound.
clickSound.src="../music_backgound/coin.wav";
// Variable block - End.

// Event block - Start.
point.addEventListener('click', function () {
  iPickUpCents += 5; // Regular coins (5 cents).
  coins.textContent = "Coins:" + " " + iPickUpCents + " / 650 cents";

  var x = Math.floor(Math.random() * 230); // Random number X.
  var y = Math.floor(Math.random() * 300); // Random number Y.
  var ranWidHei = Math.floor(Math.random() * 180); // Random size for width , height.
  var randomColor = Math.floor(Math.random() * 16777215).toString(16); // Random color.

  point.style.width = ranWidHei + 'px'; // Button cents - random width.
  point.style.height = ranWidHei + 'px'; // Button cents - random height.
  point.style.backgroundColor = "#" + randomColor; // Button cents - random  background color.
  point.style.marginLeft = x + 'px'; // Button cents - random number for margin-left.
  point.style.marginTop = y + 'px'; // Button cents - random number for margin-top.
  point.style.border = "1px dotted red"; // Button cents - dotted border for button.
  point.style.animation = "mymove 5s infinite;" // Button cents - animation for button.
  point.innerHTML = iPickUpCents; // Button cents - button's cents number.

  // If Button size is less than 50px , It will become 100px - Start. 
  if (ranWidHei < 50) {
    ranWidHei = 100;
    point.style.width = ranWidHei + 'px'; // Button cents - random width.
    point.style.height = ranWidHei + 'px'; // Button cents - random height.
  }
  // If Button size is less than 50px , It will become 100px - End. 

  // Coins rank - Start.
  // Regular coins (5 cents) - Start.
  if (ranWidHei <= 149) {
    point.style.color = "white";
  }
  // Regular coins (5 cents) - End.

  // Silver coins (10 cents) - Start.
  if (ranWidHei >= 120 && ranWidHei <= 160) {
    iPickUpCents += 10;
    point.style.backgroundColor = "#a9a9a9";
    point.innerHTML = iPickUpCents + "<br>" + "Silver coins +10";
    point.style.color = "rgb(255 255 255)";
    point.style.border = "dotted rgb(86 76 76)";
  }
  // Silver coins (10 cents) - End.

  // Golden coins  (20 cents) - Start.
  if (ranWidHei >= 161) {
    iPickUpCents += 20;
    point.style.backgroundColor = "#F1F336";
    point.innerHTML = iPickUpCents + "<br>" + "Bonus" + "<br>" + "Golden coins +20";
    point.style.color = "#232daf";
    point.style.border = "dotted #232daf";
  }
})
// Golden coins  (20 cents) - End.
// Coins rank - End.
// Event block - End.

// Function game is started - Start.
function startTimer() {
  time--;
  timer.textContent = "Timer:" + " " + time;
  if (iPickUpCents > 650) { // if you pick up over 650 cents - you won.
    youWon(); // Function youWon.
  }
  if (time < 1 && iPickUpCents < 649) { // if you pick up Less than 650 cents - game over.
    gameOver(); // Function gameOver.
  }
}
// Function game is started - End.

// Function you won - Start.
function youWon() {
  levelThreeBtn.style.display = "block";
  clearInterval(interval);
  document.getElementById("point").disabled = true;
  Swal.fire(
    'Well done! You won!',
    'Your coins:' + ' ' + iPickUpCents + ' / 650 Cents',
    'success'
  );
}
// Function you won - End.

// Function game over - Start.
function gameOver() {
  GameOverBtn.style.display = "block";
  clearInterval(interval);
  document.getElementById("point").disabled = true;
  Swal.fire(
    "Game over! Don't worry!",
    'Your coins:' + ' ' + iPickUpCents + ' / 650 Cents',
    'error'
  );
}
// Function game over - End.

// Function game paused - Start.
function gamePaused() {
  alert('Game Paused!');
}
// Function game paused - End.

// Function game restart - Start.
function restart() {
  location.reload(); // Refresh.
}
// Function game restart - End.

// Function time is over - Start.
function timeIsOver() {
  clearInterval(interval);
}
// Function time is over - End.

// Coins click - music and click sound start - Start.
document.body.addEventListener('click', function(){
  clickSound.play();
  backgroundMusic.play();
})
// Coins click - music and click sound start - End.

