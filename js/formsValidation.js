import {sendOffert, offertPromise} from './fetch.js'

import {type} from './filtration.js'

const houseTypeSelect = document.querySelector('#type'),
      priceInput = document.querySelector('#price'), 
      timein = document.querySelector('#timein'),
      timeout = document.querySelector('#timeout'),
      form = document.querySelector('.ad-form'),
      mapFilters = document.querySelector('.map__filters'),
      capacity = document.querySelector('#capacity'),
      capacityOptions = capacity.querySelectorAll('option'),
      roomNumber = document.querySelector('#room_number'),
      roomNumberOptions = roomNumber.querySelectorAll('option'),
      formBtn = document.querySelector('.ad-form__submit'),
      title = document.querySelector('#title'); 


priceInput.placeholder = 1000;

export function getHouseTypeValue(e){
     switch(e.target.value){
        case 'house':
           const newOffert = offertPromise.filter((item)=>{
                return item.offer.type === 'house' && item.offer.price === priceInput.value && item.offer.rooms === roomNumber.value
            })
            console.log(newOffert)
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

function pageUnloaded(){
    form.classList = 'ad-form--disabled';
    mapFilters.classList = 'map__filters--disabled'
} pageUnloaded()


function pageLoaded(){
    form.classList = 'ad-form'
    mapFilters.classList = 'map__filters'
}


function changeCapacity(e){
    const capacityValue = capacity.querySelector(`option[value ='${e.target.value}']`)
    capacityValue.selected = true;
    capacityOptions[3].disabled = true;

    for (let i = 0; i < capacity.options.length - 1; i++) {
        const option = capacity.options[i];
    if(roomNumberOptions[3].selected){
        capacityOptions.forEach((el)=> el.disabled = true)
        capacityOptions[3].disabled = false
    } else if(option.value === e.target.value || option.value < e.target.value) {        
        option.disabled = false;
    } else {
        option.disabled = true;
    }
  }
}; 

function titleValidation(e){
    title.setCustomValidity('')
    if(title.value.length < 30){
        title.setCustomValidity('Минимум 30 символов')
    } else if(title.value.length > 100){
        title.setCustomValidity('Максимум 100 символов')
    } else {
        sendOffert()
    }
    title.reportValidity()
}

title.addEventListener('change', titleValidation)



formBtn.addEventListener('click', (e)=>{  
    e.preventDefault()
    titleValidation(e);
})


capacityOptions.forEach((el)=> el.disabled = true)
capacityOptions[2].disabled = false
capacityOptions[2].selected = true

roomNumber.addEventListener('change', changeCapacity)
window.addEventListener('load', pageLoaded)
priceInput.addEventListener('input', addMaxValue)
houseTypeSelect.addEventListener('change', getHouseTypeValue);
timeout.addEventListener('change', getCorrectTimeout);
timein.addEventListener('change', getCorrectTimein);