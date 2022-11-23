const correctAnswers = ['A', 'D', 'B', 'A'];

const form = document.querySelector('.quiz-form');
const score = document.querySelector('.score');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

});
