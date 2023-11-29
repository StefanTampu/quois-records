const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const serviceNames = document.getElementsByClassName("service-name");
const serviceDescriptions = document.getElementsByClassName("service-description");
const pluses = document.getElementsByClassName("plus");

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
})

if (serviceNames) {
    for (const serviceName of serviceNames) {
        let i=0;
        serviceName.addEventListener("click", () => {
            if(i%2 === 0){
                serviceName.nextElementSibling.classList.add("service-description-expand");
                serviceName.lastElementChild.classList.add("exit");
            } else {
                serviceName.nextElementSibling.classList.remove("service-description-expand");
                serviceName.lastElementChild.classList.remove("exit");
            }
            i++;
        }
    )}
}
