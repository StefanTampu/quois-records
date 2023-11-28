const serviceNames = document.getElementsByClassName("service-name");
const serviceDescriptions = document.getElementsByClassName("service-description");
const pluses = document.getElementsByClassName("plus");

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
