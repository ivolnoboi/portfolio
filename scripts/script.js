"use strict";

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const courseName = document.querySelector(".course-name");
const courseSource = document.querySelector(".course-source");
const courseDate = document.querySelector(".course-date");
const courseDescription = document.querySelector(".course-description");
const certificateLink = document.querySelector(".cert-link");

const buttons = document
  .querySelector(".certificates")
  .querySelectorAll(".btn");

function openModal(number) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("hide-scrollbar");
  modalImg.src = modalImg.src + certificates[number].img;
  courseSource.textContent = certificates[number].source;
  courseName.textContent = certificates[number].name;
  courseDate.textContent = certificates[number].date;
  courseDescription.textContent = certificates[number].description;
  certificateLink.href = certificates[number].link;
  // modalText.textContent =
  //   certificates[number].name + " " + certificates[number].source;
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("hide-scrollbar");
  modalImg.src = "img/certificates/";
  // modalText.textContent = certificate1.name + " " + certificate1.source;
}

buttons.forEach((x) =>
  x.addEventListener("click", function (e) {
    openModal(e.target.id.replace("btn", "") - 1);
  })
);

btnCloseModal.addEventListener("click", function () {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});