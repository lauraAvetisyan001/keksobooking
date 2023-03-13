import { dataHouse } from "./data.js";

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
      featureConditioner = cardTemplate.content.querySelector('.popup__feature--conditioner'),
      mapCanvas = document.querySelector('#map-canvas');

function getFeatures(){
      for(let i = 0; i < dataHouse.length; i++){
            if(!dataHouse[i].offer.features.includes('wifi')){
                featureWifi.classList.add('hidden')
            } else if(!dataHouse[i].offer.features.includes('parking')){
                featureParking.classList.add('hidden')
            } else if(!dataHouse[i].offer.features.includes('dishwasher')){
                featureDishwasher.classList.add('hidden')                
            } else if(!dataHouse[i].offer.features.includes('washer')){
                featureWasher.classList.add('hidden')    
            } else if(!dataHouse[i].offer.features.includes('elevator')){
                featureElevator.classList.add('hidden') 
            } else{
                featureConditioner.classList.add('hidden') 
            }
    }}


function createPhotos(cardPhotos){
    for(let i=0; i < cardPhotos.length; i++){      
    const el = document.createElement('img');
    el.setAttribute('width', '45'); 
    el.setAttribute('height', '40');
    el.setAttribute('alt', 'Фотографія житла');
    el.className = "popup__photo";
    el.setAttribute('src', cardPhotos[i])
    photos.appendChild(el)
    }
} 

function createCard(el){
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
    const cardTemplateClone = cardTemplate.content.cloneNode(true);
    mapCanvas.appendChild(cardTemplateClone)
} 


export const cards = dataHouse.slice(0, 1).map((el) => createCard(el));