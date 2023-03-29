const userAvatarInput = document.querySelector('#avatar');
export const userAvatar = document.querySelector('.ad-form-header__preview img');
const uploadImageInput = document.querySelector('#images');
const uploadImage = document.querySelector('.ad-form__photo');


export function getUploadAvatar(){
const file = this.files[0];
const reader = new FileReader();

reader.onload = function(e){
userAvatar.src = e.target.result;
} 

reader.readAsDataURL(file)
}


userAvatarInput.addEventListener('change', getUploadAvatar);

export function getUploadImages(){
    const file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e){
    const image = new Image();
    image.src = e.target.result;
    image.width = 70;
    image.height = 70
    uploadImage.appendChild(image)
    } 
    
    reader.readAsDataURL(file) 
    }
    
    
uploadImageInput.addEventListener('change', getUploadImages);