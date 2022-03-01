// Get the container element
var btnContainer = document.getElementById("categoryBar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("category");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// switch pages within a single html file
function show(shown, hidden1, hidden2, hidden3,hidden4,hidden5) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden1).style.display='none';
  document.getElementById(hidden2).style.display='none';
  document.getElementById(hidden3).style.display='none';
  document.getElementById(hidden4).style.display='none';
  document.getElementById(hidden5).style.display='none';
  return false;
}

// fixed top when it comes to top
// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//           document.getElementById('categoryBar').classList.add('fixed-bottom');
//           // add padding top to show content behind navbar
//           navbar_height = document.querySelector('.category-bar').offsetHeight;
//           document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('categoryBar').classList.remove('fixed-bottom');
//            // remove padding top from body
//           document.body.style.paddingTop = '0';
//         } 
//     });
//   }); 


var i =0;
var images = [];
var time = 3000;

images[0] = 'img/23/23 (1).jpg';
images[1] = 'img/23/23 (2).jpg';
images[2] = 'img/23/23 (3).jpg';
images[3] = 'img/23/23 (4).jpg';



function changeImg(){
    document.slide.src = images[i];
    

     if(i==0){
        document.getElementById("changeUrl").href = "julie.html";
        document.getElementById("choiceShopName").innerHTML = "Julie မာလာရှမ်းကော"
        i++;
        }
        else if(i==1){
            document.getElementById("changeUrl").href = "ygn.html";
        document.getElementById("choiceShopName").innerHTML = "ဝက်သားတုတ်ထိုး"

            i++;
        }
        else if(i==2){
            document.getElementById("changeUrl").href = "index.html";
        document.getElementById("choiceShopName").innerHTML = "နားမား"

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