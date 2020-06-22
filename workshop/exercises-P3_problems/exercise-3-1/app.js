function disappears(element) {
  element.style.opacity = 0;
}

function color(element, color) {
  element.style.backgroundColor = color;
}

function shake(element) {
  element.classList.add('jitters');
}

window.addEventListener('click', e => {
  switch (e.target.id) {
    case 'btn-1':
      disappears(e.target);
      break;
    case 'btn-2':
      color(e.target, 'crimson');
      break;

    case 'btn-3':
      color(e.target, 'lightblue');
      break;
    case 'btn-4':
      shake(e.target);
      break;
  }
});
