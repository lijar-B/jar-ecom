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
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
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