/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [{
    question: 'Why can\'t Kevin make ornaments out of the old fishhooks?',
    answers: [
      'He can\'t find them.',
      'They are not the right type.',
      'They have worm guts on them.',
      'He ran out of hot glue.'
    ],
    correctAnswer: 'They have worm guts on them.'
  },
  {
    question: 'How old is Kevin?',
    answers: [
      '8',
      '9',
      '10',
      '11'
    ],
    correctAnswer: '8'
  },
  {
    question: 'What is the name of the pizza company that delivers the pizzas to Kevin and his family?',
    answers: [
      'Little Mario\'s',
      'Little Nero\'s',
      'Little Caesars',
      'Little Marco\'s'
    ],
    correctAnswer: 'Little Nero\'s'
  },
  {
    question: 'What is not one of the things that Kevin tells the family he picked up at the grocery store?',
    answers: [
      'Eggs',
      'Milk',
      'Bread',
      'Fabric Softner'
    ],
    correctAnswer: 'Bread'
  },
  {
    question: 'When the MaCallister\'s were in France, what Christmas classic were they watching on tv?',
    answers: [
      'The Santa Clause',
      'Angels with Filthy Souls',
      'It\'s a Wonderful Life',
      'A Christmas Story'
    ],
    correctAnswer: 'It\'s a Wonderful Life'
  },
  {
    question: 'What time is the family leaving the house in the morning according to Uncle Frank?',
    answers: [
      '6am',
      '7am',
      '8am',
      '10am'
    ],
    correctAnswer: '8am'
  },
  {
    question: 'Who gets mistaken for Kevin during the headcount?',
    answers: [
      'Marley Merchants',
      'Gus Polinski',
      'Harry Lime',
      'Mitch Murphy'
    ],
    correctAnswer: 'Mitch Murphy'
  }
  ],

  quizStarted: false,
  questionNumber: 0,
  score: 0,
  incorrect: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// starting page
function generateStartPage() {
  return `<section id="startPage"><div class="mainPage">
  <h2>How well do you know "Home Alone?"</h2>
  <p>Find out how well you know the Christmas classic!</p>
  <div class="reactionImage" id="mainPageImage">
  <img src="https://media.giphy.com/media/115GePH0Iri8QE/giphy.gif" alt="Keving raising eyebrows">
  </div><br>
  <button id="startQuiz" class="button">Begin</button>
</div></section>`;
}

// question page
function generateQuestionPage() {
  let question = store.questions[store.questionNumber];
  let answers = question.answers.map((answer, index) => {
    if (index === 0) {
      return `<input type="radio" id="answer${index}" name="answer" value="${answer}" required />
    <label for="answer${index}">${answer}</label><br>`;
    }
    return `<input type="radio" id="answer${index}" name="answer" value="${answer}" />
      <label for="answer${index}">${answer}</label><br>`;
  });
  return `<section id="questionPage"><div id="questionPage" class="mainPage">
    <form id="questionForm">
    <p>${store.questionNumber + 1} out of ${store.questions.length}</p>
    <h2>${question.question}</h2>
    <div class="answerChoices">
    ${answers.join('')}
    </div>
    <br><button type="submit" id="submitAnswer" name="submitAnswer" class="button">Continue</button>
    </form>
    <span id="currentScore" class="score">
    <p>Correct: ${store.score}</p>
    <p>Incorrect: ${store.incorrect}</p>
    </span>  
    </div></section>`;
}

//correct answer page
function generateCorrectPage() {
  return `<section id="correctPage"><div id="correctAnswer" class="mainPage">
    <h2>Correct! Great job!</h2>
    <div class="reactionImage">
      <img src="https://media.giphy.com/media/1iTJct5JuplfCwFO/giphy.gif" alt="Kevin cheering">
    </div>
    <span id="currentScore" class="score">
      <p>Correct: ${store.score}</p>
      <p>Incorrect: ${store.incorrect}</p>
    </span>
    <button type="submit" id="next" name="next" class="button">Next</button>
  </div></section>`;
}

//incorrect answer page
function generateIncorrectPage() {
  return `<section id="incorrectPage"><div id="incorrectAnswer" class="mainPage">
    <h2>Oh no! The correct answer is: ${store.questions[store.questionNumber].correctAnswer}</h2>
    <div class="reactionImage">
      <img src="https://media.giphy.com/media/p092OM3vVCXII/giphy.gif" alt="Kevin screaming">
    </div>
    <span id="currentScore" class="score">
      <p>Correct: ${store.score}</p>
      <p>Incorrect: ${store.incorrect}</p>
    </span>
    <button type="submit" id="next" name="next" class="button">Next</button>
  </div></section>`;
}

//final page
function generateFinalPage() {
  return `<section id="finalPage"><div id="resultsPage" class="mainPage">
  <h2>Let's see how you did:</h2>
  <p>You got ${store.score} out of ${store.questions.length} correct!</p>
  <br>
  <div class="reactionImage">
  <img src="https://media.giphy.com/media/26tPaBeEc1XtBx04w/giphy.gif" alt="Kevin jumping on the bed">
  </div>
  <br>
  <button id="startOver" name="startOver" class="button">Start Over</button>
  </div></section>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//renders html pages 
function render() {
  let html = '';
  if (store.quizStarted) {
    if (store.questionNumber === store.questions.length) {
      html = generateFinalPage();
    } else {
      html = generateQuestionPage();
    }
  } else {
    html = generateStartPage();

  }

  $('main').html(html);
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// handles click on start quiz and renders the question page
function handleStartQuiz() {
  $('main').on('click', '#startQuiz', function (event) {
    store.quizStarted = true;
    render();
  });
}

// handles click on Continue to check answer
// compares user answer to answer key and returns appropiate feedback page
function handleCheckAnswer() {
  $('main').on('submit', '#questionForm', function(event) {
    event.preventDefault();
    let selectedAnswer = $('input[type="radio"]:checked').val();
    console.log(selectedAnswer);
    let answerKey = store.questions[store.questionNumber].correctAnswer;
    if (selectedAnswer === answerKey) {
      store.score++;
      let feedback = generateCorrectPage();
      $('main').html(feedback);
    } else {
      store.incorrect++;
      let feedback = generateIncorrectPage();
      $('main').html(feedback);
    }
  }); 
}

// handles click on next to move onto next question
function handleClickNext() {
  $('main').on('click', '#next', function(event) {
    store.questionNumber++;
    console.log(store.questionNumber);
    render();
  });
}

// handles click on start over, and resets quiz to begin again
function handleStartOver() {
  $('main').on('click', '#startOver', function(event) {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.incorrect = 0;
    render();
  });
}

// runs all functions on page
function handleQuiz() {
  render();
  handleStartQuiz();
  handleCheckAnswer();
  handleClickNext();
  handleStartOver();
}


$(handleQuiz);