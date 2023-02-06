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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharecters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json()
    const characterCards = createCharacterCard(data.results)
    characterCards.forEach(characterCard => {
      cardContainer.append(characterCard)
    });
  } catch (error) {
    console.log(error)
  }
}

// searchBar.addEventListener('submit', (event) => {
//   event.preventDefault()
//   console.log('testetstadssfasd')
// })

fetchCharecters()

