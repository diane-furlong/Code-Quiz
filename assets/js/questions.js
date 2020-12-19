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
li1.textContent= "HTML";
li2.textContent= "C++";
li3.textContent= "Python";
li4.textContent= "Ruby";

li5.textContent= "git clone 'repository link'";
li6.textContent= "git pull";
li7.textContent= "git push";
li8.textContent= "git fish";

li9.textContent= "static";
li10.textContent= "relative";
li11.textContent= "fixed";
li12.textContent= "absolute";

li13.textContent= "z";
li14.textContent= "y";
li15.textContent= "q";
li16.textContent= "x";

li17.textContent= "//";
li18.textContent= "*/";
li19.textContent= "*this is a comment*";
li20.textContent= "~~";



var questions= {
    "Question1": "Which is the most basic coding element of the internet?",
    "Question2": "How do you clone a new GitHub directory into your local files?",
    "Question3": "Which default position makes images stack on top of each other?",
    "Question4": "Which index do you use to layer images?",
    "Question5": "What is the syntax to add a comment in JavaScript?",
};

localStorage.setItem("Points", points);
//correct/incorrect functions & loggers
//question 1:
//next steps if get answer correct
function isCorrect1(){
    qWrong = false;
    console.log(qWrong);
    var gotIt = document.createElement("p");
    var gotItRight = document.createTextNode("Correct!");
    gotIt.appendChild(gotItRight);
    document.body.appendChild(gotIt);
    localStorage.setItem("Question 1", parseInt(1));
    score();
    localStorage.setItem("Points", points)
    setTimeout(askQuestion2, 1000);
}

//next steps if get answer incorrect
function isIncorrect1(){
    qWrong = true;
    console.log(qWrong);
    var noGo = document.createElement("p");
    var gotItWrong = document.createTextNode("Wrong");
    noGo.appendChild(gotItWrong);
    document.body.appendChild(noGo);
    localStorage.setItem("Question 1", parseInt(0));
    localStorage.setItem("Points", points);
    setTimeout(askQuestion2, 1000);
}


//question 2:
function isCorrect2(){
    qWrong = false;
    console.log(qWrong);
    var gotIt = document.createElement("p");
    var gotItRight = document.createTextNode("Correct!");
    gotIt.appendChild(gotItRight);
    document.body.appendChild(gotIt);
    localStorage.setItem("Question 2", parseInt(1));
    score();
    localStorage.setItem("Points", points);
    setTimeout(askQuestion3, 1000);
}


function isIncorrect2(){
    qWrong = true;
    console.log(qWrong);
    var noGo = document.createElement("p");
    var gotItWrong = document.createTextNode("Wrong");
    noGo.appendChild(gotItWrong);
    document.body.appendChild(noGo);
    localStorage.setItem("Question 2", parseInt(0));
    localStorage.setItem("Points", points);
    setTimeout(askQuestion3, 1000);
}

//question 3:
function isCorrect3(){
    qWrong = false;
    console.log(qWrong);
    var gotIt = document.createElement("p");
    var gotItRight = document.createTextNode("Correct!");
    gotIt.appendChild(gotItRight);
    document.body.appendChild(gotIt);
    localStorage.setItem("Question 3", parseInt(1));
    score();
    localStorage.setItem("Points", points);
    setTimeout(askQuestion4, 1000);
}

function isIncorrect3(){
    qWrong = true;
    console.log(qWrong);
    var noGo = document.createElement("p");
    var gotItWrong = document.createTextNode("Wrong");
    noGo.appendChild(gotItWrong);
    document.body.appendChild(noGo);
    localStorage.setItem("Question 3", parseInt(0));
    localStorage.setItem("Points", points);
    setTimeout(askQuestion4, 1000);
}

//question 4:
function isCorrect4(){
    qWrong = false;
    console.log(qWrong);
    var gotIt = document.createElement("p");
    var gotItRight = document.createTextNode("Correct!");
    gotIt.appendChild(gotItRight);
    document.body.appendChild(gotIt);
    localStorage.setItem("Question 4", parseInt(1));
    score();
    localStorage.setItem("Points", points);
    setTimeout(askQuestion5, 1000);
}

function isIncorrect4(){
    qWrong = true;
    console.log(qWrong);
    var noGo = document.createElement("p");
    var gotItWrong = document.createTextNode("Wrong");
    noGo.appendChild(gotItWrong);
    document.body.appendChild(noGo);
    localStorage.setItem("Question 4", parseInt(0));
    localStorage.setItem("Points", points);
    setTimeout(askQuestion5, 1000);
}

//question 5:
function isCorrect5(){
    qWrong = false;
    console.log(qWrong);
    var gotIt = document.createElement("p");
    var gotItRight = document.createTextNode("Correct!");
    gotIt.appendChild(gotItRight);
    document.body.appendChild(gotIt);
    localStorage.setItem("Question 5", parseInt(1));
    score();
    localStorage.setItem("Points", points);
    setTimeout(endQuiz, 1000);
}

function isIncorrect5(){
    qWrong = true;
    console.log(qWrong);
    var noGo = document.createElement("p");
    var gotItWrong = document.createTextNode("Wrong");
    noGo.appendChild(gotItWrong);
    document.body.appendChild(noGo);
    localStorage.setItem("Question 5", parseInt(0));
    localStorage.setItem("Points", points);
    setTimeout(endQuiz, 1000);
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

