document.addEventListener('DOMContentLoaded', function() {
    // Création des éléments pour la bannière
    let banner = document.createElement('div');
    banner.classList.add('banner');

    let carousel = document.createElement('div');
    carousel.classList.add('carousel');
    carousel.textContent = 'Carousel';

    let slide1 = document.createElement('div');
    slide1.classList.add('slide', 'active'); // Ajout de la classe active à la première diapositive
    let img1 = document.createElement('img');
    img1.classList.add('slide-image');
    img1.src = 'https://www.gurumed.org/wp-content/uploads/2018/02/Space-X-Elon-Musk-Tesla-MARS.jpg';
    img1.alt = 'slide1';
    slide1.appendChild(img1);

    let slide2 = document.createElement('div');
    slide2.classList.add('slide');
    let img2 = document.createElement('img');
    img2.classList.add('slide-image');
    img2.src = 'https://thelastdriverlicenseholder.files.wordpress.com/2018/02/tesla_starman_08.png';
    img2.alt = 'slide2';
    slide2.appendChild(img2);

    let slide3 = document.createElement('div');
    slide3.classList.add('slide');
    let img3 = document.createElement('img');
    img3.classList.add('slide-image');
    img3.src = 'https://cdn.dribbble.com/users/1789431/screenshots/6667477/tesla_space_nobokeh1920.jpg';
    img3.alt = 'slide3';
    slide3.appendChild(img3);

    banner.appendChild(carousel);
    banner.appendChild(slide1);
    banner.appendChild(slide2);
    banner.appendChild(slide3);

    // Ajouter la bannière au conteneur
    document.getElementById('slider_container').appendChild(banner);

    // Carrousel automatique
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(nextSlide, 3000); // Change de diapositive toutes les 3 secondes
});


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

    const container = document.createElement('div');
    container.classList.add('gallery-item');

    const newImg = document.createElement('img');
    newImg.src = url;
    newImg.alt = title;
    newImg.classList.add('added-image');

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.classList.add('image-title');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        container.remove();
    });

    container.appendChild(deleteButton);
    container.appendChild(newImg);
    container.appendChild(titleElement);


    const galleryElement = document.getElementById('gallery');
    galleryElement.appendChild(container);

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
