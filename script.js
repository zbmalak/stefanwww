"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close--modal");
const modalContainer = document.querySelector(".modal--container");

const fictionContainer = document.querySelector(".movies--fiction");
const documentaryContainer = document.querySelector(".movies--documentary");
const commercialContainer = document.querySelector(".movies--commercial");
const personalContainer = document.querySelector(".movies--personal");
const musicvideoContainer = document.querySelector(".movies--musicvideo");

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const moviesObj = {
  fictionMovies: ["spN17NY6VlU", "QiqH5ym7ZuM", "h_Z0z5aBh7g", "dMdJUfna1SI"],
  documentaryMovies: ["cJSCh2U_uNY", "Tsm_PdFATfE"],
  musicvideoMovies: ["zgw84vYqDx4", "7BKIfWBqjrs"],
  commercialMovies: ["4e7cQ281NQw", "_HvKe_e1JOQ", "ZKfb3-NFAdk"],
  personalMovies: [
    "V1_7aIxYXJ8",
    "6UAi8fgAZtY",
    "rvBULEFohNs",
    "aM7SxNE13TI",
    "Dkjq4QsJuAg",
    "WLDDAHMTIUg",
    "MgU4UrTDkRc",
  ],

  renderMovies(arr, container) {
    arr.forEach((movieID) => {
      const markup = `
        <img
        class="movie ${movieID}"  id=${movieID}
        src="https://i3.ytimg.com/vi/${movieID}/hqdefault.jpg"
      
      />
     `;
      container.insertAdjacentHTML("afterbegin", markup);

      const modalHtml = `
      <div class="modal">
        <button class="close--modal">&times;</button>
        <div class="iframe">
          <iframe
            class="iframe__video"
            src="https://www.youtube.com/embed/${movieID}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="overlay"></div>`;

      document
        .getElementById(`${movieID}`)
        .addEventListener("click", function () {
          modalContainer.insertAdjacentHTML("afterbegin", modalHtml);
        });
    });
  },
};

moviesObj.renderMovies(moviesObj.fictionMovies, fictionContainer);
moviesObj.renderMovies(moviesObj.documentaryMovies, documentaryContainer);
moviesObj.renderMovies(moviesObj.musicvideoMovies, musicvideoContainer);
moviesObj.renderMovies(moviesObj.commercialMovies, commercialContainer);
moviesObj.renderMovies(moviesObj.personalMovies, personalContainer);

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList == "close--modal") {
    modalContainer.innerHTML = "";
  }
});
