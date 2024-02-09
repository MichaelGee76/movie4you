console.log(movies[0][4].length);

const outputContainer = document.querySelector(".output");

// Der Code erstellt Kacheln je nach Anzahl der Filme in Array. Das Array im Array wir auch per map angesprochen und mit join() wir der br tag hinzugefügt

const output = movies.map((tile) => {
    outputContainer.innerHTML += `<div class="tile">
    <h2>${tile[0]}</h2>
    <h4>${tile[1]}</h4>
    <h3>${tile[2]}</h3>
    <p class="duration">${tile[3]}</p>
    <p>${tile[4].map((genre) => genre).join(`<br>`)}</p>   
    <p class="rating">${tile[5]}</p>
    </div>`;
});

function showMovies(array) {
    array.map((tile) => {
        outputContainer.innerHTML += `<div class="tile">
    <h2>${tile[0]}</h2>
    <h4>${tile[1]}</h4>
    <h3>${tile[2]}</h3>
    <p class="duration">${tile[3]}</p>
    <p>${tile[4].map((genre) => genre).join(`<br>`)}</p>   
    <p class="rating">${tile[5]}</p>
    </div>`;
    });
}

function findMovie() {
    const searchBarValue = document.querySelector(".searchBar").value;
    const foundMovies = movies.filter((result) => {
        return result.includes(searchBarValue);
    });
    outputContainer.innerHTML = "";
    showMovies(foundMovies);
}

// const output = foundMovies.map((tile) => {
//     outputContainer.innerHTML += `<div class="tile">
//     <h2>${tile[0]}</h2>
//     <h4>${tile[1]}</h4>
//     <h3>${tile[2]}</h3>
//     <p class="duration">${tile[3]}</p>
//     <p>${tile[4].map((genre) => genre).join(`<br>`)}</p>
//     <p class="rating">${tile[5]}</p>
//     </div>`;
// });

// const foundMoviesGenre = movies[4].filter((result) => {
//     return result.includes(searchBarValue);
// });
// showMovies(foundMoviesGenre);