fetch("https://api.nasa.gov/planetary/apod?api_key=HhaoniENgVaaX3EvcoMPhAzNEorik1x1UGVY2o8d&count=20")
    .then(response => response.json())
    .then(data => {
        const galleryElement = document.getElementById("gallery");

        data.forEach(image => {
            const container = document.createElement("div");
            container.classList.add("gallery-item");

            const imageElement = document.createElement("img");
            imageElement.src = image.url;
            imageElement.alt = image.title;
            imageElement.classList.add("gallery-image");

            const titleElement = document.createElement("div");
            titleElement.textContent = image.title;
            titleElement.classList.add("image-title");

            container.appendChild(imageElement);
            container.appendChild(titleElement);

            galleryElement.appendChild(container);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des images de la NASA:', error));

function toggleMosaic() {
    document.getElementById("gallery").classList.add("mosaic-mode");
    document.getElementById("gallery").classList.remove("column-mode");
}

function toggleColumn() {
    document.getElementById("gallery").classList.remove("mosaic-mode");
    document.getElementById("gallery").classList.add("column-mode");
}

// Ajouter une nouvelle image

const addImgButton = document.getElementById('addImgButton');
const titleInput = document.getElementById('titleInput');
const urlInput = document.getElementById('urlInput');

addImgButton.addEventListener('click', function () {
    const title = titleInput.value;
    const url = urlInput.value;

    const newImg = document.createElement('img');
    newImg.src = url;
    newImg.alt = title;
    newImg.classList.add('added-image');

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.classList.add('image-title');


    const galleryElement = document.getElementById('gallery');
    galleryElement.appendChild(newImg);
    galleryElement.appendChild(titleElement);

    titleInput.value = '';
    urlInput.value = '';

    console.log('Nouvelle image ajoutée :', newImg);
});

// Fonction pour afficher ou masquer la boîte modale
function toggleModal() {
    const modal = document.getElementById("myModal");
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}