/* eslint-disable no-undef */
/* eslint-disable prefer-promise-reject-errors */
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=611136675cbfe683b3137903be4c6e37";
const search = `${baseUrl}/search/movie?${apiKey}&query=`;
const popular = `${baseUrl}/movie/popular?${apiKey}`;
const KEY = 'api_key=25607a3072cf47fce78da43cfa96480b';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${search + keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static getMovie() {
    return fetch(`${popular}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static genreMovies(id) {
    return fetch(`${baseUrl}/discover/movie?${KEY}&with_genres=${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;