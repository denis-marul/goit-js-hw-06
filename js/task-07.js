const cntrlInput = document.querySelector('#font-size-control');
const word = document.querySelector('#text');

cntrlInput.addEventListener('input', event => {
  word.style.fontSize = event.currentTarget.value + 'px';
});
