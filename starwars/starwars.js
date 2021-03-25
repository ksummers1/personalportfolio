import { films } from '../data/films.js'


let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {
    console.log(`the loop counter is: ${i} while the film episode id is: ${films[i].episode_id}`)
    let filmItem = document.createElement('li')
    filmItem.textContent = films[i].title
    filmList.appendChild(filmItem)
    getLastNumber(films[i].url)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    console.log(`last character is index#${end}`)
}