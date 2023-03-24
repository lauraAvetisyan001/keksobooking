import {dataHouse} from './data.js';
import {createCards} from './cardsGeneration.js';
import {centerTokioLoc} from './constants.js';
import {offertPromise} from './fetch.js'


const adressInput = document.querySelector('#address');

const map = L.map('map-canvas').setView([centerTokioLoc.x, centerTokioLoc.y], 13);

const myIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    });
     

export const redMarker = L.marker([centerTokioLoc.x, centerTokioLoc.y], {icon: myIcon, draggable: true}).addTo(map);

redMarker.addEventListener('drag', () => {
        const latlng = redMarker.getLatLng();
        redMarker.setLatLng(latlng);
        adressInput.value = `${latlng.lat}, ${latlng.lng}`; 
      });
    
export function cardConnection(){
    const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

export function createMarkers(){
    const cards = offertPromise.map((el) => createCards(el))
    for(let i=0; i < offertPromise.length; i++){
        const marker = L.marker([offertPromise[i].location.x, offertPromise[i].location.y]).addTo(map);
        marker.bindPopup(cards[i]);
    }
}