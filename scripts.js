const button = document.getElementById("button");
const modal = document.getElementById("modal");

button.addEventListener("click", () => {
  modal.classList.add("modal--show");
});

modal.addEventListener("click", () => {
  modal.classList.remove("modal--show");
});
