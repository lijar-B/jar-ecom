// var i =0;
// var images = [];
// var time = 3000;

// images[0] = 'img/23/23 (1).jpg';
// images[1] = 'img/23/23 (2).jpg';
// images[2] = 'img/23/23 (3).jpg';
// images[3] = 'img/23/23 (4).jpg';



function changeImg(){
    document.slide.src = images[i];
    

     if(i==0){
        document.getElementById("changeUrl").href = "julie.html";
        document.getElementById("changeText").innerHTML = "Julie မာလာရှမ်းကော"
        i++;
        }
        else if(i==1){
            document.getElementById("changeUrl").href = "ygn.html";
        document.getElementById("changeText").innerHTML = "ဝက်သားတုတ်ထိုး"

            i++;
        }
        else if(i==2){
            document.getElementById("changeUrl").href = "index.html";
        document.getElementById("changeText").innerHTML = "နားမား"

            i++;
        }
        else if(i < images.length -1){
            i++;
            
            
        }
    else{
        i=0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;



