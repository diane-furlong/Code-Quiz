//create variables
var questionDiv = document.getElementById("questions");
var startBtn = document.getElementById("start");
var q1Title = document.getElementById("question-title");
var q1Choices = document.getElementById("choices");
var qScreen = document.getElementById("questions"); //questions div
var endScreen = document.getElementById("end-screen"); //end screen div

//create ordered list and list elements for the question choices
var listEl1 = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var listEl2 = document.createElement("ol");
var li5 = document.createElement("li");
var li6 = document.createElement("li");
var li7 = document.createElement("li");
var li8 = document.createElement("li");

var listEl3 = document.createElement("ol");
var li9 = document.createElement("li");
var li10 = document.createElement("li");
var li11 = document.createElement("li");
var li12 = document.createElement("li");

var listEl4 = document.createElement("ol");
var li13 = document.createElement("li");
var li14 = document.createElement("li");
var li15 = document.createElement("li");
var li16 = document.createElement("li");

var listEl5 = document.createElement("ol");
var li17 = document.createElement("li");
var li18 = document.createElement("li");
var li19 = document.createElement("li");
var li20 = document.createElement("li");

//store our li elements in a variable
var listItems = document.getElementById("choices");

//set the text content of relevent elements
li1.textContent= "blue";
li2.textContent= "red";
li3.textContent= "yellow";
li4.textContent= "purple";

li5.textContent= "cat";
li6.textContent= "dog";
li7.textContent= "fish";
li8.textContent= "goat";

li9.textContent= "K";
li10.textContent= "Mn";
li11.textContent= "Li";
li12.textContent= "He";

li13.textContent= "Winter";
li14.textContent= "Summer";
li15.textContent= "Spring";
li16.textContent= "Fall";

li17.textContent= "nintendo";
li18.textContent= "xbox";
li19.textContent= "playstation";
li20.textContent= "pc";



var questions= {
    "Question1": "Which color?",
    "Question2": "Which animal?",
    "Question3": "Which element?",
    "Question4": "Which season?",
    "Question5": "Which system?",
};

//add timer function for reference when decreasing timer on incorrect answer
var countDisplay = document.getElementById("time"); //time element on the timer
var secondsLeft = 35; //sets the start time

function setTime(){
    var timeLeft = setInterval(function(){
        countDisplay.textContent = secondsLeft;
        secondsLeft--;
    
        if(secondsLeft === -1) {
            clearInterval(timeLeft);
            endQuiz();
        }
        if(qWrong = true) {
            secondsLeft-10;
        }
    }, 1000)
}

//correct/incorrect functions & loggers
//question 1:
//next steps if get answer correct
function isCorrect1(){
    qWrong = false;
    console.log(qWrong);
    localStorage.setItem("Question 1", 1);
    askQuestion2();
}

//next steps if get answer incorrect
function isIncorrect1(){
    qWrong = true;
    console.log(qWrong);
    localStorage.setItem("Question 1", 0);
    askQuestion2();
}

//question 2:
function isCorrect2(){
    qWrong = false;
    console.log(qWrong);
    localStorage.setItem("Question 2", 1);
    askQuestion3();
}


function isIncorrect2(){
    qWrong = true;
    console.log(qWrong);
    localStorage.setItem("Question 2", 0);
    askQuestion3();
}

//question 3:
function isCorrect3(){
    qWrong = false;
    console.log(qWrong);
    localStorage.setItem("Question 3", 1);
    askQuestion4();
}

function isIncorrect3(){
    qWrong = true;
    console.log(qWrong);
    localStorage.setItem("Question 3", 0);
    askQuestion4();
}

//question 4:
function isCorrect4(){
    qWrong = false;
    console.log(qWrong);
    localStorage.setItem("Question 4", 1);
    askQuestion5();
}

function isIncorrect4(){
    qWrong = true;
    console.log(qWrong);
    localStorage.setItem("Question 4", 0);
    askQuestion5();
}

//question 5:
function isCorrect5(){
    qWrong = false;
    console.log(qWrong);
    localStorage.setItem("Question 5", 1);
    endQuiz();
}

