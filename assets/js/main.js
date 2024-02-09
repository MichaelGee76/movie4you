let newMovies = movies;

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

// Die Funktion wird mit Parameter übergeben und baut die Kacheln mit dem gefilterten Array auf

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

// Das ist de Suchfunktion, erstellt ein Array und baut mit showMovies() das html auf

function findMovie() {
    const searchBarValue = document.querySelector(".searchBar").value.toLowerCase();
    newMovies = movies.filter((result) => {
        return result[0].toLowerCase().includes(searchBarValue) || result[1].includes(searchBarValue) || result[2].toLowerCase().includes(searchBarValue) || result[3].toLowerCase().includes(searchBarValue) || result[4].join().toLowerCase().includes(searchBarValue) || result[5] === searchBarValue;
    });
    outputContainer.innerHTML = "";
    showMovies(newMovies);
}

// Sortiert nach jahr aufsteigend

function yearUp() {
    newMovies.sort((a, b) => {
        return a[1] - b[1];
    });
    outputContainer.innerHTML = "";
    showMovies(newMovies);
}

// sortiert nach jahr absteigend

function yearDown() {
    newMovies.sort((a, b) => {
        return b[1] - a[1];
    });
    outputContainer.innerHTML = "";
    showMovies(newMovies);
}

function bestRate() {
    newMovies.sort((a, b) => {
        return b[5] - a[5];
    });
    outputContainer.innerHTML = "";
    showMovies(newMovies);
}
