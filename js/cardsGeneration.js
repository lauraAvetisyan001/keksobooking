import {dataHouse} from "./data.js";

import {offertPromise} from './fetch.js'

const cardTemplate = document.querySelector('#card'),
      avatar = cardTemplate.content.querySelector('.popup__avatar'),
      title = cardTemplate.content.querySelector('.popup__title'),
      adress = cardTemplate.content.querySelector('.popup__text--address'),
      type = cardTemplate.content.querySelector('.popup__type'),
      price = cardTemplate.content.querySelector('.popup__text--price'),
      capacity = cardTemplate.content.querySelector('.popup__text--capacity'),
      time = cardTemplate.content.querySelector('.popup__text--time'),
      description = cardTemplate.content.querySelector('.popup__description'),
      photos = cardTemplate.content.querySelector('.popup__photos'),
      featureParking = cardTemplate.content.querySelector('.popup__feature--parking'),
      featureWifi = cardTemplate.content.querySelector('.popup__feature--wifi'),
      featureDishwasher = cardTemplate.content.querySelector('.popup__feature--dishwasher'),
      featureWasher = cardTemplate.content.querySelector('.popup__feature--washer'),
      featureElevator = cardTemplate.content.querySelector('.popup__feature--elevator'),
      featureConditioner = cardTemplate.content.querySelector('.popup__feature--conditioner');


function getFeatures(){
    for(let i = 0; i < dataHouse.length; i++){
        if(!dataHouse[i].offer.features.includes('wifi')){
            featureWifi.classList.add('hidden');
        } else if(!dataHouse[i].offer.features.includes('parking')){
            featureParking.classList.add('hidden');
        } else if(!dataHouse[i].offer.features.includes('dishwasher')){
            featureDishwasher.classList.add('hidden');         
        } else if(!dataHouse[i].offer.features.includes('washer')){
            featureWasher.classList.add('hidden');    
        } else if(!dataHouse[i].offer.features.includes('elevator')){
            featureElevator.classList.add('hidden'); 
        } else{
            featureConditioner.classList.add('hidden'); 
        }
    }};


function createPhotos(cardPhotos){
    photos.innerHTML = ''
    for(let i=0; i < cardPhotos.length; i++){      
    const el = document.createElement('img');
    el.setAttribute('width', '45'); 
    el.setAttribute('height', '40');
    el.setAttribute('alt', 'Фотографія житла');
    el.className = "popup__photo";
    el.setAttribute('src', cardPhotos[i]);
    photos.appendChild(el)
    }
} 


const fragment = new DocumentFragment();

// export function getCards(el){
  
//       return offertPromise.map((el) => createCards(el));
    
// }

export function createCards(el){
    const cardTemplateClone = cardTemplate.content.cloneNode(true).firstElementChild
    avatar.src = el.author.avatar;
    title.textContent = el.offer.title;
    adress.textContent = el.offer.adress;
    type.textContent = el.offer.type;
    price.textContent = `${el.offer.price} тис/грн.`;
    capacity.textContent = `${el.offer.rooms} кімнати для ${el.offer.guests} гостей`;
    time.textContent =`Заїзд після ${el.offer.checkin}, виїзд до ${el.offer.checkout}`;
    getFeatures();
    description.textContent = el.offer.description; 
    createPhotos(el.offer.photos);
    // fragment.appendChild(cardTemplateClone) 
    return cardTemplateClone
} 