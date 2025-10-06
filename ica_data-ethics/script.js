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


//this gets the button from the document.
let themeButton = document.querySelector('#theme').addEventListener('click', theme);

function theme(){
    //console.log("theme works")

//I added this so that the correct parameter is being sent to the setTheme function, and runs the setTheme function
    if (localStorage.getItem('userTheme') == 'light' || ''){setTheme("dark"); console.log("set dark")}
    else {setTheme("light"); console.log("set light")}
}


// Save user's theme choice
function setTheme(theme) {
    let inTheme= theme;

//this is what checks the parameter input and sets the correct theme
    if(theme=='light'){
        theme = 'light'; console.log("set light 1")
    }
    else{
        theme = 'dark'; console.log("set dark 1")
    }

//this stores the theme choice to the local storage
    localStorage.setItem('userTheme', theme);
//this applies the theme to the body of the code (i didn't change the whole page since this assignment is here to show that I understand the material.)
    document.body.className = theme;
}


// Load saved theme on page load, this uses the load event listener to apply the stored theme
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});


