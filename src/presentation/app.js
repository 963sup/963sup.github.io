import { renderHomepage } from "./organisms.js";

export function renderApp(root, viewModel) {
  root.innerHTML = renderHomepage(viewModel);
}

export function mountApp(viewModel) {
  renderApp(document.querySelector("#app"), viewModel);
}
