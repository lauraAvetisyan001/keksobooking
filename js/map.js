import {dataHouse} from './data.js';
import {cards} from './cardsGeneration.js';
import {centerTokioLoc} from './constants.js';

const map = L.map('map-canvas').setView([centerTokioLoc.x, centerTokioLoc.y], 13);

const myIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    });
     

const redMarker = L.marker([centerTokioLoc.x, centerTokioLoc.y], {icon: myIcon, draggable: true}).addTo(map);

redMarker.addEventListener('dragend', () => {
        const latlng = redMarker.getLatLng();
        redMarker.setLatLng(latlng);
        console.log(latlng)
      });
    
export function cardConnection(){
    const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    checkMap(layer)
}


for(let i=0; i < dataHouse.length; i++){
    const marker = L.marker([dataHouse[i].location.x, dataHouse[i].location.y]).addTo(map);
    marker.bindPopup(cards[i]);
}


function checkMap(layer){
    if (map.hasLayer(layer)) {
        console.log('Слой добавлен на карту');
      } else {
        console.log('Слой не добавлен на карту');
      }      
}