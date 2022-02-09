'use strict';

const modalContainer = document.querySelector('.modal--container');

const fictionContainer = document.querySelector('.movies--fiction');
const documentaryContainer = document.querySelector('.movies--documentary');
const commercialContainer = document.querySelector('.movies--commercial');
const personalContainer = document.querySelector('.movies--personal');
const musicvideoContainer = document.querySelector('.movies--musicvideo');

document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const movies = {
  fictionMovies: ['spN17NY6VlU', 'h_Z0z5aBh7g', 'dMdJUfna1SI', 'QiqH5ym7ZuM'],
  documentaryMovies: ['cJSCh2U_uNY', 'Tsm_PdFATfE'],
  musicvideoMovies: [
    '7BKIfWBqjrs',
    'suvfh2D_y_4',
    'FlHacOV0tg4',
    'LbJ-q6Nr974',
  ],
  commercialMovies: ['ZKfb3-NFAdk', '_HvKe_e1JOQ', '4e7cQ281NQw'],
  personalMovies: [
    'MgU4UrTDkRc',
    'rvBULEFohNs',
    'aM7SxNE13TI',
    'Dkjq4QsJuAg',
    'WLDDAHMTIUg',
    'V1_7aIxYXJ8',
    '6UAi8fgAZtY',
  ],
};

const renderMovies = function (arr, container) {
  arr.forEach((movieID) => {
    const markup = `
        <img
        class="movie ${movieID}"  id=${movieID}
        src="https://i3.ytimg.com/vi/${movieID}/hqdefault.jpg"
      />
     `;
    container.insertAdjacentHTML('afterbegin', markup);

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
      .addEventListener('click', function () {
        modalContainer.insertAdjacentHTML('afterbegin', modalHtml);
      });
  });
};

renderMovies(movies.fictionMovies, fictionContainer);
renderMovies(movies.documentaryMovies, documentaryContainer);
renderMovies(movies.musicvideoMovies, musicvideoContainer);
renderMovies(movies.commercialMovies, commercialContainer);
renderMovies(movies.personalMovies, personalContainer);

document.addEventListener('click', function (e) {
  if (e.target && e.target.classList == 'close--modal') {
    modalContainer.innerHTML = '';
  }
});
