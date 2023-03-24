import {offertPromise} from "./fetch.js";

export const type = document.querySelector('#housing-type');
const mapFiltersContainer = document.querySelector('.map__filters');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const mapFilters = document.querySelectorAll('.map__filter');



function getFilteredOffers(e){

    const filterCriteria = {
        type: type.value,
        rooms: rooms.value,
        guests: guests.value,
    }

    const currentValue = e.target.value;
    const currentSelectName = e.target.name.split("-")[1]
    console.log(currentSelectName)

    const filteredOffer = offertPromise.filter(item=>{

        return (filterCriteria.rooms !== 'any' && item.offer.rooms != filterCriteria.rooms)
            // if (`filterCriteria.${currentSelectName}` !== 'any' && `item.offer.${currentSelectName}` != `filterCriteria.${currentSelectName}`) {
            //   return false;
            // }

            // if (filterCriteria.rooms !== 'any' && item.offer.rooms != filterCriteria.rooms) {
            //   return false;
            // }            
            
            // if (filterCriteria.guests !== 'any' && item.offer.guests != filterCriteria.guests) {
            //   return false;
            // }
            //   return true;
        //   });

    // if(currentValue !== 'any'){        
    //         return item.offer.rooms === rooms.value && 
    //         item.offer.type === type.value && 
    //         item.offer.guests === guests.value
    //     } else {
    //         for(let i=0; i<e.target.length; i++){
    //             const currentSelectName = e.target.name.split("-")[1]
    //             return `item.offer.${currentSelectName}` === `offertPromise.offer.${currentSelectName}` && 
    //             `item[i].offer.${currentSelectName}` === `${currentSelectName}.value`
               

    //         }
    //     }

        
})

console.log(filteredOffer)
}


mapFiltersContainer.addEventListener('change', getFilteredOffers)