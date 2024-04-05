// Boucle pour récupérer 3 pokémons aléatoires
for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 150);
    fetch("https://tyradex.tech/api/v1/pokemon/" + randomIndex)
        .then(response => response.json())
        .then(pokemonData => {
            // Crée un nouvel élément div pour le Pokémon
            let pokemonElement = document.createElement('div');
            pokemonElement.classList.add('card'); // Ajoute la classe 'card' à chaque carte
            pokemonElement.innerHTML = `
                <div id="pokemon_id">ID: #${pokemonData.pokedex_id}</div>
                <div id="pokemon_category">Type: ${pokemonData.category}</div>
                <div id="pokemon_name">Nom: ${pokemonData.name.fr}</div>
                <div id="pokemon_image_bloc"><img id="pokemon_picture" src="${pokemonData.sprites.regular}" alt="${pokemonData.name.fr}"></div>
            `;
            document.getElementById("pokemon_container").appendChild(pokemonElement);
        })
        .catch(error => console.error('Erreur lors de la récupération du Pokémon:', error));
}


// Création du formulaire pour ajouter un pokémon
const form = document.createElement('div');
form.id = 'pokemon_form';

const categoryInput = document.createElement('input');
categoryInput.type = 'text';
categoryInput.placeholder = 'Type';
form.appendChild(categoryInput);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Nom';
form.appendChild(nameInput);

const imageInput = document.createElement('input');
imageInput.type = 'text';
imageInput.placeholder = 'URL du Pokémon'; // https://img-4.linternaute.com/r8EjCC8ozJAzUlArRnxEiHX4yPU=/750x1125/smart/63ec5f73fbff4975a6e42e4ec973fef0/ccmcms-linternaute/animal-etrange-1.jpg
form.appendChild(imageInput);

const addButton = document.createElement('button');
addButton.textContent = 'Ajouter Pokémon';
form.appendChild(addButton);

// Ajout du formulaire au document
document.body.appendChild(form);

// Écouteur d'événement pour ajouter un Pokémon
addButton.addEventListener('click', function () {
    // Récupération des données du nouveau Pokémon depuis les champs de formulaire
    const category = categoryInput.value;
    const name = nameInput.value;
    const image = imageInput.value;

    // Création du nouvel objet Pokémon avec les données fournies par l'utilisateur
    const pokemon = createPokemon(category, name, image);

    // Affichage du Pokémon dans la console
    console.log('Nouveau Pokémon ajouté :', pokemon);

    // Crée un nouvel élément div pour le Pokémon ajouté
    let pokemonElement = document.createElement('div');
    pokemonElement.classList.add('card_add'); // Ajoute la classe 'card' à chaque carte
    pokemonElement.innerHTML = `
        <div> Voici votre nouveau Pokemon !</div>
        <div>Type: ${pokemon.category}</div>
        <div>Nom: ${pokemon.name}</div>
        <div><img  class="new-pokemon-image" src="${pokemon.image}" alt="${pokemon.name}"></div>
    `;
    document.getElementById("pokemon_container").appendChild(pokemonElement);
});

// Fonction pour créer un nouveau Pokémon
function createPokemon(category, name, image) {
    return {
        category: category,
        name: name,
        image: image
    };
}
