import {offertPromise} from "./fetch.js";

import {createMarkers} from './map.js'

const type = document.querySelector('#housing-type');
const mapFiltersContainer = document.querySelector('.map__filters');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const price = document.querySelectorAll('#housing-price option');

function getPriceText(){
    let priceText = [];
     for(let i=1; i<price.length; i++){
        const priceTexto = price[i].innerText.match(/\d+/g).map(num => parseInt(num));
         priceText.push(priceTexto)

      }
      return priceText
}

export function getFilteredOffers(){    
    const [priceText1, priceText2, priceText3] = getPriceText(); 
    const filterCriteria = {
        type: type.value,
        rooms: rooms.value,
        guests: guests.value,
        price: {
            value: price.value,
            middle: priceText1,
            low: priceText2[0],
            high: priceText3[0],
        }
    }

    const filteredArray = offertPromise.filter(item=>{

        return (filterCriteria.type == 'any' || item.offer.type == filterCriteria.type) &&
               (filterCriteria.rooms == 'any' || item.offer.rooms == filterCriteria.rooms) &&
               (filterCriteria.guests == 'any' || item.offer.guests == filterCriteria.guests) //&&
            //    (filterCriteria.price.value == 'any' || item.offer.price <= filterCriteria.price.low || item.offer.price <= filterCriteria.price.high )              
}); 

console.log(filteredArray)

return filteredArray;

}

mapFiltersContainer.addEventListener('change', ()=>{   
    getFilteredOffers()
    createMarkers()

})






// const priceEntries = Object.entries(filterCriteria.price);

 // const priceText = price[1].innerText.match(/\d+/g).map(num => parseInt(num));
    
    // const currentValue = e.target.value; 
    // const currentSelectName = e.target.name.split("-")[1]   