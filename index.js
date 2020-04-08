import db from './db.js'
import './components/EntrySection.js'
import './components/NavLink.js'
import './components/RecentNew.js'
import './components/ServiceLink.js'
import './components/SolutionCard.js'
import './containers/ElementsMapper.js'

const cardsContainer = document.getElementById('cards')
const cardsMapper = document.createElement('elements-mapper')

const linksContainer = document.getElementById('navbar')
const linksMapper = document.createElement('elements-mapper')

const newsContainer = document.getElementById('news')
const newsMapper = document.createElement('elements-mapper')

const servicesContainer = document.getElementById('services')
const servicesMapper = document.createElement('elements-mapper')

const elementsToMap = [
    {
        mapper: cardsMapper,
        container: cardsContainer,
        element: 'solution-card',
        data: db.cards
    },
    {
        mapper: linksMapper,
        container: linksContainer,
        element: 'nav-link',
        data: db.links
    },
    {
        mapper: newsMapper,
        container: newsContainer,
        element: 'recent-new',
        data: db.news
    },
    {
        mapper: servicesMapper,
        container: servicesContainer,
        element: 'service-link',
        data: db.services
    }
]

elementsToMap.forEach(mapElement)

function mapElement ({mapper, container, ...config}) {
    mapper.initialize = config
    container.appendChild(mapper)
}