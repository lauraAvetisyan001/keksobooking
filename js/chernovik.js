const houseTypeSelect = document.querySelector('#type'),
      houseType = houseTypeSelect.querySelectorAll('option'),
      priceInput = document.querySelector('#price'); 

function getHouseTypeValue(e){

     switch(e.target.value){
        case 'house':
            priceInput.placeholder = 5000;
            priceInput.setAttribute('min', 5000); 
        break;
        case 'flat': 
        priceInput.placeholder = 1000;
            priceInput.setAttribute('min', 1000)
        break;
        case 'palace':
            priceInput.placeholder = 10000;
            priceInput.setAttribute('min', 10000)
        break;
        default:
            priceInput.placeholder = 0
            priceInput.setAttribute('min', 0)
     }

}

houseTypeSelect.addEventListener('change', getHouseTypeValue);

priceInput.addEventListener('input', ()=>{
    priceInput.setCustomValidity('')
    if(priceInput.value > 1000000){
        priceInput.setCustomValidity('Максимальная цена 1000000 грн')
    }
        priceInput.reportValidity()
})

// const timein = document.querySelector('#timein'),
//       timeinOptions = timein.querySelectorAll('option'),
//       timeout = document.querySelector('#timeout'),
//       timeoutOptions = timeout.querySelectorAll('option');


// function getCorrectTimeout(e){
// console.log(e.target.value)
//     switch(e.target.value){
//         case '12:00':            
//                 timeoutOptions[0].selected = true;            
//         break;
//         case '13:00':
//                 timeoutOptions[1].selected = true;
//         break;
//         default:
//                 timeoutOptions[2].selected =  true;
//     }   
// } 

// function getCorrectTimein(e){
//     switch(e.target.value){
//         case '12:00':
//             timeinOptions[0].selected = true;
//         break;
//         case '13:00':
//             timeinOptions[1].selected = true;
//         break;
//         default:
//             timeinOptions[2].selected = true;
//     }
// }


// timein.addEventListener('change', getCorrectTimeout);

// timeout.addEventListener('change', getCorrectTimein)

const title = document.querySelector('#title');  

function titleValidation(){
    if(title.value.length < 30){
        title.setCustomValidity('Минимум 30 символов')
    } else if(title.value.length > 100){
        title.setCustomValidity('Максимум 100 символов')
    }
    title.reportValidity()
}
title.addEventListener('change', titleValidation)



// const capacity = document.querySelector('#capacity'),
//       capacityOptions = capacity.querySelectorAll('option'),
//       roomNumber = document.querySelector('#room_number'),
//       roomNumberOptions = roomNumber.querySelectorAll('option');


// roomNumber.addEventListener('change', (e) => {

//       const capacityvalue = capacity.querySelector(`option[value ='${e.target.value}']`)
//       capacityvalue.selected = true
//     capacityOptions[3].disabled = true
//     for (let i = 0; i < capacity.options.length - 1; i++) {
//         const option = capacity.options[i];
//     if(roomNumberOptions[3].selected){
//         capacityOptions.forEach((el)=> el.disabled = true)
//         capacityOptions[3].disabled = false
//     } else if(option.value === e.target.value || option.value < e.target.value) {        
//       option.disabled = false;
//     } else {
//         option.disabled = true;
//     }
//   }
// });

// function disabledOption(e){
//         for(let i=0; i < capacityOptions.length; i++){
//             capacityOptions[i].disabled = false;
//         } 
//         const roomNumberValue = e.target.value;
//         const capacityvalue = capacity.querySelector(`option[value ='${roomNumberValue}']`)
//         capacityvalue.selected = true
//         switch(e.target.value){
//             case '1':
//                 capacityOptions.forEach((el)=> el.disabled = true)
//                 capacityOptions[2].disabled = false; 
//             break;
//             case '2':               
//                 capacityOptions[0].disabled = true;
//                 capacityOptions[3].disabled = true;
//             break;
//             case '3':
//                 capacityOptions[3].disabled = true;
//             break;
//             default:
//                 capacityOptions.forEach((el)=> el.disabled = true)
//                 capacityOptions[3].disabled = false;
//                 capacityOptions[3].selected = true;
//         }
//     }

//     capacityOptions[2].selected = true;
//     capacityOptions.forEach((el)=> el.disabled = true);
//     capacityOptions[2].disabled = false;

// roomNumber.addEventListener('change', disabledOption)