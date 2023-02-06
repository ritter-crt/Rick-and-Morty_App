// // const navEl= document.querySelector('[data-js="navigation"]')
// const nextButtonEl = document.querySelector('[data-js="button-next]')

const navigation = document.querySelector('[data-js="navigation"]');

export function createPrevButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev")
  prevButton.textContent = "previous"
  navigation.append(prevButton)
}

export function createPagination() {
  const pagination = document.createElement("span")
  pagination.classList.add("navigation__pagination")
  pagination.setAttribute("data-js", "pagination")
  navigation.append(pagination)
}

export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next")
  nextButton.textContent = "next"
  navigation.append(nextButton)
}
