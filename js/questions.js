const convo1 = [
  'Hello there, What is your name?',
  'What is your favourite colour?',
  'What is your favourite food?',
  'When is your birthday?',
  'If you can have dinner with anyone(living or alive), who would it be?',
  'Do you think OJ did it?',
  'Do you think Carole Baskin killed her husband?',
  'Do you believe in life outer space?',
  'What house are you in Hogwarts?',
  'What would you rather face 1000 ant size tigers or one tiger sized ant??',
  'How do you tame a horse in minecraft?',
  'Do you want more questions?',
  'Unfortunately there are no more questions',
];

const Conversation = class {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
  }

    getQuestion = () => {
      const question = this.questions[this.currentQuestion];
      this.currentQuestion += 1;
      if (this.currentQuestion === convo1.length + 1) {
        alert('Goodbye!');
        window.close();
      }
      return question;
    }
};
