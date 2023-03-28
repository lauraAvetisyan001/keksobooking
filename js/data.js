import { getRandomIFractionalNumber, getRandomIntegerNumber, shuffle } from "./utils.js";
import { announcementCount, announcementInfo } from "./constants.js";
import { ANNOUNCMENT_VALUES } from "./constants.js";

export function addNearestAnnouncement(){
    const locationAdress = {
        x: getRandomIFractionalNumber(35.65000, 35.70000),
        y: getRandomIFractionalNumber(139.70000, 139.80000)
    }
    return{
        author:{
            avatar: `img/avatars/user0${getRandomIntegerNumber(1, 8)}.png`,           
        },
        offer:{
            title: announcementInfo.titleArray[getRandomIntegerNumber(0, announcementInfo.titleArray.length - 1)],
            adress: `${locationAdress.x}, ${locationAdress.y}`,
            price: getRandomIntegerNumber(ANNOUNCMENT_VALUES.minPrice, ANNOUNCMENT_VALUES.maxPrice),
            type: announcementInfo.typeArray[getRandomIntegerNumber(0, announcementInfo.typeArray.length + 1)],
            rooms: getRandomIntegerNumber(ANNOUNCMENT_VALUES.minRoomsCount, ANNOUNCMENT_VALUES.maxRoomsCount),
            guests: getRandomIntegerNumber(ANNOUNCMENT_VALUES.minGuestsCount, ANNOUNCMENT_VALUES.maxGuestsCount),
            checkin: announcementInfo.checkinArray[getRandomIntegerNumber(0, announcementInfo.checkinArray.length - 1)],
            checkout: announcementInfo.checkoutArray[getRandomIntegerNumber(0, announcementInfo.checkoutArray.length - 1)],
            features: shuffle(announcementInfo.featuresArray).slice(0, getRandomIntegerNumber(1, announcementInfo.featuresArray.length)),
            description: announcementInfo.descriptionArray[getRandomIntegerNumber(1, announcementInfo.descriptionArray.length - 1)],
            photos: shuffle(announcementInfo.photosArray).slice(0, getRandomIntegerNumber(1, announcementInfo.photosArray.length + 1)),
        },
        location: {
            x: locationAdress.x,    
            y: locationAdress.y
    }}
}

export const dataHouse = new Array(announcementCount).fill(null).map(() => addNearestAnnouncement());

