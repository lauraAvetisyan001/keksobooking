const houseTypeSelect = document.querySelector('#type'),
      priceInput = document.querySelector('#price'), 
      timein = document.querySelector('#timein'),
      timeout = document.querySelector('#timeout');


priceInput.placeholder = 1000;

export function getHouseTypeValue(e){
     switch(e.target.value){
        case 'house':
            priceInput.setAttribute('min', 5000); 
            priceInput.placeholder = 5000;
        break;
        case 'flat': 
            priceInput.setAttribute('min', 1000)
            priceInput.placeholder = 1000;
        break;
        case 'palace':
            priceInput.setAttribute('min', 10000)
            priceInput.placeholder = 10000;
        break;
        default:
            priceInput.setAttribute('min', 0)
            priceInput.placeholder = 0
        break;
     }
}


export function addMaxValue(){
    priceInput.setCustomValidity('')
    if(priceInput.value > 1000000){
        priceInput.setCustomValidity('Максимальная цена 1000000 грн')
    }
        priceInput.reportValidity()
}
    
function getCorrectTimeout(e){
    const selectedOptionValue = e.target.value;
    const timeinValue = timein.querySelector(`option[value='${selectedOptionValue}']`);
    timeinValue.selected = true;
}

function getCorrectTimein(e){
    const selectedOptionValue = e.target.value;
    const timeoutValue = timeout.querySelector(`option[value='${selectedOptionValue}']`);
    timeoutValue.selected = true;
}

priceInput.addEventListener('input', addMaxValue)
houseTypeSelect.addEventListener('change', getHouseTypeValue);
timeout.addEventListener('change', getCorrectTimeout);
timein.addEventListener('change', getCorrectTimein);