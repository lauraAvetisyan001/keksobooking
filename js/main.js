const announcementInfo = {
    titleArray: ['Something', 'Pri', 'Vetik'],
    typeArray: ['house', 'flat', 'bungalow', 'palace'],
    checkinArray: ['13:00', '14:00', '15:00'],
    checkoutArray: ['13:00', '14:00', '15:00'],
    featuresArray: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    descriptionArray: ['Something', 'about', 'house'],
    photosArray: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
}

const announcementCount = 10;

function getRandomIntegerNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min)
};

function getRandomIFractionalNumber(min, max){
    return Math.random() * (max - min) + min
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


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
const dataHouse = new Array(announcementCount).fill(null).map(() => addNearestAnnouncement())