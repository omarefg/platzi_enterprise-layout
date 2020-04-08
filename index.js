import db from './db.js'
import './components/EntrySection.js'
import NavLink from './components/NavLink.js'
import RecentNew from './components/RecentNew.js'
import ServiceLink from './components/ServiceLink.js'
import SolutionCard from './components/SolutionCard.js'
import './containers/ElementsMapper.js'

const cardsContainer = document.getElementById('cards')
const cardsMapper = document.createElement('elements-mapper')

const linksContainer = document.getElementById('navbar')
const linksMapper = document.createElement('elements-mapper')

const newsContainer = document.getElementById('news')
const newsMapper = document.createElement('elements-mapper')

const servicesContainer = document.getElementById('services')
const servicesMapper = document.createElement('elements-mapper')

new CSSStyleSheet().replace('@import url(index.css)')
    .then(sheet => {
        const elementsToMap = [
            {
                mapper: cardsMapper,
                container: cardsContainer,
                customElement: 'solution-card',
                data: db.cards,
                styleSheet: sheet,
                element: SolutionCard
            },
            {
                mapper: linksMapper,
                container: linksContainer,
                customElement: 'nav-link',
                data: db.links,
                styleSheet: sheet,
                element: NavLink
            },
            {
                mapper: newsMapper,
                container: newsContainer,
                customElement: 'recent-new',
                data: db.news,
                styleSheet: sheet,
                element: RecentNew
            },
            {
                mapper: servicesMapper,
                container: servicesContainer,
                customElement: 'service-link',
                data: db.services,
                styleSheet: sheet,
                element: ServiceLink
            }
        ]
        elementsToMap.forEach(element => mapElement(element))
    })



function mapElement ({mapper, container, ...config}) {
    mapper.initialize = config
    container.appendChild(mapper)
}