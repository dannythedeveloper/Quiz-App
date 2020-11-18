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
  score: 0
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)