const totalBtn = document.querySelector('.total-btn'),
  total = document.querySelector('.total'),
  amountInput = document.querySelector('.amount-input'),
  numberInput = document.querySelector('.number-input');

totalBtn.addEventListener('click', getResult);
document.addEventListener('keydown', checkKeycode);
amountInput.addEventListener('click', () => clearValue(amountInput));
numberInput.addEventListener('click', () => clearValue(numberInput));


function getResult() {
  let diametrVal = setDiametr(),
    amountVal = setAmount(),
    numberVal = setNumber(),
    totalVal = 0;
  totalVal = diametrVal * amountVal * numberVal;
  total.innerText = totalVal.toFixed(3);
  numberInput.value = 1;
}

function setDiametr() {
  const diametr = document.querySelector('.select');
  let massa = 0;
  switch (diametr.value) {
    case '4':
      massa = 0.092;
      break;
    case '6':
      massa = 0.222;
      break;
    case '8':
      massa = 0.395;
      break;
    case '10':
      massa = 0.617;
      break;
    case '12':
      massa = 0.888;
      break;
    case '14':
      massa = 1.208;
      break;
    case '16':
      massa = 1.578;
      break;
    case '20':
      massa = 2.466;
      break;
    case '25':
      massa = 3.853;
      break;
    case '28':
      massa = 4.834;
      break;
  }
  return massa;
}

function setAmount() {
  const amount = document.querySelector('.amount-input');
  return amount.value;
}

function setNumber() {
  const number = document.querySelector('.number-input');
  return number.value;
}

function clearValue(val) {
  val.value = '';
}

function checkKeycode(e) {
  if (e.keyCode === 13) {
    getResult();
  } 
  if (e.keyCode === 27){
    amountInput.value = '';
  }
}