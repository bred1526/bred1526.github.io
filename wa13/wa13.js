let endpoint = "https://newsapi.org/v2/everything?q=pop-culture&pageSize=100&sortBy=popularity&apiKey=49646352e47c458c9c9f6b4545cdacca"

const newsBtn = document.querySelector(".get-news").addEventListener('click', getNews)

const display = document.querySelector(".display");
// const musicSelect = document.querySelector("").addEventListener('click', setEndpointMusic)

let currentArticle = '';
let saveArr = [];

const TOPIC_KEYWORDS = {
  music: ["music","album","song","single","band","tour","concert","playlist","Spotify","Apple Music"],
  movies: ["movie","film","cinema","box office","director","actor","actress","trailer","premiere","Oscars"],
  gaming: ["game","gaming","PlayStation","Xbox","Nintendo","Steam","esports","DLC","RPG","FPS"],
  celebrity: ["celebrity","star","influencer","paparazzi","tabloid","scandal","gossip","viral"]
};

async function getNews(){
    console.log("getNews triggered");

    try{
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);


        filter(json);        
    }
    catch (err) {
        console.log(err)
        alert('Failed to get news (Try Selecting A Different Filter)');
    }
}


function filter(json){

const topic = document.querySelector('input[name="topic"]:checked');

console.log("filter function = " + topic.value);

console.log("filter json test: " + json);

    let found = false;
    let counter = 0;
    // let position = 0;

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    let position = getRandomNumber(0, 99);


    console.log(position);


    do{

        if (position > 99){
            position = 0;
        }

        let combined = (json.articles[position].description + " " + json.articles[position].title).toLocaleLowerCase();
        console.log(combined);

        //topics filter
        if(topic.value == "music"){//Music Filter
            console.log("topic is music");

            for(i=0; i<10; i++)
            {
                console.log("Key word for loop: " + i)
                if(combined.includes(TOPIC_KEYWORDS.music[i].toLowerCase()))
                {
                    found=true;
                    console.log("article found with keyword: " + TOPIC_KEYWORDS.music[i]);
                }
            }
            
            // if(found==true){
            //     position = counter;
            //     console.log("position= " + position);
            // }
        }
        else if(topic.value == "movies"){//Movie Filter
            console.log("topic is movies");

            for(i=0; i<10; i++)
            {
                console.log("Key word for loop: " + i)
                if(combined.includes(TOPIC_KEYWORDS.movies[i].toLowerCase()))
                {
                    found=true;
                    console.log("article found with keyword: " + TOPIC_KEYWORDS.movies[i]);
                }
            }
            
            // if(found==true){
            //     position = counter;
            //     console.log("position= " + position);
            // }
        }
        else if(topic.value == "gaming"){//Gaming Filter
            console.log("topic is gaming");

            for(i=0; i<10; i++)
            {
                console.log("Key word for loop: " + i)
                if(combined.includes(TOPIC_KEYWORDS.gaming[i].toLowerCase()))
                {
                    found=true;
                    console.log("article found with keyword: " + TOPIC_KEYWORDS.gaming[i]);
                }
            }
            
            // if(found==true){
            //     position = counter;
            //     console.log("position= " + position);
            // }
        }
        else if(topic.value == "celebrity"){//Celebrity Filter
            console.log("topic is celebrity");

            for(i=0; i<8; i++)
            {
                console.log("Key word for loop: " + i)
                if(combined.includes(TOPIC_KEYWORDS.celebrity[i].toLowerCase()))
                {
                    found=true;
                    console.log("article found with keyword: " + TOPIC_KEYWORDS.celebrity[i]);
                }
            }
            
            // if(found==true){
            //     position = counter;
            //     console.log("position= " + position);
            // }
        }

        counter++;  
        position++;      
    }while(found == false && counter < 100)

    console.log("position= " + position);

    currentArticle = json.articles[position] || "";
    displayText(json.articles[position]) || "";


// for(i=0; i<TOPIC_KEYWORDS.music.length; i++){
//     console.log(TOPIC_KEYWORDS.music[i]);
//     console.log(TOPIC_KEYWORDS.movies[i]);
//     console.log(TOPIC_KEYWORDS.gaming[i]);
//     console.log(TOPIC_KEYWORDS.celebrity[i]);
// }
}


function displayText(json){
    display.innerHTML = `
    <h2>Title</h2>
    <p>${json.title}</p>

    <br>

    <h2>Description</h2>
    <p>${json.description}</p>

    <br>

    <h2>Link</h2>
    <a href=${json.url}>Web Link</a>

    <br>
    <br>

    <h2>Content Preview:</h2>
    <p>${json.content}</p>
    `;

 
    display?.classList.remove(".show");
    display.classList.add(".show");
}

const saveButton = document.querySelector(".save-news").addEventListener('click', saveArticle)



function saveArticle(){



    if(currentArticle != '')
    {

        saveArr.push(currentArticle);

        // console.log(joke_arr[0].setup);
        // console.log(joke_arr[0].punchline);
        
        for(i=0; i<saveArr.length; i++)
        {
            console.log("save position:" + i);
            console.log(saveArr[i]);
        }


        localStorage.setItem('saveArr', JSON.stringify(saveArr));
        
        console.log(localStorage.getItem("saveArr") + "===LOCAL STORAGE PULLED===");

    }
}

loadBTN = document.querySelector(".load-news").addEventListener("click", loadArticle);
const div = document.querySelector(".saved-display");

function loadArticle(){
    
    console.log("loadArticle Triggered");
    let json = JSON.parse(localStorage.getItem("saveArr")) || [];
    div.innerHTML = '';


    for(i=0; i<json.length ;i++)
    {
        hd = document.createElement('div');

        hd.innerHTML = `
        <br>
        <h2>Title</h2>
        <p>${json[i].title}</p>

        <br>

        <h2>Description</h2>
        <p>${json[i].description}</p>

        <br>

        <h2>Link</h2>
        <a href=${json[i].url}>Web Link</a>

        <br>
        <br>

        <h2>Content Preview:</h2>
        <p>${json[i].content}</p>
        <br><br>
        `;

        div.appendChild(hd);
        
        // display.innerHTML = `
        // <h2>Title</h2>
        // <p>${json.title}</p>

        // <br>

        // <h2>Description</h2>
        // <p>${json.description}</p>

        // <br>

        // <h2>Link</h2>
        // <a href=${json.url}>Web Link</a>

        // <br>
        // <br>

        // <h2>Content Preview:</h2>
        // <p>${json.content}</p>
        // `;
    }
}

const clearButton = document.querySelector(".clear-news").addEventListener('click', clearStorage);

function clearStorage(){
    localStorage.setItem("saveArr", []);
    console.log("Storage Cleared:");
    console.log(localStorage.getItem("saveArr"))
    div.innerHTML="<h1>Saved News</h1>";
}