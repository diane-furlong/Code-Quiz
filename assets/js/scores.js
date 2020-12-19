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

function submitScore(){
    localStorage.setItem("score", endScore);
    localStorage.setItem("initials", initInput.value);
    window.location.href = "./highscores.html";
}
if(submitBtn){
    submitBtn.addEventListener("click", submitScore);
}

    var hiScoreList = document.getElementById("highscores"); //high score OL element
    var scoreList = document.createElement("li");   
    hiScoreList.appendChild(scoreList); 
    var initialsDisplay = (localStorage.getItem("initials"));
    var scoreDisplay = localStorage.getItem("score");
    scoreList.textContent = initialsDisplay + " - " + scoreDisplay;
 




  


// //get the score and initials from local storage
// function fetchInfo() {
//  document.getElementById("highscores").style.display="block";
//     localStorage.getItem("score");
//     localStorage.getItem("initials");

//     //document.getElementById("highscores").innerHTML = ("initials".value + " - " + "score".value);
//  }













