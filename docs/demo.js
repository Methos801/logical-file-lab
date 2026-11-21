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

function stepForHash(hash) {
  return hash === '#demo' ? steps[0] : steps.find(step => '#' + step.id === hash);
}

const initial = stepForHash(location.hash);
showStep(initial?.id ?? steps[0].id);
controls.hidden = false;
window.addEventListener('hashchange', () => {
  const linkedStep = stepForHash(location.hash);
  if (linkedStep) {
    const wasHidden = linkedStep.hidden;
    showStep(linkedStep.id);
    if (wasHidden && location.hash !== '#demo') linkedStep.scrollIntoView();
  }
});
for (const link of document.querySelectorAll('a[href^="#"]')) {
  const linkedStep = stepForHash(link.hash);
  if (linkedStep) link.addEventListener('click', () => showStep(linkedStep.id));
}
for (const button of buttons) {
  button.addEventListener('click', () => showStep(button.getAttribute('aria-controls')));
}
