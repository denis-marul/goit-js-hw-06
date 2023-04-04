function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divCntrl = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');
const input = divCntrl.firstElementChild;
const btnCreate = input.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;

function createBoxes(amount) {
  amount = input.value;
  let sizeDefolt = 30;

  for (let i = 0; i < amount; i += 1) {
    sizeDefolt += 10;

    const boxItem = document.createElement('div');

    boxItem.style.width = `${sizeDefolt}px`;
    boxItem.style.height = `${sizeDefolt}px`;
    boxItem.style.marginBottom = '10px';
    boxItem.style.marginTop = '10px';
    boxItem.style.backgroundColor = getRandomHexColor();

    divBoxes.append(boxItem);
  }
}
function destroyBoxes() {
  input.value = '';
  return (divBoxes.innerHTML = '');
}
btnDestroy.addEventListener('click', destroyBoxes);
btnCreate.addEventListener('click', createBoxes);
