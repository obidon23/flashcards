var BasicCard = function(number, front, back) {
	this.number = number,
	this.front = front,
	this.back = back;
};

q1 = new BasicCard("Q1", "What is the capital of Tunisia?", "Tunis");
q2 = new BasicCard("Q2", "What is the capital of Ethiopia?", "Addis Ababa");
q3 = new BasicCard("Q3", "What is the capital of Ghana?", "Accra");
q4 = new BasicCard("Q4", "What is the capital of Kenya?", "Nairobi");
q5 = new BasicCard("Q5", "What is the capital of Egypt?", "Cairo");
q6 = new BasicCard("Q6", "What is the capital of Nigeria?", "Abuja");
q7 = new BasicCard("Q7", "What is the capital of Namibia?", "Windhoek"); 
q8 = new BasicCard("Q8", "What is the capital of Djibouti?", "Djibouti");
q9 = new BasicCard("Q9", "What is the capital of Guinea-Bissau?", "Bissau");
q10 = new BasicCard("Q10", "What is the capital of Uganda?", "Kigali");

module.exports = BasicCard;