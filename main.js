let btn = document.querySelector(".header__btn");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});