let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia);

let punchlineBtn = document.querySelector("#js-tweet").addEventListener('click', newAnswer);

let saveBTN = document.querySelector("#js-save").addEventListener('click', saveJoke);

let savedDisp = document.getElementById("saved-jokes");

let clearBtn = document.getElementById("js-clear").addEventListener('click', clearJokes);

let joke_arr = [];

let current = {
    setup: "",
    punchline: "",
}

const endpoint = "https://official-joke-api.appspot.com/random_joke"


async function newTrivia() {
    console.log("Success");

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);

        displayTrivia(json["setup"]);

        current.setup = json["setup"];
        current.punchline = json["punchline"];

        console.log(current.setup);
        console.log(current.punchline);

    } catch (err) {
        console.log(err)
        alert('Failed to get new trivia');
    }
}

function displayTrivia(setup) {
    const setupText = document.querySelector("#js-quote-text");

    setupText.textContent = setup;
    const punchlineText = document.querySelector("#js-answer-text").textContent = "";
}

function newAnswer(){
    // console.log("Success == punchline!");
    const punchlineText = document.querySelector("#js-answer-text");
    punchlineText.textContent = current.punchline;
}

function saveJoke(){
    // console.log(current.setup);
    // console.log(current.punchline);

    joke_arr.push({
        setup: current.setup,
        punchline: current.punchline
    });

    // console.log(joke_arr[0].setup);
    // console.log(joke_arr[0].punchline);
    

    localStorage.setItem('jokeArr', JSON.stringify(joke_arr));
    
    loadJokes();
}


function loadJokes(){

    joke_arr = JSON.parse(localStorage.getItem('jokeArr')) || [];

    
    let html = "";

    for (let i = 0; i < joke_arr.length; i++) {
    html += `
        <div class="saved-jokes">
        <h1>${joke_arr[i].setup}</h1>
        <p>${joke_arr[i].punchline}</p>
        <br><br>
        </div>
    `;}

    savedDisp.innerHTML = html;
}


function clearJokes(){
    joke_arr = [];
    savedDisp.innerHTML = '';
    localStorage.setItem('jokeArr', joke_arr);
}

newTrivia();
loadJokes();
