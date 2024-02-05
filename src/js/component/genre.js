import DataGenre from '../data/genre-movies.json';

class GenreMovies extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            #tags {
                width: 80%;
                display: flex;
                flex-wrap: wrap;
            }
            
            .tag {
                color: #0d6efd;
                font-weight: 400;
                padding: 5px 10px;
                margin: 5px;
                margin-right: 10px;
                border: 1px solid #0d6efd;
                border-radius: 5px;
                cursor: pointer;
            }
            
            .tag:hover {
                background-color: #0d6efd;
                color: #FFF !important;
            }
            
            .tag.highlight {
                background-color: #0d6efd;
                color: #FFF !important;
                font-weight: 600;
            }
        </style>
        `;
    let htmlContent = '';
    // eslint-disable-next-line array-callback-return
    DataGenre.genres.map((genres) => {
      htmlContent += `
                <div class="tag text-center" id="${genres.id}">${genres.name}</div>
            `;
    });

    this.innerHTML += htmlContent;
  }
}

customElements.define("movie-genre", GenreMovies);
