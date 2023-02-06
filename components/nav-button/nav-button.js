const navigation = document.querySelector('[data-js="navigation"]');

export function createButtons(input) {
  const button = document.createElement("button");
  button.classList.add("button", `button--${input}`);
  button.setAttribute("data-js", `button-${input}`)
  input === 'prev' ? button.textContent = 'previous' : button.textContent = input
  navigation.append(button)
}