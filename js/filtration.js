import {offertPromise} from "./fetch.js";
import {updateMarkers, layerGroup} from './map.js'


const type = document.querySelector('#housing-type');
const mapFiltersContainer = document.querySelector('.map__filters');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const price = document.querySelectorAll('#housing-price option');
const checkbox = document.querySelectorAll('.map__checkbox'); console.log(checkbox)


export function getCheckedCheckboxes(){
    for(let i=0; i < checkbox.length; i++){        
          const checkedBox = checkbox[i]
          return checkedBox
}
}


export function getCheckedFeatures(){
   
    
            
    let checkedFeature
        for(let i=0; i < checkbox.length; i++){        
            if(checkbox[i].checked){
                 checkedFeature += `${checkbox[i].value}, `
                }
            }
            return checkedFeature  
            
        }

export function getFilteredOffers(){    
    const checkedBox = getCheckedCheckboxes(); console.log(checkedBox.value)
    const filterCriteria = {
        type: type.value,
        rooms: rooms.value,
        guests: guests.value,
       
    }  


const checkedFeature = getCheckedFeatures();  console.log(checkedFeature)

    const filteredArray = offertPromise.filter(item=>{
        return (type.value === 'any' || item.offer.type == type.value) &&
               (rooms.value === 'any' || item.offer.rooms == rooms.value) &&
               (guests.value === 'any' || item.offer.guests == guests.value) &&
               (item.offer.features.includes(checkedFeature))
}); 




return filteredArray;
} 

mapFiltersContainer.addEventListener('change', ()=>{   
    getFilteredOffers()  
    updateMarkers(layerGroup)
 
 
    
})





// const priceEntries = Object.entries(filterCriteria.price);

 // const priceText = price[1].innerText.match(/\d+/g).map(num => parseInt(num));
    
    // const currentValue = e.target.value; 
    // const currentSelectName = e.target.name.split("-")[1]   

    // function getPriceText(){
    //     let priceText = [];
    //      for(let i=1; i<price.length; i++){
    //         const priceTexto = price[i].innerText.match(/\d+/g).map(num => parseInt(num));
    //          priceText.push(priceTexto)
    
    //       }
    //       return priceText
    // }

//    (filterCriteria.price.value == 'any' || item.offer.price <= filterCriteria.price.low || item.offer.price <= filterCriteria.price.high ) 

// price: {
//     value: price.value,
//     middle: priceText1,
//     low: priceText2[0],
//     high: priceText3[0],
// }


// const [priceText1, priceText2, priceText3] = getPriceText();