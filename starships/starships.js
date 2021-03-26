import { starships } from '../data/starships.js'

console.log(startship.length)

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        navList.appendChild(listItem)
    })

}

populateNav(starships)