function isIncorrect5(){
    qWrong = true;
    console.log(qWrong);
    localStorage.setItem("Question 5", 0);
    endQuiz();
}

//calling the questionOne function on click of the start button
startBtn.addEventListener("click", askQuestion1);

//question 1 function
function askQuestion1() {
    questionDiv.style.display="block"; //show question div
    q1Choices.appendChild(listEl1);
    //put question and answers in "#question" div
    document.getElementById("question-title").innerHTML = questions.Question1;
    listEl1.appendChild(li1); 
    listEl1.appendChild(li2);
    listEl1.appendChild(li3);
    listEl1.appendChild(li4);

    q1Title.style.display = "block"; //show question
    q1Choices.style.display = "block"; //show choices
}

li1.addEventListener("click", isCorrect1);
li2.addEventListener("click", isIncorrect1);
li3.addEventListener("click", isIncorrect1);
li4.addEventListener("click", isIncorrect1);

function askQuestion2() {
    questionDiv.style.display="block"; //show question div
    q1Choices.removeChild(listEl1);
    q1Choices.appendChild(listEl2);
    //put question and answers in "#question" div
    document.getElementById("question-title").innerHTML = questions.Question2;
    listEl2.appendChild(li5); 
    listEl2.appendChild(li6);
    listEl2.appendChild(li7);
    listEl2.appendChild(li8);

    q1Title.style.display = "block"; //show question
    q1Choices.style.display = "block"; //show choices
}

li5.addEventListener("click", isCorrect2);
li6.addEventListener("click", isIncorrect2);
li7.addEventListener("click", isIncorrect2);
li8.addEventListener("click", isIncorrect2);

function askQuestion3() {
    questionDiv.style.display="block"; //show question div
    q1Choices.removeChild(listEl2);
    q1Choices.appendChild(listEl3);
    //put question and answers in "#question" div
    document.getElementById("question-title").innerHTML = questions.Question3;
    listEl3.appendChild(li9); 
    listEl3.appendChild(li10);
    listEl3.appendChild(li11);
    listEl3.appendChild(li12);

    q1Title.style.display = "block"; //show question
    q1Choices.style.display = "block"; //show choices
}

li9.addEventListener("click", isCorrect3);
li10.addEventListener("click", isIncorrect3);
li11.addEventListener("click", isIncorrect3);
li12.addEventListener("click", isIncorrect3);

function askQuestion4() {
    questionDiv.style.display="block"; //show question div
    q1Choices.removeChild(listEl3);
    q1Choices.appendChild(listEl4);
    //put question and answers in "#question" div
    document.getElementById("question-title").innerHTML = questions.Question4;
    listEl4.appendChild(li13); 
    listEl4.appendChild(li14);
    listEl4.appendChild(li15);
    listEl4.appendChild(li16);

    q1Title.style.display = "block"; //show question
    q1Choices.style.display = "block"; //show choices
}

li13.addEventListener("click", isCorrect4);
li14.addEventListener("click", isIncorrect4);
li15.addEventListener("click", isIncorrect4);
li16.addEventListener("click", isIncorrect4);

function askQuestion5() {
    questionDiv.style.display="block"; //show question div
    q1Choices.removeChild(listEl4);
    q1Choices.appendChild(listEl5);
    //put question and answers in "#question" div
    document.getElementById("question-title").innerHTML = questions.Question5;
    listEl5.appendChild(li17); 
    listEl5.appendChild(li18);
    listEl5.appendChild(li19);
    listEl5.appendChild(li20);

    q1Title.style.display = "block"; //show question
    q1Choices.style.display = "block"; //show choices
}

li17.addEventListener("click", isCorrect5);
li18.addEventListener("click", isIncorrect5);
li19.addEventListener("click", isIncorrect5);
li20.addEventListener("click", isIncorrect5);

function endQuiz(){
    qScreen.style.display = "none"; //hide the question screen
    endScreen.style.display = "block"; //show the end screen
}

