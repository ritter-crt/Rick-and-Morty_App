export function createCharacterCard(data) {
    data.forEach(character => {     
    const imgSrc = character.image
    const altName = character.name
    const cardStatus = character.status
    const cardType = character.type
    const cardOccurrence = character.episode.length


    const newCard  = document.createElement("li")
        newCard.innerHTML = `
        <li class="card">
            <div class="card__image-container">
                <img
                class="card__image"
                src=${imgSrc}
                alt=${altName}
                />
                <div class="card__image-gradient"></div>
            </div>
            <div class="card__content">
                <h2 class="card__title">Rick Sanchez</h2>
                <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${cardStatus}</dd> 
                <dt class="card__info-title">Type</dt>
                <dd class="card__info-description">${cardType}</dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${cardOccurrence}</dd>
                </dl>
            </div>
            </li>`
        return newCard
        })
        };
        
    
createCharacterCard();
