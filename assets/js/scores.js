//keep track of user's answers
var finalScore = document.getElementById("final-score");

var endScore = localStorage.getItem("Points");


finalScore.textContent = localStorage.getItem("Points");


//define the variables:

var clearBtn = document.getElementById("clear");

//initials input & final score
var initInput = document.getElementById("initials"); //initials entered by user

// displays
var endScreen = document.getElementById("end-screen"); //end screen div
var submitBtn = document.getElementById("submit");


function clearAll() {
    window.localStorage.clear();
}

if(clearBtn){
clearBtn.addEventListener("click", clearAll);
}

if(submitBtn){
    submitBtn.addEventListener("click", submitScore);
}
function submitScore(){
    localStorage.setItem("score", endScore);
    localStorage.setItem("initials", initInput.value);
    window.location.href = "./highscores.html";

    var hiScoreList = document.getElementById("highscores"); //high score OL element
    var score = document.createElement("li");
    score.textContent = initInput + " - " + endScore;
    hiScoreList.appendChild(score);

    document.getElementById("highscores").innerHTML =
    localStorage.getItem("score");
    localStorage.getItem("initials");

}


// //get the score and initials from local storage
// function fetchInfo() {
//  document.getElementById("highscores").style.display="block";
//     localStorage.getItem("score");
//     localStorage.getItem("initials");

//     //document.getElementById("highscores").innerHTML = ("initials".value + " - " + "score".value);
//  }













