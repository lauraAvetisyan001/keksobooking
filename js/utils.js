export function getRandomIntegerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
  };
  
export function getRandomIFractionalNumber(min, max){
      return Math.random() * (max - min) + min
  }
  
export function shuffle(a){
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }