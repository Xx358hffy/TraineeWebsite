
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-link");
    let currentURL = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentURL) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.getElementById("letter").addEventListener("click", function () {
    this.style.display = "none"; // Hide the letter image
    document.getElementById("revealedImage").style.display = "block"; // Show the hidden image
});
