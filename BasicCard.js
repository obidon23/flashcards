//variables and requires
var flashcards = require("./flashcards.js");
var Inquirer = require("inquirer");

var counter = 1;
var correct = 0

console.log(flashcards);

function start() {

	Inquirer.prompt([
			{
				type: "list",
				message: "Let's learn our African Capitals! May seem stupid now, but you'll thank me when you get on Jeopardy! Are you ready to get started?",
				choices: ["Yes!", "I can't handle the truth."],
				name: "start"	
			}

		]).then(function(answer) {
        if (answer.start === "Yes!") {
            //console.log("yay!");
            quiz();
        } else {
            //bidItem();
            console.log(`
-----------------------------------------------------
|                                                   | 
|    Knowledge is Power. Therefore, you are weak.   |   
|            										|
-----------------------------------------------------
`);

        }
    });
}


function quiz() {
	console.log("counter is: " + counter);


		console.log("----------------------------------------------------------\n");
		console.log("Correct Answers: " + correct +"\n");	
		console.log("----------------------------------------------------------\n");
		if (counter === flashcards.length) {
			endQuiz(correct);
		} else
			Inquirer.prompt([
				{
					type: "input",
					message: flashcards.q[counter].number + ": " + flashcards.q[counter].front,
					name: "capital"
				}
				]).then(function(answer) {
				
				if (answer.capital === flashcards.q[counter].back) {
					console.log("You are correct!");
					correct++;

				} else {
					console.log("You're barking up the right tree, but the answer is " + flashcards.q[counter].back + ".");

				}
					counter++;
					quiz();
			});
};

function endQuiz() {
	if (correct === flashcards.length) {
		console.log(`
-----------------------------------------------------
                                                    
	Perfect Score!   						   
	You scored ${correct} out of ${questions.length}!
													
-----------------------------------------------------
`);
	  
	} else if ((correct/flashcards.length) >0.69) {
		
		console.log(`
-----------------------------------------------------
                                                    
	Great Job! You scored					   
	You passed with ${correct} out of ${questions.length}.	
													
-----------------------------------------------------
`);
	} else {
	console.log(`
-----------------------------------------------------
                                                    
	Not so good. Let's try again. 					   
	You only knew ${correct} out of ${questions.length}.
													
-----------------------------------------------------
`);
	start();
}
}


start();