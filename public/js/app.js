const randomIndex = Math.floor(Math.random() * 100);
fetch("https://tyradex.tech/api/v1/pokemon/"+ randomIndex)
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(pokemon => {

        // Affichage des données des Pokémon
        let pokemonIdElement = document.getElementById('pokemon_id');
        let pokemonCategoryElement = document.getElementById('pokemon_category');
        let pokemonNameElement = document.getElementById('pokemon_name');
        let pokemonPictureElement = document.getElementById('pokemon_picture');

        // Mise à jour des div avec les données du premier Pokémon
        pokemonIdElement.textContent = "ID: #" + pokemon.pokedex_id;
        pokemonCategoryElement.textContent = "Type: " + pokemon.category;
        pokemonNameElement.textContent = "Nom: " + pokemon.name.fr;
        pokemonPictureElement.src = pokemon.sprites.regular;
    })
    .catch(error => {
        console.error('Une erreur s\'est produite:', error);
    });

