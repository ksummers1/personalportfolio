    import { senators } from '../data/senators.js'
    import { representatives } from '../data/representatives.js'

    const congressGrid = document.querySelector('.congressGrid')
    const seniorityButton = document.querySelector('#seniorityButton')
    const birthdayButton = document.querySelector('#birthdayButton')

    seniorityButton.addEventListener('click', () => {
        senioritySort()
    })

    birthdayButton.addEventListener('click', () => {
        birthdaySort()
    })

    function populateCongressGrid(simplePeople) {
        congressPeople.forEach(person => {
            let personDiv = document.createElement('div')
            let personFig = document.createElement('figure')
            let figImg = document.createElement('img')
            let figCaption = document.createElement('figcaption')

            figCaption.textContent = `${person.first_name} ${person.middle_name} ${person.last_name}`

            personFig.appendChild(figImg)
            personFig.appendChild(figCaption)
            personDiv.appendChild(personFig)
            congressGrid.appendChild(personDiv)
        })
    }

    function getSimplifiedCongress(congressPeople) {
        return congressPeople.map(person => {

        })
    }

    populateCongressGrid(senators)