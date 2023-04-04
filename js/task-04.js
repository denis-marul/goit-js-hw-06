let counterValue = 0;
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

decr.addEventListener('click', onRemoveNumber);
incr.addEventListener('click', onAddNumber);
function onAddNumber() {
  counterValue += 1;
  span.textContent = counterValue;
}
function onRemoveNumber() {
  counterValue -= 1;
  span.textContent = counterValue;
}
