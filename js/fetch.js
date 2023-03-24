import {redMarker} from './map.js';

import {getRandomIntegerNumber} from './utils.js';

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
      title = document.querySelector('#title'),
      adressInput = document.querySelector('#address'),
      description = document.querySelector('#description'),
      features = document.querySelector('.ad-form__element');

export const offertPromise = await fetch('http://localhost:3000/offers')
    .then(function (resp) {
        return resp.json() 
    })  
      .catch((error) => {
        return `${error}`;        
      }); console.log(offertPromise)

// export function sendOffert(){
//   const url = 'http://localhost:3000/offert';


 
//     const data = {
//       title: title.value
    //   author: offertPromise[i].author.avatar,
    //   title: offertPromise[i].offer.title,
    //   adress: offertPromise[i].offer.adress,
    //   price: offertPromise[i].offer.price,
    //   type: offertPromise[i].offer.type,
    //   rooms: offertPromise[i].offer.rooms,
    //   guests: offertPromise[i].offer.guests,
    //   checkin: offertPromise[i].offer.checkin,
    //   checkout: offertPromise[i].offer.checkout,
    //   features: offertPromise[i].offer.features,
    //   description: offertPromise[i].offer.description,
    //   photos: offertPromise[i].offer.checkout,
    //   locationX: offertPromise[i].location.x,
    //   locationY: offertPromise[i].location.Y,
//     }
//   fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//   }
 
const sendData = async(url, photoData) =>{
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(photoData)
    })

    if(!response.ok){
        throw new Error('sorry')
    }
    return await response.json()
}     

export function sendOffert(){      

    const photoData = {
        author: {
            avatar: `img/avatars/user0${getRandomIntegerNumber(1, 8)}.png`,
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
        
        const objData = JSON.parse(data)
        console.log(objData)
    })
}