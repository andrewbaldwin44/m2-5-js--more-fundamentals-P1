const buttons = document.querySelector('.buttons');
const defaultColor = 'gold';

function applyDefaults() {
  [...buttons.children].forEach(listItem => {
    button = listItem.firstChild;
    button.style.opacity = 100;
    button.style.backgroundColor = defaultColor;
  });
}

function toggleVisibility(element) {
  element.style.opacity =
    element.style.opacity === '100' ? 0 : 100 ;
}

function toggleColor(element, color) {
  element.style.backgroundColor =
    element.style.backgroundColor === color ? defaultColor : color;
}

function toggleShake(element) {
  element.classList.toggle('jitters');
}

window.onload = applyDefaults;

window.addEventListener('click', e => {
  switch (e.target.id) {
    case 'btn-1':
      toggleVisibility(e.target);
      break;
    case 'btn-2':
      toggleColor(e.target, 'crimson');
      break;

    case 'btn-3':
      toggleColor(e.target, 'lightblue');
      break;
    case 'btn-4':
      toggleShake(e.target);
      break;
  }
});
