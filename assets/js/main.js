// Erstellt eine neues array
let newMovies = movies;

const outputContainer = document.querySelector(".output");
const bestErrors = document.querySelector(".bestErrors");
const noMovies4You = document.querySelector(".noMovies4You");

// Der Code erstellt Kacheln je nach Anzahl der Filme in Array. Das Array im Array wir auch per map angesprochen und mit join() wir der br tag hinzugefügt

const output = newMovies.map((tile) => {
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

function findMovie() {
    const searchBarValue = document.querySelector(".searchBar").value.toLowerCase();
    newMovies = movies.filter((result) => {
        return result[0].toLowerCase().includes(searchBarValue) || result[1].includes(searchBarValue) || result[2].toLowerCase().includes(searchBarValue) || result[3].toLowerCase().includes(searchBarValue) || result[4].join().toLowerCase().includes(searchBarValue) || result[5] === searchBarValue;
    });
    const count = document.querySelector("#count");
    count.innerHTML = `${newMovies.length} movies match your criteria`;
    errorMsg();
    outputContainer.innerHTML = "";
    showMovies(newMovies);
}

function errorMsg() {
    if (newMovies.length === 0) {
        bestErrors.classList.add("spanRed");
        noMovies4You.classList.add("spanRed");
        noMovies4You.textContent = "NO Movies4You";
        bestErrors.innerHTML = `Movie Not found`;
        setTimeout(() => {
            noMovies4You.classList.remove("spanRed");
            noMovies4You.innerHTML = "Movies4You";
            bestErrors.classList.remove("spanRed");
            bestErrors.innerHTML = "The best MovieDB";
        }, 3500);
        // outputContainer.innerHTML = "";
        // window.location.reload();
        showMovies(movies);
    } else {
        return;
    }
}

// Fragt per eventlistener ab ob geclickt ? function : nix :)

function sort() {
    const up = document.querySelector("#up").addEventListener("click", function () {
        newMovies.sort((a, b) => {
            console.log("worked up");

            return a[1] - b[1];
        });
        outputContainer.innerHTML = "";
        showMovies(newMovies);
    });
    const down = document.querySelector("#down").addEventListener("click", function () {
        newMovies.sort((a, b) => {
            console.log("worked down");

            return b[1] - a[1];
        });
        outputContainer.innerHTML = "";
        showMovies(newMovies);
    });
    const rate = document.querySelector("#rate").addEventListener("click", function () {
        newMovies.sort((a, b) => {
            return b[5] - a[5];
        });
        outputContainer.innerHTML = "";
        showMovies(newMovies);
    });
}
