const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d40d92ef5d8a59891e9ae531a610f5d0&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=d40d92ef5d8a59891e9ae531a610f5d0&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url){
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');
      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');
      const div_col = document.createElement('div');
      div_col.setAttribute('class', 'column');
      const img = document.createElement('img');
      img.setAttribute('class', 'thumbnail');
      img.setAttribute('id', 'image');
      const title = document.createElement('h3');
      title.setAttribute('id', 'title');

      title.innerHTML = element.title;
      img.src = IMG_PATH + element.poster_path;

      div_card.appendChild(img);
      div_card.appendChild(title);
      div_col.appendChild(div_card);
      div_row.appendChild(div_col);

      main.appendChild(div_row);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem){
    returnMovies(SEARCHAPI + searchItem);
      search.value = "";
  }
});