const navigation = document.querySelector('[data-js="navigation"]');

export function createPagination(){
    const pagination = document.createElement("span")
    pagination.classList.add("navigation__pagination")
    pagination.setAttribute("data-js", "pagination")
    navigation.append(pagination)
}
