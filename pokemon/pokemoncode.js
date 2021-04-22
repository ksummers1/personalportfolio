const pokeGrid = document.querySelector('.pokeGrid');
const loadButton = document.querySelector('.loadPokemon');

loadButton.addEventListener('click', () => {
    loadPage();
});

async function getAPIData(url) {
    try {
        const response = await fetch(url); //try getting data from API at the url
        const data = await response.json(); //convert the response into JSON
        return data; //return the data from the function to whatever called it
    } catch (error) {
        //must have been an error
        console.log(error);
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then((data) => {
        for (const singlePokemon of data.results) {
            console.log(singlePokemon);
            populatePokeCard(singlePokemon);
        }
    });
}

function populatePokeCard(singlePokemon) {
    console.log(singlePokemon);
    let pokeScene = document.createElement('div');
    pokeScene.className = 'scene';
    let pokeCard = document.createElement('div');
    pokeCard.className = 'card';

    pokeCard.appendChild(populateCardFront(singlePokemon));
    pokeScene.appendChild(pokeCard);
    pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div');
    pokeGrid.className = 'card_face card_face--front';
    let frontLabel = document.createElement('p');
    frontLabel.textContent = pokemon.name;
    let frontImage = document.createElement('img');
    frontImage.src = 'images/001.png';

    pokeFront.appendChild(frontLabel);
    pokeFront.appendChild(frontImage);
    return pokeFront;
}