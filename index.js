import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

createSearchBar()

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
let searchQuery = "";



async function fetchCharacters(searchQuery, pageNumber) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${pageNumber}`);
    const data = await response.json();

    const refactoredData = data.results.map(character => {
      return {
        name: character.name,
        image: character.image,
        status: character.status,
        type: character.type,
        occurences: character.episode.length
      }
    })
    maxPage = data.info.pages
    pagination.textContent = `${page}/${maxPage}`
    refactoredData.forEach((character) => {
      const characterCard = createCharacterCard(character);
      cardContainer.append(characterCard);
    });
  } catch (error) {
    console.log(error);
  }
}


// Searchbar____________________________
searchBar.addEventListener("submit", (event) => {
  cardContainer.innerHTML = "";
  event.preventDefault();
  const formData = new FormData(event.target);
  searchQuery = Object.fromEntries(formData);
  fetchCharacters(searchQuery.query)
});

// ____________________________Searchbar


prevButton.addEventListener('click', () => {
  cardContainer.innerHTML = ''
  page--
  fetchCharacters('', page)
})
nextButton.addEventListener('click', () => {
  cardContainer.innerHTML = ''
  page++
  fetchCharacters('', page)
})

fetchCharacters("", page);
