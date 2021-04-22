const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
})

async function getAPIData(url) {
    try {
        const response = await fetch(url) //try getting data from API at the url
        const data = await response.json() //convert the response into JSON
        return data //return the data from the function to whatever called it
    } catch (error) {
        //must have been an error
        console.log(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeaip.com/api.v2/pokemon/1`).then(
        (data) => {
            console.log(data)
        }
    )
    console.log(response)
}