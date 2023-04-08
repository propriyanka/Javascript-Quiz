const quizdata = [
    {
        question: 'Which framework is related to JS',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'
    },
    {
        question: 'Which is not a programming language',
        a: 'html',
        b: 'python',
        c: 'java',
        d: 'js',
        correct: 'a'
    },
    {
        question: 'Which is not a framework',
        a: 'react',
        b: 'javascript',
        c: 'angular',
        d: 'django',
        correct: 'b'
    },
    {
        question: 'css stands for',
        a: 'cascading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const answer = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const option_a = document.getElementById('a_value');
const option_b = document.getElementById('b_value');
const option_c = document.getElementById('c_value');
const option_d = document.getElementById('d_value');
const submitbtn = document.getElementById('submit');

let currentQuestion = 0;
let quizScore = 0;

loadQuiz();

function loadQuiz() {
    deselect();
    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerText = quizdata[currentQuestion].a;
    option_b.innerText = quizdata[currentQuestion].b;
    option_c.innerText = quizdata[currentQuestion].c;
    option_d.innerText = quizdata[currentQuestion].d;
}

function deselect() {
    answer.forEach((answer) => {
        answer.checked = false;
    });
}

submitbtn.addEventListener('click', () => {
    let selectedoption;
    answer.forEach((answer) => {
        if (answer.checked) {
            selectedoption = answer;
        }
    });
    if (selectedoption && selectedoption.value === quizdata[currentQuestion].correct) {
        quizScore = quizScore + 1;
    }
    currentQuestion = currentQuestion + 1;
    if (currentQuestion === quizdata.length) {
        document.getElementById('quizdiv').innerHTML = `<h1>You Have Answered ${quizScore} correctly out of ${quizdata.length} </h1>`;
    } else {
        loadQuiz();
    }
});


