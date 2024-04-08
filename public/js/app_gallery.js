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


// Carousel
let sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider');

let slide1 = document.createElement('div');
slide1.classList.add('slide', 'active'); // Ajout de la classe active à la première diapositive
let img1 = document.createElement('img');
img1.classList.add('slide-image');
img1.src = 'img/Bandeau LN Gattaca.png';
img1.alt = 'slide1';
slide1.appendChild(img1);

let slide2 = document.createElement('div');
slide2.classList.add('slide');
let img2 = document.createElement('img');
img2.classList.add('slide-image');
img2.src = 'img/Bandeau LN Fhloston Paradise.png';
img2.alt = 'slide2';
slide2.appendChild(img2);

let slide3 = document.createElement('div');
slide3.classList.add('slide');
let img3 = document.createElement('img');
img3.classList.add('slide-image');
img3.src = 'img/Bandeau LN Tesla.png';
img3.alt = 'slide3';
slide3.appendChild(img3);

// Ajouter les diapositives au conteneur du carousel
sliderContainer.appendChild(slide1);
sliderContainer.appendChild(slide2);
sliderContainer.appendChild(slide3);

// Ajouter le conteneur du carousel au début du corps du document
document.body.insertBefore(sliderContainer, document.body.firstChild);

// // Création des boutons de contrôle
// let prevBtn = document.createElement('button');
// prevBtn.textContent = 'Previous';
// prevBtn.classList.add('btn');
// prevBtn.id = 'prev';
//
// let nextBtn = document.createElement('button');
// nextBtn.textContent = 'Next';
// nextBtn.classList.add('btn');
// nextBtn.id = 'next';
//
// // Ajouter les boutons de contrôle au document
// document.body.insertBefore(prevBtn, sliderContainer.nextSibling);
// document.body.insertBefore(nextBtn, sliderContainer.nextSibling);

// Ajouter le gestionnaire d'événements pour le carousel
function slider() {
    let slides = document.querySelectorAll(".slide"),
        slider = document.querySelector(".slider"),
        last = slider.lastElementChild,
        first = slider.firstElementChild,
        btn = document.querySelectorAll(".btn");

    slider.insertBefore(last, first);

    btn.forEach(btn => {
        btn.addEventListener("click", movement);
    });

    setInterval(function () {
        movement({ target: { id: "next" } });
    }, 3000);

    function movement(e) {
        slider = document.querySelector(".slider");
        last = slider.lastElementChild;
        first = slider.firstElementChild;

        const activeSlide = document.querySelector(".active");

        if (e.target.id === "next") {
            slider.insertBefore(first, last.nextSibling);

            activeSlide.classList.remove("active");
            activeSlide.nextElementSibling.classList.add("active");
        } else {
            slider.insertBefore(last, first);
            activeSlide.classList.remove("active");
            activeSlide.previousElementSibling.classList.add("active");
        }
    }
}
slider();
