  // $( document ).ready(function(){

$('#start').on('click',function() {
	game.start();
})

$(document).on('click','#endGame',function(){
	game.done();
})

var questions = [{
	question: "Before Michael takes over as \"Don\" of the family, what is Don Corleone's first name?",
	answers: ["Carlo", "Santino", "Tito", "Vito"],
	correctAnswer: "Vito"
}, {
// check w/my TA if answer for if needs Boolian statement?
	question: "The first movie opens with Don Corleone conducting business during the wedding of his only daughter",
	answers: ["True", "False"],
	correctAnswer:  "True"

}, {
	question: "The Corleone family got its name from what?",
	answers: ["The town of Corleone Sicily", "Old Mafia Boss", "Corleone has always been the family name"],
	correctAnswer:  "The town of Corleone Sicily"
}, {

	question: "Which of the following is NOT one of Don Vito Corleone's sons?",
	answers: ["Luca", "Michael", "Sonny","Fredo"],
	correctAnswer:  "Luca"

}, {
	question: "In one of the scenes, a movie producer wakes up to find something horrible in his bed. What did he find?",
	answers: ["Severed head of his favorite horse", "Lots of poisonous snakes", "his mutilated dog"],
	correctAnswer: "Severed head of his favorite horse" 
},{
	question: "Which sibling(s) does Michael have killed at the end of Part II?",
	answers: ["Connie", "Don", "Sonny","Fredo"],
	correctAnswer:  "Fredo"
},{
	question: "What was Vito's last name when he was born?",
	answers: ["Bambino", "Andolini", "Corleone","Fennucci"],
	correctAnswer:  "Andolini"
},{
	question: "Who is the oldest child of the Godfather?",
	answers: ["Michael", "Connie", "Sonny","Fredo"],
	correctAnswer:  "Sonny"
}];

// game object
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,//might change later to 110 or more if i add more questions
	countdown: function(){
		game.counter--;	
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	// function
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter">50</span> Seconds</h2>');
		$('#start').remove(); 
		// for loop functions
		for(var i=0; i<questions.length;i++){
		// append to subcontainer 
			$('#subcontainer').append('<h2>'+questions[i].question+'</h2>');
		// sub loop
			for(var j=0;j<questions[i].answers.length;j++){
				$("#subcontainer").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
		$('#subcontainer').append('<hr><button id="endGame">DONE</button>');
	},
// function to check @ of the question whether correct or not
	done: function(){
		$.each($("input[name='question-0']:checked"), function(){
			if ($(this).val()===questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-1']:checked"), function(){
			if ($(this).val()===questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function(){
			if ($(this).val()===questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function(){
			if ($(this).val()===questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function(){
			if ($(this).val()===questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-5']:checked"), function(){
			if ($(this).val()===questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-6']:checked"), function(){
			if ($(this).val()===questions[6].correctAnswer){
				game.correct++;
			} 	else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-7']:checked"), function(){
			if ($(this).val()===questions[7].correctAnswer){
				game.correct++;
			} 	else {
				game.incorrect++;
			}
		});

		this.result();
		},
		//print results for the game
		result: function(){
		clearInterval(timer);
		//remove the time remaining
		$('#subcontainer h2').remove();
		$('#subcontainer').html("<h2>All done!<h2>");
		$('#subcontainer').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subcontainer').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subcontainer').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}
