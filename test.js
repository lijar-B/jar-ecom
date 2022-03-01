var i =0;
var images = [];
var time = 2000;

images[0] = 'img/23/23 (1).jpg';
images[1] = 'img/23/23 (2).jpg';
images[2] = 'img/23/23 (3).jpg';
images[3] = 'img/23/23 (4).jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
        if(i == 0){
            
        }
    } else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;