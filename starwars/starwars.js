import { films } from '../data/films.js'


let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {
    let filmItem = document.createElement('li')
    filmItem.textContent = films[i].title
    filmList.appendChild(filmItem)
}