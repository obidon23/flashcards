var ClozeCard = function(number, question, answer) {
	var blank = answer.split('').map(function(letter){
		return letter = "_";
	});

	var regEx = new RegExp(answer, "g");
	this.message = number + " " + question.replace(regEx, blank);
	this.name = answer; 
};

module.exports = ClozeCard;