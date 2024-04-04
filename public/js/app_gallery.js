fetch("https://api.nasa.gov/planetary/apod?api_key=HhaoniENgVaaX3EvcoMPhAzNEorik1x1UGVY2o8d&count=20")
    .then(response => response.json())
    .then(data => {
        // Sélectionne l'élément de la galerie
        const galleryElement = document.getElementById("gallery");

        // Parcourt les données pour chaque image
        data.forEach(image => {
            // Crée un conteneur pour l'image et le titre
            const container = document.createElement("div");
            container.classList.add("gallery-item");

            // Crée un élément d'image pour chaque image
            const imageElement = document.createElement("img");
            imageElement.src = image.url;
            imageElement.alt = image.title;
            imageElement.classList.add("gallery-image");

            // Crée un élément pour le titre de l'image
            const titleElement = document.createElement("div");
            titleElement.textContent = image.title;
            titleElement.classList.add("image-title");

            // Ajoutez l'élément d'image et le titre à leur conteneur
            container.appendChild(imageElement);
            container.appendChild(titleElement);

            // Ajoutez le conteneur à la galerie
            galleryElement.appendChild(container);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des images de la NASA:', error));
