/* Afficher le menu dropdown */
function myFunction() {
    document.getElementById("toggleMenu").classList.toggle("show");
}

// Fermer le menu dropdown
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let d = 0; d < dropdowns.length; d++) {
            let openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}