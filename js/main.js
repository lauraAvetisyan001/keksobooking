const announcementCount = 10;

function getRandomIntegerNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min)
};

function getRandomIFractionalNumber(min, max){
    return Math.random() * (max - min) + min
}

function addNearestAnnouncement(){
    return{
        author:{
            avatar: `img/avatars/user{{0${getRandomIntegerNumber(0, 8)}}}.png`,           
        },
        offer:{
            title: 'Something',
            address: '{{location.x}}, {{location.y}}',
            price: getRandomIntegerNumber(500, 5000),
            type: 'house',
            rooms: getRandomIntegerNumber(1, 10),
            guests: getRandomIntegerNumber(1, 15),
            checkin: '13:00',
            checkout: '13:00',
            features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
            description: 'Something about house',
            photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
        },
        location:{
            x: getRandomIFractionalNumber(35.65000, 35.70000),
            y: getRandomIFractionalNumber(139.70000, 139.80000)
        }
    }
}


const dataHouse = new Array(announcementCount).fill(null).map((e) => addNearestAnnouncement())