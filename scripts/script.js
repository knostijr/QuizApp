//JSON Array
let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbi Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    },

    {
        "question": "Wie definiert man in Javascript eine Variable",
        "answer_1": "let 100 - rate;",
        "answer_2": "let rate - 100;",
        "answer_3": "let 100 = rate;",
        "answer_4": "let rate = 100;",
        "right_answer": 4

    },

    {
        "question": "Welches Attribut kann man nicht für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1

    },

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbi Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    },
];


let currentQuestion = 0;

let rightQuestions = 0;

function init() {
    document.getElementById('all_questions').innerHTML = questions.length; // Nummer der Frage wird angezeigt

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // Show endscreen
        document.getElementById('end_screen').style = '';
        document.getElementById('question_body').style = 'display: none';

        document.getElementById('amount_of_questions').innerHTML = questions.length;
        document.getElementById('amount_of_right_questions').innerHTML = rightQuestions;
        document.getElementById('header_img').src = 'assets/img/cup.png';

    } else {

        let question = questions[currentQuestion];

        document.getElementById('question_number').innerHTML = currentQuestion + 1; // 
        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
}

function answer(selection) { // Parameter Selection wird der Funktion übergeben
    let question = questions[currentQuestion]; // aktive Frage wird der variable hinzugefuegt
    let selectedQuestionNumber = selection.slice(-1); // slice() funktion 

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) { // true, wenn die ausgewählte antwort die im json array vorgebene korrekt ist
        document.getElementById(selection).parentNode.classList.add('bg-success'); // werde grün
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // werde rot
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // wenn falsche ausgewählt wird, dann wird die korrekte antwort angezeigt
    }

    document.getElementById('next_botton').disabled = false; // wenn eine antwort ausgewählt wird, ist der btn wieder nutzbar
}

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1 , next question
    document.getElementById('next_botton').disabled = true; // button ist wieder verfügbar
    resetAnswerButtons(); // css klassen werden removed, funktion ist in zeile 87 deklariert
    showQuestion(); // fragen werden wieder angezeigt
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}