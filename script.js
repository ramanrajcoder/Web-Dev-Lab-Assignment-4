// Quiz Questions Array
const quizQuestions = [
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What method converts a string to lowercase in JavaScript?", answer: "tolowercase" },
    { question: "Which loop is best used when the number of iterations is known?", answer: "for" },
    { question: "What symbol is used for single-line comments in JavaScript?", answer: "//" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(
            "Question " + (i + 1) + ":\n" + quizQuestions[i].question
        );

        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    alert("Final Score: " + score + " / " + quizQuestions.length);
}

// Automatically start quiz
runQuiz();
