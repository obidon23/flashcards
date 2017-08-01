var BasicCard = require("./BasicCard.js");
var data = require ("./questions.js");
var Inquirer = require("inquirer");

var questions = [];
var counter = 0;
var correct = 0;

// Create Basic questions using constructor
data.forEach(function(question) {
	questions.push(new BasicCard(questions.number, questions.question, questions.answer));
});

console.log(data[0].number + data[0].question);
function start

() {

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

		console.log("----------------------------------------------------------\n");
		console.log("Correct Answers: " + correct +"\n");	
		console.log("----------------------------------------------------------\n");
		if (counter === data.length) {
			endQuiz(correct);
		} else
			Inquirer.prompt([
				{
					type: "input",
					message: data[counter].number + ": " + data[counter].question,
					name: "capital"
				}
				]).then(function(answer) {
				
				if (answer.capital.toLowerCase() === data[counter].answer.toLowerCase()) {
					console.log("You are correct!");
					correct++;

				} else {
					console.log("You're barking up the right tree, but the answer is " + data[counter].answer + ".");

				}
					continueQuiz();

			});
};


function continueQuiz() {
	Inquirer.prompt([
		{
		type: "list",
		message: "Do you want to keep going?",
		choices: ["Yes", "No, I need a break"],
		name: "continue"
		}
		]).then(function(answer) {
			if (answer.continue == "Yes") {
				counter++;

				quiz();
			} else {
				endQuiz(correct);
			}
		})
};

function endQuiz() {
	if (correct === counter + 1) {
		console.log(`
-----------------------------------------------------
                                                    
	Perfect Score!   						   
	You scored ${correct} out of ${counter+1}!
													
-----------------------------------------------------
`);
	  
	} else if ((correct/(counter + 1)) >0.69) {
		
		console.log(`
-----------------------------------------------------
                                                    
	Great Job! You scored					   
	You passed with ${correct} out of ${counter+1}.	
													
-----------------------------------------------------
`);
	} else {
	console.log(`
-----------------------------------------------------
                                                    
	Not so good. Let's try again. 					   
	You only knew ${correct} out of ${counter+1}.
													
-----------------------------------------------------
`);
	start();
}
}


start();