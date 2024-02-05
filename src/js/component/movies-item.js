class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  get genreId() {
    return this._movie.genre_ids;
  }

  render() {
    this.className = "col mb-4";
    this.innerHTML = `
        <style>
            .card {
                border: none;
                background: none;
                max-width: 12rem;
                cursor: pointer;
            }

            .card-img {
                height: 280px;
            }

            .card-body {
                padding: 15px 5px;
            }

            .card-text {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .card-text span {
                color: #AAB6BB !important;
                font-weight: 400;
            }

            .card-text .ratings {
                color: #FDA400 !important;
            }
        </style>

        <div class="card card-content" data-id="${this._movie.id}">
            <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top card-img" alt="${this._movie.original_title}">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${this._movie.original_title}</h5>
                    <div class="row card-text">
                        <div class="col-8">
                            <span>${this._movie.release_date}</span>
                        </div>
                        <div class="col-4">
                            <span class="ratings">
                                <i class="bi bi-star-fill"></i>
                                ${this._movie.vote_average}
                            </span>
                        </div>
                    </div>
                </div>
        </div>`;
  }
}

customElements.define("movie-item", MovieItem);