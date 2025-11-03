let endpoint = "https://newsapi.org/v2/everything?q=pop-culture&pageSize=100&sortBy=popularity&apiKey=49646352e47c458c9c9f6b4545cdacca"

const newsBtn = document.querySelector(".get-news").addEventListener('click', getNews)

// const musicSelect = document.querySelector("").addEventListener('click', setEndpointMusic)


const TOPIC_KEYWORDS = {
  music: ["music","album","song","single","artist","band","tour","concert","playlist","Spotify","Apple Music"],
  movies: ["movie","film","cinema","box office","director","actor","actress","trailer","premiere","Oscars"],
  gaming: ["game","gaming","PlayStation","Xbox","Nintendo","Steam","esports","DLC","RPG","FPS"],
  celebrity: ["celebrity","star","influencer","paparazzi","tabloid","scandal","gossip","viral"]
};

function filter(){
for(i=0; i<TOPIC_KEYWORDS.music.length; i++){
    console.log(TOPIC_KEYWORDS.music[i]);
    console.log(TOPIC_KEYWORDS.movies[i]);
    console.log(TOPIC_KEYWORDS.gaming[i]);
    console.log(TOPIC_KEYWORDS.celebrity[i]);


    
}
}




async function getNews(){
    console.log("getNews triggered");

    try{
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);


        filter();        
    }
    catch (err) {
        console.log(err)
        alert('Failed to get news');
    }
}