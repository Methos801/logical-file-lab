const controls = document.querySelector('.demo-controls');
const steps = [...document.querySelectorAll('[data-step]')];
const buttons = [...controls.querySelectorAll('button')];

function showStep(id) {
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-controls') === id));
  }
  for (const step of steps) {
    step.hidden = step.id !== id;
  }
}

const initial = steps.find(step => '#' + step.id === location.hash);
showStep(initial?.id ?? steps[0].id);
controls.hidden = false;
for (const button of buttons) {
  button.addEventListener('click', () => showStep(button.getAttribute('aria-controls')));
}
