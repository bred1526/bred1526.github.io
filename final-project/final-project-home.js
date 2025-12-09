let currentTheme='';

const themeBTN = document.querySelector('.theme-button');
themeBTN.addEventListener('click', changeTheme);
const pageBody = document.querySelector('body');
const summaryText = document.querySelector('.page-summary');
const nameDisplay = document.querySelector('.name');
const images = document.querySelectorAll('img');
const links = document.querySelectorAll('a');
const footer = document.querySelector('footer');
const dataClear = document.querySelector('.data-clear');

dataClear.addEventListener('click', function(){
    localStorage.clear();
});


function storeTheme(theme){
    localStorage.setItem('theme', theme)
};

window.addEventListener('load', function()
{
    console.log("window loaded");
    if(!localStorage.getItem('theme'))
    {
        currentTheme="night";
        storeTheme(currentTheme);
        console.log("default theme set")
        console.log(localStorage.getItem('theme'))
    }
    else if(localStorage.getItem('theme')=="day")
    {
        currentTheme="night"; //will be switched to day after change theme is triggered
        changeTheme();
        console.log('load theme is now day');
        console.log(this.localStorage.getItem('theme'));
    }
    else if(localStorage.getItem('theme')=="night")
    {
        currentTheme="night";
        console.log("load theme is night");
        console.log(this.localStorage.getItem('theme'));
    }
    // if(currentTheme=='')
    // {
    //     currentTheme="night";
    //     storeTheme(currentTheme);
    //     console.log("default theme set")
    // };
});

function changeTheme(){
    if(currentTheme=="night")
    {
        currentTheme="day";
        storeTheme(currentTheme);
        themeBTN.classList.remove('night');
        themeBTN.classList.add('day');
        pageBody.classList.remove('night')
        pageBody.classList.add('day');
        summaryText.classList.remove('night')
        summaryText.classList.add('day');
        nameDisplay.classList.remove('night')
        nameDisplay.classList.add('day');
        footer.classList.remove('night')
        footer.classList.add('day');

        links.forEach(a => {
            a.classList.remove('night')
            a.classList.add('day');
        });

        images.forEach(img => {
            img.classList.remove('night')
            img.classList.add('day');
        });

        console.log("changeTheme function: theme is now day")
    }
    else if(currentTheme=="day")
    {
        currentTheme="night";
        storeTheme(currentTheme);
        themeBTN.classList.remove('day');
        themeBTN.classList.add('night');
        pageBody.classList.remove('day')
        pageBody.classList.add('night');
        summaryText.classList.remove('day');
        summaryText.classList.add('night');
        nameDisplay.classList.remove('day');
        nameDisplay.classList.add('night');
        footer.classList.remove('day');
        footer.classList.add('night');

        links.forEach(a => {
            a.classList.remove('day')
            a.classList.add('night');
        });

        images.forEach(img => {
            img.classList.remove('day')
            img.classList.add('night');
        });

        console.log("changeTheme function: theme is now night")
    }
};