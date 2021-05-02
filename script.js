"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close--modal");
const modalContainer = document.querySelector(".modal--container");

const fictionMovies = [
  "dMdJUfna1SI",
  "QiqH5ym7ZuM",
  "h_Z0z5aBh7g",
  "spN17NY6VlU",
];
const documentaryMovies = ["cJSCh2U_uNY", "Tsm_PdFATfE"];
const commercialMovies = ["4e7cQ281NQw", "_HvKe_e1JOQ", "ZKfb3-NFAdk"];
const personalMovies = [
  "V1_7aIxYXJ8",
  "6UAi8fgAZtY",
  "rvBULEFohNs",
  "aM7SxNE13TI",
  "Dkjq4QsJuAg",
  "WLDDAHMTIUg",
  "MgU4UrTDkRc",
];
const musicvideoMovies = ["zgw84vYqDx4", "7BKIfWBqjrs"];

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const movie = document.querySelectorAll(".movie");
// for (let i = 0; i < movie.length; i++) {
//   movie[i].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// const displayFiction = function () {
fictionMovies.forEach(function (item) {
  const markup = `
    <img
    class="movie"
    
    src="https://i3.ytimg.com/vi/${item}/hqdefault.jpg"
    alt="video mini"
  />
  `;

  document
    .querySelector(".movies--fiction")
    .insertAdjacentHTML("afterbegin", markup);
});
// };

// const displayDocumentary = function () {
documentaryMovies.forEach(function (item) {
  const markup = `
    <img
    class="movie"
    
    src="https://i3.ytimg.com/vi/${item}/hqdefault.jpg"
    alt="video mini"
  />
  `;

  document
    .querySelector(".movies--documentary")
    .insertAdjacentHTML("afterbegin", markup);
});
// };

// const displayCommercial = function () {
commercialMovies.forEach(function (item) {
  const markup = `
    <img
    class="movie"
    
    src="https://i3.ytimg.com/vi/${item}/hqdefault.jpg"
    alt="video mini"
  />
  `;

  document
    .querySelector(".movies--commercial")
    .insertAdjacentHTML("afterbegin", markup);
});
// };
// const displayPersonal = function () {
personalMovies.forEach(function (item) {
  const markup = `
    <img
    class="movie" id=${item}
    
    src="https://i3.ytimg.com/vi/${item}/hqdefault.jpg"
    alt="video mini"
  />
  `;

  document
    .querySelector(".movies--personal")
    .insertAdjacentHTML("afterbegin", markup);
});
// };
// const displayMusic = function () {
musicvideoMovies.forEach(function (item) {
  const markup = `
    <img
    class="movie" id=${item}
    
    src="https://i3.ytimg.com/vi/${item}/hqdefault.jpg"
    alt="video mini"
  />
  `;

  document
    .querySelector(".movies--musicvideo")
    .insertAdjacentHTML("afterbegin", markup);

  document.getElementById(item).addEventListener("click", function () {
    const modalHtml = `
    <div class="modal">
    <button class="close--modal">&times;</button>
    <div class="iframe">
      <iframe
        class="iframe__video"
        src="https://www.youtube.com/embed/${item}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>`;

    modalContainer.insertAdjacentHTML("beforeend", modalHtml);
  });
});

// };

// displayFiction();
// displayDocumentary();
// displayCommercial();
// displayPersonal();
// displayMusic();
