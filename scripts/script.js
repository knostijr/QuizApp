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

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) { // Parameter Selection wird der Funktion übergeben
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if(selectedQuestionNumber == question['right_answer']) {
        console.log("die antwort ist korrekt du spinner");
    }else {
        console.log("Knapp danaben ist auch vorbei du nuttensohn");
    }
}