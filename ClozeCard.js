//variables and requires
var questionsAndAnswers = require("./flashcards.js");
var Inquirer = require("inquirer");

var BasicCard = function(number, front, back) {
	this.number = number,
	this.front = front,
	this.back = back;
};

var counter = 0;
var correct = 0
var questions = [];

questions.push(new BasicCard("q1", "What is the capital of Tunisia?", "Tunis"));
questions.push(new BasicCard("q2", "What is the capital of Ethiopia?", "Addis Ababa"));
questions.push(new BasicCard("q3", "What is the capital of Ghana?", "Accra"));
questions.push(new BasicCard("q4", "What is the capital of Kenya?", "Nairobi"));
questions.push(new BasicCard("q5", "What is the capital of Egypt?", "Cairo"));
questions.push(new BasicCard("q6", "What is the capital of Nigeria?", "Abuja"));
questions.push(new BasicCard("q7", "What is the capital of Namibia?", "Windhoek")); 
questions.push(new BasicCard("q8", "What is the capital of Djibouti?", "Djibouti"));
questions.push(new BasicCard("q9", "What is the capital of Guinea-Bissau?", "Bissau"));
questions.push(new BasicCard("q10", "What is the capital of Uganda?", "Kigali"));


function start() {
	Inquirer.prompt([
			{
				type: "list",
				message: "Let's learn our African Capitals! May seem stupid now, but you'll thank me when you get on Jeopardy! Are you ready to get started?",
				choices: ["Yes!", "No Thanks."],
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
;

		console.log("----------------------------------------------------------\n");
		console.log("Correct Answers: " + correct +"\n");	
		console.log("----------------------------------------------------------\n");
		if (counter === questions.length) {
			endQuiz(correct);
		} else
			Inquirer.prompt([
				{
					type: "input",
					message: questions[counter].number + ": " + questions[counter].front,
					name: "capital"
				}
				]).then(function(answer) {
				
				if (answer.capital === questions[counter].back) {
					console.log("You are correct!");
					correct++;

				} else {
					console.log("You're barking up the right tree, but the answer is " + questions[counter].back + ".");

				}
					counter++;
					quiz();
			});
};

function endQuiz() {
	if (correct === questions.length) {
		console.log("Perfect Score! You scored " + correct + "out of " + "1!");
	} else if ((correct/questions.length) >0.69) {
		console.log("Great Job! You passed with a score of " + correct + " out of " + questions.length+ ".");
	} else {
		console.log("Not so good. Let's try again. You only knew " + correct + " out of " + questions.length+ "!");
	}
	start();
}


start();