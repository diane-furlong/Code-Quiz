//define the variables:
//buttons
var startBtn = document.getElementById("start"); //start button
//screens
var startScreen = document.getElementById("start-screen"); //start screen div
var qScreen = document.getElementById("questions"); //questions div
var endScreen = document.getElementById("end-screen"); //end screen div
//timer variables
var countDisplay = document.getElementById("time"); //time element on the timer
var secondsLeft = 5; //sets the start time
//booleans
var qWrong = false; //variable for wrong answer


//calling the startQuiz and timer functions on click of the start button
startBtn.addEventListener("click", startQuiz);

//create function to start the quiz
function startQuiz(){
    setTime();
    startScreen.style.display = "none"; //hide startScreen
    qScreen.style.display = "block"; //show qScreen
}

//create functionality of the timer
function setTime(){
    var timeLeft = setInterval(function(){
    countDisplay.textContent = secondsLeft;
    secondsLeft--;
    
        if(secondsLeft === -1) {
            clearInterval(timeLeft);
            endQuiz();
        }
    }, 1000)
}

//create function to end the quiz when the time runs out
function endQuiz(){
    qScreen.style.display = "none"; //hide the quesiton screen
    endScreen.style.display = "block"; //show the end screen
}