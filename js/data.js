import { getRandomIFractionalNumber, getRandomIntegerNumber, shuffle } from "./utils.js";
import { announcementCount, announcementInfo } from "./constants.js";


function addNearestAnnouncement(){
    return{
        author:{
            avatar: `img/avatars/user{{0${getRandomIntegerNumber(0, 8)}}}.png`,           
        },
        offer:{
            title: announcementInfo.titleArray[getRandomIntegerNumber(1, announcementInfo.titleArray.length - 1)],
            address: '{{location.x}}, {{location.y}}',
            price: getRandomIntegerNumber(500, 5000),
            type: announcementInfo.typeArray[getRandomIntegerNumber(1, announcementInfo.typeArray.length - 1)],
            rooms: getRandomIntegerNumber(1, 10),
            guests: getRandomIntegerNumber(1, 15),
            checkin: announcementInfo.checkinArray[getRandomIntegerNumber(1, announcementInfo.checkinArray.length - 1)],
            checkout: announcementInfo.checkoutArray[getRandomIntegerNumber(1, announcementInfo.checkoutArray.length - 1)],
            features: shuffle(announcementInfo.featuresArray).slice(0, getRandomIntegerNumber(1, announcementInfo.featuresArray.length - 1)),
            description: announcementInfo.descriptionArray[getRandomIntegerNumber(1, announcementInfo.descriptionArray.length - 1)],
            photos: shuffle(announcementInfo.photosArray).slice(0, getRandomIntegerNumber(1, announcementInfo.photosArray.length - 1)),
        },
        location:{
            x: getRandomIFractionalNumber(35.65000, 35.70000),
            y: getRandomIFractionalNumber(139.70000, 139.80000)
        }
    }
}
export const dataHouse = new Array(announcementCount).fill(null).map(() => addNearestAnnouncement())