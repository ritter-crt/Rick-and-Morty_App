import { createCharacterCard } from './components/card/card.js'

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');


// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharecters(pageNumber) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    const data = await response.json()
    data.results.forEach(character => {
      const characterCard = createCharacterCard(character)
      cardContainer.append(characterCard)
    });
  } catch (error) {
    console.log(error)
  }
}


prevButton.addEventListener('click', () => {
  cardContainer.innerHTML = ''
  page--
  fetchCharecters(page)
})
nextButton.addEventListener('click', () => {
  cardContainer.innerHTML = ''
  page++
  fetchCharecters(page)
})

// searchBar.addEventListener('submit', (event) => {
//   event.preventDefault()
//   console.log('testetstadssfasd')
// })
fetchCharecters()
