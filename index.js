import db from './db.js'
import './components/NavLink.js'
import './components/EntrySection.js'
import './components/SolutionCard.js'
import './containers/ElementsMapper.js'

const cardsContainer = document.getElementById('cards')
const cardsMapper = document.createElement('elements-mapper');
const linksContainer = document.getElementById('navbar')
const linksMapper = document.createElement('elements-mapper');

const solutionCardConfig = {
    mapper: cardsMapper,
    container: cardsContainer,
    element: 'solution-card',
    data: db.cards,
    styles: `
        display: flex;
    `
}

const navLinkConfig = {
    mapper: linksMapper,
    container: linksContainer,
    element: 'nav-link',
    data: db.links
}

mapElement(solutionCardConfig)
mapElement(navLinkConfig)


function mapElement ({mapper, container, ...config}) {
    mapper.initialize = config
    container.appendChild(mapper)
}