// var i = Math.floor(Math.random() * 6) + 1;
var i = 0;
var images = [];
var time = 2000;

images[0] = 'img/Ma Gar Gar Food And Drink Shop/shop.jpg';
images[1] = 'img/Kyainge Tong Vapes And Pod Zone/shop.jpg';
images[2] = 'img/15/shop.jpg';
images[3] = 'img/9/shop.jpg';
images[4] = 'img/39/shop.jpg';
images[5] = 'img/32/32 (5).jpg';
images[6] = 'img/40/shop.jpg';




function changeImg(){
    document.slide.src = images[i];
    

        if(i==0){
            document.getElementById("changeUrl").href = "MaGaGaFoodAndDrinkShop.html";
            // document.getElementById("changeUrlGotoShop").href = "julie.html";
            document.getElementById("choiceShopName").innerHTML = "Ma Gar Gar Food & Drink Shop"
            i++;
            }
        else if(i==1){
            document.getElementById("changeUrl").href = "KyaingeTongVapesAndPodZone.html";
            // document.getElementById("changeUrlGotoShop").href = "julie.html";
            document.getElementById("choiceShopName").innerHTML = "Kyainge Tong Vape & Pod Zone"

            i++;
        }
        else if(i==2){
            document.getElementById("changeUrl").href = "julie.html";
           
            document.getElementById("choiceShopName").innerHTML = "Julie မာလာရှမ်းကော"

            i++;
        }
        else if(i==3){
            document.getElementById("changeUrl").href = "honey.html";

            document.getElementById("choiceShopName").innerHTML = "Honey"

            i++;
        }
        else if(i==4){
            document.getElementById("changeUrl").href = "tachileik_steak_house.html";
            
            document.getElementById("choiceShopName").innerHTML = "Tachileik Steak House"

            i++;
        }
        else if(i==5){
            document.getElementById("changeUrl").href = "ygn.html";
            
            document.getElementById("choiceShopName").innerHTML = "YGN ဝက်သားတုတ်ထိုး"

            i++;
        }
        else if(i==6){
            document.getElementById("changeUrl").href = "little_prince.html";
            
            document.getElementById("choiceShopName").innerHTML = "Little Prince (little P)"

            i=0;
            
        }
        
        
    setTimeout("changeImg()", time);
}

window.onload = changeImg;