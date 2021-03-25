import { films } from '../data/films.js'


console.log(films[6])

let filmOne = document.querySelector('#film1')

let filmTwo = document.querySelector('#film2')

let filmThree = document.querySelector('#film3')

let filmFour = document.querySelector('#film4')

let filmFive = document.querySelector('#film5')

let filmSix = document.querySelector('#film6')

let filmSeven = document.querySelector('#film7')

filmOne.textContent = films[0].title

filmTwo.textContent = films[1].title

filmThree.textContent = films[2].title

filmFour.textContent = films[3].title

filmFive.textContent = films[4].title

filmSix.textContent = films[5].title

filmSeven.textContent = films[6].title

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}