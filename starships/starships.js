import { starships } from '../data/starships.js'

console.log(starships.length)

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav(starships) {
    starships.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', () => populateShipView(starship))
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(listItem)
    })

}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', (err) => {
        console.log(`Oops! Image doesn't exist.`)
        shipImage.hidden = true
    })
    shipView.appendChild(shipImage)
}

function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty / ('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('margin-top')
        star.style.setProperty('background-color', 'white')
        element.appendChild(star)

    }
}

addStarField(document.querySelector('body'), 1000)

populateNav(starships)