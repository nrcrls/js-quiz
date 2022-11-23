const correctAnswers = ['A', 'D', 'B', 'A'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

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

  result.textContent = `${score}%`;
  result.classList.remove('hidden');
});
