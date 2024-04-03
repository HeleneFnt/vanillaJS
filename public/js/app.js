
for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 151);
    fetch("https://tyradex.tech/api/v1/pokemon/" + randomIndex)
        .then(response => response.json())
        .then(pokemon => {
            let pokemonElement = document.createElement('div');
            pokemonElement.classList.add('card'); // Ajoute la classe 'card' à chaque carte
            pokemonElement.innerHTML = `
                <div id="pokemon_id">ID: #${pokemon.pokedex_id}</div>
                <div id="pokemon_category">Type: ${pokemon.category}</div>
                <div id="pokemon_name">Nom: ${pokemon.name.fr}</div>
                <div id="pokemon_image_bloc"><img id="pokemon_picture" src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}"></div>
            `;
            document.getElementById("pokemon_container").appendChild(pokemonElement);
        })
        .catch(error => console.error('Erreur lors de la récupération du Pokémon:', error));
}

