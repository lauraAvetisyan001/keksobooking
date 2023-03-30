import {redMarker} from './map.js';
import {userAvatar} from './uploadPhoto.js';


const houseTypeSelect = document.querySelector('#type'),
      priceInput = document.querySelector('#price'), 
      timein = document.querySelector('#timein'),
      timeout = document.querySelector('#timeout'),
      capacity = document.querySelector('#capacity'),
      roomNumber = document.querySelector('#room_number'),
      title = document.querySelector('#title'),
      adressInput = document.querySelector('#address'),
      description = document.querySelector('#description'),
      successTmpl = document.querySelector('#success'),
      main = document.querySelector('main'),
      errorTmpl = document.querySelector('#error'),
      features = document.querySelector('.features'),
      checkbox = features.querySelectorAll('input');


export const offertPromise = await fetch('http://localhost:3000/offers')
    .then(function (resp) {
        return resp.json() 
    })  
      .catch((error) => {
        return `${error}`;        
      }); 
 
const sendData = async(url, photoData) =>{
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(photoData)
    })
if(!response.ok){
    throw new Error('Ooops')
}
    return await response.json()
}     


export function sendOffert(){      
    const photoData = {
        author: {
            avatar: userAvatar.src,
        },
        offer: {
            adress: adressInput.value,
            checkin: timein.value,
            checkout: timeout.value,
            title: title.value,
            type: houseTypeSelect.value,
            price: priceInput.value,       
            guests: capacity.value,
            rooms: roomNumber.value,
            features: [],
            description: description.value,
            photos: [],
        },
        location: {
            x: redMarker.getLatLng().lat,
            y: redMarker.getLatLng().lng,
        }
    }; 

JSON.stringify(photoData);
sendData('http://localhost:3000/offers', photoData)
    .then((data)=>{        
        JSON.parse(data)           
    })
    
}

export function showSuccessMsg(){
   const cloneTmpl = successTmpl.content.cloneNode(true);
   main.appendChild(cloneTmpl)
}


export function showErrorMsg(){
    const cloneTmpl = errorTmpl.content.cloneNode(true);
    main.appendChild(cloneTmpl)
    const errorBtn = main.querySelector('.error__button');
    errorBtn.addEventListener('click', ()=>{
        main.querySelector('.error').classList.add('hidden');        
    })
}
