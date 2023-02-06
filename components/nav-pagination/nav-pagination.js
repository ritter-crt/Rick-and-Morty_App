const navigation = document.querySelector('[data-js="navigation"]');

export function createPaginationButton(input) {
  const button = document.createElement("button");
  button.classList.add("button", `button--${input}`);
  button.setAttribute("data-js", `button-${input}`)
  input === 'prev' ? button.textContent = 'previous' : button.textContent = input
  navigation.append(button)
}

export function createPagination(){
    const pagination = document.createElement("span")
    pagination.classList.add("navigation__pagination")
    pagination.setAttribute("data-js", "pagination")
    navigation.append(pagination)
}
