async function searchfilm() {
    const filmsearch = document.getElementById('search').value;

const url = 'https://www.omdbapi.com/?apikey=847009a0&type=movie&s=' + filmsearch;

const response = await fetch(url);
const json = await response.json();


const films = json.Search;

let options = '';
for (let i = 0; i < films.length; i++) {
    options += '<option value="' + films[i].imdbID + '">' + films[i].Title + ' ( ' + films[i].Year + ')</option>';
  }

document.getElementById('film').innerHTML = options;
}

async function showfilm() {
    const id = document.getElementById('film').value;

const url = 'https://www.omdbapi.com/?apikey=847009a0&i=' + id;
const response = await fetch(url);
const json = await response.json();

const film = json;

document.getElementById('film-data').innerHTML =
'<h2>'+ film.Title + ' (' + film.Year + ') </h2>' +
'<img src="' + film.Poster + '">' +
'<p>Plot:' + film.Plot + '</p>' +
'<p>Director:' + film.Director + '</p>' +
'<p>Genre:' + film.Genre + '</p>' +
'<p>Actors:' + film.Actors + '</p>' ;
}

document.getElementById('searchButton').addEventListener('click', searchfilm);
document.getElementById('showButton').addEventListener('click', showfilm);