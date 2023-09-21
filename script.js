"use strict";
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closModel);

overlay.addEventListener("click", closModel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") closModel();
});
document.querySelector(".btn").addEventListener("click", closModel);
