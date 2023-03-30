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
      checkbox = features.querySelectorAll('input'); console.log(checkbox)


features.addEventListener('change', ()=>{
        const checkedFeature = getCheckedFeatures();  
        createFeaturesArray()

    })

function createFeaturesArray(){
        const checkedFeature = getCheckedFeatures(); 
        const featuresArray = checkedFeature.split(',');
        const updatedArr = featuresArray.map(function(item) {
            return item.replace('undefined', '');
          });
          console.log(updatedArr)
          return updatedArr
    } 

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


function getCheckedFeatures(){                
    let checkedFeature
        for(let i=0; i < checkbox.length; i++){        
            if(checkbox[i].checked){
                 checkedFeature += `${checkbox[i].value},`
                }
            }
            return checkedFeature.split(",")             
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
            features: getCheckedFeatures(),
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