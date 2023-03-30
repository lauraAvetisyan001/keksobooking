import {offertPromise} from "./fetch.js";
import {updateMarkers, layerGroup} from './map.js'


const type = document.querySelector('#housing-type'),
      mapFiltersContainer = document.querySelector('.map__filters'),
      rooms = document.querySelector('#housing-rooms'),
      guests = document.querySelector('#housing-guests'),
      checkbox = document.querySelectorAll('.map__checkbox');

export function getCheckedFeatures(){            
    let isAnyCheckboxChecked = false;
    let checkedFeatureValue;     
        for(let i=0; i < checkbox.length; i++){   
            if(checkbox[i].checked){
                isAnyCheckboxChecked = true;
                checkedFeatureValue = checkbox[i].value;
                }                
            } 
        return [checkedFeatureValue, isAnyCheckboxChecked]             
    }

export function getFilteredOffers(){    

    const priceOption = document.querySelector('#housing-price').value; 
    
    function getPriceRange(priceOption) {
        switch (priceOption) {
          case 'low':
            return { min: 0, max: 10000 };
          case 'middle':
            return { min: 10000, max: 50000 };
          case 'high':
            return { min: 50000, max: Infinity };
          default:
            return { min: 0, max: Infinity };
        }
      }


const [checkedFeatureValue, isAnyCheckboxChecked] = getCheckedFeatures(); 

    const filteredArray = offertPromise.filter(item=>{
    let isPriceMatched = true;

    if (priceOption !== 'any') {
      const priceRange = getPriceRange(priceOption);
      isPriceMatched = item.offer.price >= priceRange.min && item.offer.price <= priceRange.max;
    }
      
        return (type.value === 'any' || item.offer.type == type.value) &&
               (rooms.value === 'any' || item.offer.rooms == rooms.value) &&
               (guests.value === 'any' || item.offer.guests == guests.value) &&
               (item.offer.features.includes(checkedFeatureValue) || (!isAnyCheckboxChecked)) &&
               (isPriceMatched)
}); 
return filteredArray;
} 

mapFiltersContainer.addEventListener('change', ()=>{   
    getFilteredOffers()  
    updateMarkers(layerGroup)
})