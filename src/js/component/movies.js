import "./movies-item.js";

class Movies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-auto row-cols-md-auto";
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
}

customElements.define("movie-list", Movies);
