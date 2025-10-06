var contactModal = document.getElementById("contact-modal");
var modalButton = document.getElementById("contact-expand-button");
var closeContactModal = document.getElementsByClassName("close-modal")[0];

modalButton.onclick = function(){
    contactModal.style.display = "block";
}

closeContactModal.onclick = function(){
  contactModal.style.display = "none";
}

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

let userSubmit = document.querySelector('.log-in');
let nameDisplay = document.querySelector('.name-display');
let logOut = document.querySelector('#log-out');
let username = document.querySelector('#username');

userSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    const userName = document.getElementById('nameInput').value;

        username.textContent = 'Hello, ' + userName +'!'; 
        console.log(userName);
        localStorage.setItem('userName', userName);
        userSubmit.classList.add('hide');
        nameDisplay.classList.remove('hide');
});

logOut.addEventListener('click', function(){
    localStorage.removeItem('userName');
    userSubmit.classList.remove('hide');
    nameDisplay.classList.add('hide');
});

window.addEventListener('load', function(){
    let check = localStorage.getItem('userName');
    if(!check){
        userSubmit.classList.remove('hide');
        nameDisplay.classList.add('hide');
    }
    else{
        username.textContent = 'Hello, ' + localStorage.getItem('userName') +'!';
        userSubmit.classList.add('hide');
        nameDisplay.classList.remove('hide');
    }
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
        // theme = 'light'; console.log("set light 1")
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
    else{
        // theme = 'dark'; console.log("set dark 1")
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }

    console.log("post if/else - setTheme")
//this stores the theme choice to the local storage
    localStorage.setItem('userTheme', theme);
//this applies the theme to the body of the code (i didn't change the whole page since this assignment is here to show that I understand the material.)
    

// document.body.className = theme;
}


// Load saved theme on page load, this uses the load event listener to apply the stored theme
window.addEventListener('load', function() {
    const theme = localStorage.getItem('userTheme') || 'light';
    console.log("loader" + theme);
    if(theme=='light'){
        // theme = 'light'; console.log("set light 1");
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
    }
    else{
        // theme = 'dark'; console.log("set dark 1");
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    }
    // document.body.className = savedTheme;
});