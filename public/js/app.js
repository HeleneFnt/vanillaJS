
fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(data => {

// Affichage des données des Pokémon
let pokemonIdElement = document.getElementById('pokemon_id');
let pokemonNameElement = document.getElementById('pokemon_category');
let pokemonDescriptionElement = document.getElementById('pokemon_name');
let pokemonPictureElement = document.getElementById('pokemon_picture');


// Récupération des données du premier Pokémon
const firstPokemon = data[1];

// Mise à jour des div avec les données du premier Pokémon
pokemonIdElement.textContent = "ID: #" + firstPokemon.pokedex_id;
pokemonNameElement.textContent = "Type: " + firstPokemon.category;
pokemonDescriptionElement.textContent = "Description: " + firstPokemon.name.fr;
pokemonPictureElement.src = firstPokemon.sprites.regular;
})
.catch(error => {
    console.error('Une erreur s\'est produite:', error);
});
