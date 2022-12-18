import { products } from "../test-paginate-panithee/data/products";

const divPage = document.getElementById("page");
for (let i = 0; i < products.length; i++) {
  const buttonPage = document.createElement("button");
  buttonPage.setAttribute("id", i);
  buttonPage.textContent = i++;
  divPage.appendChild(buttonPage);
}
