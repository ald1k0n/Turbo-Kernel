const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

let isShow = false;

burger.addEventListener("click", () => {
  isShow = !isShow;
  if (isShow) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

if (window.matchMedia("(width> 960px)").matches) {
  menu.classList.add("hidden");
}
