/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
import "../component/nav-bar.js";
import "../component/search-bar.js";
import "../component/footer-bar.js";
import "../component/genre.js";
import "../component/movies.js";
import "../component/movies-item.js";
import "../component/section-name.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  const getMovies = (keyword) => {
    DataSource.getMovie(keyword).then(renderResult).catch(fallbackResult);
  };

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(displayMovie);
  };

  const displayMovie = () => {
    DataSource.getMovie()
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  displayMovie();

  // initialization genre movie
  const movieGenres = (id) => {
    DataSource.genreMovies(id).then(renderResult).catch(fallbackResult);
  };

  // render all movies
  getMovies("discover/movie");

  // search movie
  searchElement.clickEvent = onButtonSearchClicked;

  const selectedGenre = [];
  const setGenreEvent = () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        const genreId = e.target.id;
        if (selectedGenre.length == 0) {
          selectedGenre.push(genreId);
        } else if (selectedGenre.includes(genreId)) {
          selectedGenre.forEach((id, idx) => {
            if (id == genreId) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genreId);
        }
        console.log(selectedGenre);
        movieGenres(selectedGenre.join(","));
        highlightSelection();
      });
    });
  };
  setGenreEvent();

  const highlightSelection = () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      tag.classList.remove("highlight");
    });
    if (selectedGenre.length != 0) {
      selectedGenre.forEach((id) => {
        const highlightedTag = document.getElementById(id);
        highlightedTag.classList.add("highlight");
      });
    }
  };
};

export default main;