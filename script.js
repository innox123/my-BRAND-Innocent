// Mobile menu
const sidenav = document.getElementById('sidenav');
const show_menu_btn = document.getElementById('show_menu_btn');
const show_menu_icon = document.getElementById('show_menu_icon');
function shownav(){
sidenav.style.display='flex';
show_menu_icon.setAttribute('class', 'fa fa-close');
show_menu_btn.setAttribute('onclick', 'hidenav()')
}
function hidenav(){
sidenav.style.display='none';
show_menu_btn.setAttribute('onclick', 'shownav()')
show_menu_icon.setAttribute('class', 'fa fa-bars');
}

window.addEventListener('resize', function() {
if (window.innerWidth > 991) {
    sidenav.style.display='none';
    show_menu_btn.setAttribute('onclick', 'shownav()')
    show_menu_icon.setAttribute('class', 'fa fa-bars');
}
});


// Contact form Validation
var isValid = true;
document.getElementById('email').addEventListener('input', function() {
    var emailInput = this.value.trim();
    var emailError = document.getElementById('emailError');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        emailError.textContent = '';
        emailError.style.display = 'none';
        isValid = true;
    }
    else if(emailInput === ''){
        emailError.textContent = 'Email is blank';
        emailError.style.display = 'block';
        isValid = false;
    }
    else {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        isValid = false;
    }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
emailInput = document.getElementById('email').value;
messageInput = document.getElementById('message').value;
var messageError = document.getElementById('messageError');
if(!isValid){
    emailError.textContent = 'Invalid email format';
    emailError.style.display = 'block';
    event.preventDefault();
}
if(emailInput === ''){
    emailError.textContent = 'Email is blank';
    emailError.style.display = 'block';
    event.preventDefault();
}
if(messageInput === ''){
    messageError.textContent = 'Message is empty';
    event.preventDefault();
}
});

function viewMore(){
    var section = document.getElementById('projects_container');
    var heightVal = section.offsetHeight;
    var newHeight = heightVal + 400;
    section.style.height = newHeight + 'px';
}

// Slider
// let currentIndex = 0;

// function showSlide(index) {
//     const slider = document.querySelector('.projects-column');
//     const slides = document.querySelectorAll('.project-card');
//     const totalSlides = slides.length;

//     if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (index >= totalSlides) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }

//     const translateValue = -currentIndex * 100 + '%';
//     slider.style.transform = 'translateX(' + translateValue + ')';
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// Automatically advance to the next slide every 3 seconds
// setInterval(nextSlide, 3000);








// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }