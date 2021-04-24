const pokeGrid = document.querySelector(".pokeGrid");
const loadButton = document.querySelector("#loadPokemon");
const fetchButton = document.querySelector("#fetchPokemon");
const newButton = document.querySelector("#newPokemon");

class Pokemon {
    constructor(name, height, weight, abilities, moves, types) {
        this.id = 900;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.moves = moves;
        this.types = types;
    }
}

newButton.addEventListener("click", () => {
    let pokeName = prompt("What is the name of your new Pokemon?");
    let pokeHeight = prompt("What is the height of your new Pokemon?");
    let pokeWeight = prompt("Pokemon weight?");
    let newPokemon = new Pokemon(
        pokeName,
        pokeHeight,
        pokeWeight, ["eat", "sleep"], ["study", "game"],

        [{
            type: {
                name: "normal",
            },
        }, ]
    );
    populatePokeCard(newPokemon);
});

loadButton.addEventListener("click", () => {
    loadPage();
});

fetchButton.addEventListener("click", () => {
    let pokeNameOrId = prompt("Enter Pokemon ID or Name:");
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`).then((data) =>
        populatePokeCard(data)
    );
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
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=50`).then(
        async(data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then((pokeData) =>
                    populatePokeCard(pokeData)
                );
            }
        }
    );
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement("div");
    pokeScene.className = "scene";
    let pokeCard = document.createElement("div");
    pokeCard.className = "card";
    pokeCard.addEventListener("click", () => {
        pokeCard.classList.toggle("is-flipped");
    });

    pokeCard.appendChild(populateCardFront(singlePokemon));
    pokeCard.appendChild(populateCardBack(singlePokemon));
    pokeScene.appendChild(pokeCard);
    pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement("div");
    pokeFront.className = "card__face card__face--front";
    let frontLabel = document.createElement("p");
    frontLabel.textContent = pokemon.name;
    let frontImage = document.createElement("img");
    frontImage.src = getImageFileName(pokemon);

    let pokeType = pokemon.type[0].type.name;
    pokeFront.classList.add(pokeType);

    pokeFront.appendChild(frontLabel);
    pokeFront.appendChild(frontImage);
    return pokeFront;
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement("div");
    pokeBack.className = "card__face card__face--back";
    let backLabel = document.createElement("p");
    backLabel.textContent = `Moves: ${pokemon.moves.length}`;
    pokeBack.appendChild(backLabel);

    pokemon.types.forEach((pokeType) => {
        let backType = document.createElement("p");
        backType.textContent = pokeType.type.name;
        pokeBack.appendChild(backType);
    });
    return pokeBack;
}

function getImageFileName(pokemon) {
    let pokeId;
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`;
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`;
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id;
    if (pokemon.id === 900) {
        return `images/pokeballs.png`;
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`;
}