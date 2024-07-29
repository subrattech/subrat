const questions = [
    {
        question: "Who is the god father of cricket?",
        answers: [
            { text: "Rohit", correct: false},
            { text: "Virat", correct: false},
            { text: "Dhoni", correct: true},
            { text: "Jadeja", correct: false}
        ]
    },
    {
        question: "Who is the Hit man of cricket?",
        answers: [
            { text: "Rohit", correct: true},
            { text: "Virat", correct: false},
            { text: "Dhoni", correct: false},
            { text: "Jadeja", correct: false}
        ]
    },
    {
        question: "Who is the King of cricket?",
        answers: [
            { text: "Rohit", correct: false},
            { text: "Virat", correct: true},
            { text: "Dhoni", correct: false},
            { text: "Jadeja", correct: false}
        ]
    },
    {
        question: "Who is the best all rounder of cricket?",
        answers: [
            { text: "Rohit", correct: false},
            { text: "Virat", correct: false},
            { text: "Dhoni", correct: false},
            { text: "Jadeja", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButon(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButon();
    }else{
        startQuiz();
    }
})

startQuiz();