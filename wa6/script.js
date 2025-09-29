const burger = document.querySelector('.burger');
const navVertical = document.querySelector('.nav-vertical-closed');
const spanToggle = burger.querySelectorAll('.toggle-span');
const cardDescription = document.querySelectorAll('.card-description');
const learningButton = document.querySelectorAll('.learning-card-toggle');

burger.addEventListener('click', function(){
    navVertical.classList.toggle('nav-vertical');
    spanToggle.forEach(el => el.classList.toggle('toggle-span-hide'));
    
    if (burger.getAttribute('aria-label') === 'Open navigation menu') {burger.setAttribute('aria-label', 'Close navigation menu');} 
    else{burger.setAttribute('aria-label', 'Open navigation menu');}
});

learningButton.forEach((toggle) => {
    toggle.addEventListener('click', () => {
            toggle.parentElement.classList.toggle('card-description-closed');

        if (toggle.parentElement.classList.contains('card-description-closed')){toggle.setAttribute('aria-label', 'Open Card');} 
        else {toggle.setAttribute('aria-label', 'Close Card');}
    });
});

var contactModal = document.getElementById("contact-modal");
var modalButton = document.getElementById("contact-expand-button");
var closeContactModal = document.getElementsByClassName("close-modal")[0];

modalButton.onclick = function(){
    contactModal.style.display = "block";
}

closeContactModal.onclick = function() {
  contactModal.style.display = "none";
}