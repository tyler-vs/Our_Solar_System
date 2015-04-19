var app = angular.module('quizApp', []);

// DEFINE CUSTOM DIRECTIVE, WHICH IN THIS CASE WE CALLED QUIZ.

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {

			//METHODS NEEDED TO START QUIZ, GET A QUESTION, AND CHECK THE ANSWER
			scope.start = function() {
				//SCOPE.ID IS THE ID OF THE CURRENT QUESTION
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

/////////////////
// CREATE FACTORY TO GET THE QUESTIONS. THE FACTORY WILL RETURN A QUESTION WHEN A GIVEN QUESTION ID IS REQUESTED.
/////////////////

app.factory('quizFactory', function() {
	var questions = [
		{
			question: "Which planet has an atmosphere that consist of 42% Oxygen, 29% Sodium, and 29% Other elements?",
			options: ["Sun", "Uranus", "Mercury", "Mars"],
			answer: 2
		},
		{
			question: "What is the 8th planet from the Sun?",
			options: ["Neptune", "Earth", "Mars", "Saturn"],
			answer: 0
		},
		{
			question: "What planet do you live on?",
			options: ["Sun", "Neptune", "Uranus", "Earth"],
			answer: 3
		},
		{
			question: "What is the 5th planet from the Sun?",
			options: ["Jupiter", "Saturn", "Uranus", "Venus"],
			answer: 0
		},
		{	
			question: "What planet has an atmosphere that consists of 96% Carbon Dioxide, 3% Nitrogen, and 1% Other elements?",
			options: ["Mercury", "Venus", "Mars", "Uranus"],
			answer: 1
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});