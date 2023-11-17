

let msg = document.querySelector(".message");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guessNumber = document.querySelector(".number");

let strScore = document.querySelector(".score");
let score = Number(strScore.textContent);

// Cannot re-do text.content after assigned to a variable 

console.log(score);

document.querySelector(".check").addEventListener("click", function Check() {

    const guess = Number(document.querySelector(".guess").value);

    if (score > 1) {
        if (!guess) { //if guess is empty
            msg.textContent = "Please insert a number 🤡";
            guessNumber.textContent = "🤡";
        }

        else if (guess > secretNumber) {
            msg.textContent = "Number too high ⛅";
            --score;
            strScore.textContent = score.toString();
        }

        else if (guess < secretNumber) {
            msg.textContent = "Number too low 🌋";
            --score;
            strScore.textContent = score.toString();
        }

        else if (guess === secretNumber) {
            guessNumber.textContent = guess;
            msg.textContent = "Correct Number 🎉";
            document.querySelector("body").style.backgroundColor = "#43b536";
            guessNumber.style.width = "40%";

        }
    }
    else {
        score = 0;
        strScore.textContent = score.toString();
        msg.textContent = "You loose 👎";
        document.querySelector("body").style.backgroundColor = "red";

    }

});

document.querySelector(".again").addEventListener("click", function Reset() {

    if (msg.textContent === "You loose 👎" || msg.textContent === "Correct Number 🎉") {
        guessNumber.textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";

        document.querySelector(".guess").value = "";

        let highScore = document.querySelector(".highscore");

        if (Number(highScore.textContent) < score) {
            highScore.textContent = score.toString();
        }

        strScore.textContent = "20";
        score = 20;
        msg.textContent = "Start guessing...🧠";

        guessNumber.style.width = "15rem";


        secretNumber = Math.trunc(Math.random() * 20) + 1;
    }

    else {
        msg.textContent = "Complete this game 😠😡";
    }

});



// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 240;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);


// addds action listener to the button 
// document.querySelector(".check").addEventListener
//     ('click', function () {

//         const guessNum = Number(document.querySelector('.guess').value);
//         console.log(guessNum, typeof guessNum);

//         if (!guessNum) {
//             document.querySelector('.message').textContent = 'No Number';
//         }
//     });















