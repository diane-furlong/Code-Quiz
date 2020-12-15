//define the variables:

var clearBtn = document.getElementById("clear");

//initials input & final score
var initInput = document.getElementById("initials"); //initials entered by user
var finalScore = document.getElementById("final-score"); //to show score to user in end-page display

// displays
var endScreen = document.getElementById("end-screen"); //end screen div


var submitBtn = document.getElementById("submit");

if(submitBtn){
    submitBtn.addEventListener("click", submitScore);
}
function submitScore(){
    localStorage.setItem("score", finalScore.value);
    localStorage.setItem("initials", initInput.value);
    window.location.href = "./highscores.html";

    var hiScoreList = document.getElementById("highscores"); //high score list
    var score1 = document.createElement("li");
    score1.textContent = initInput + " - " + finalScore;
    hiScoreList.appendChild(score1);

    document.getElementById("highscores").style.display="block";
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


 










