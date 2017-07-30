var Inquirer = require("inquirer");

var question = ["What position do you play?", "Midfield"];

Inquirer.prompt([
    {
        type: "input",
        message: question[0],
        name: "position"
    }
]).then(function(answer) {
    if (answer.position === question[1]) {
        console.log("Right");
    } else {
        console.log("NO, you play " + question[1]);
    }
})