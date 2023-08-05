let openModal = function (modal, fileName) {
    let addImgEl = document.getElementById("img");
addImgEl.style.backgroundImage = "url(" + fileName + ")";
modal.classList.add("active");
}
let closeModal = function (modal) {
    modal.classList.remove("active");
}
let activeModal = function (el) {
    let fadeInOutEl = document.getElementById("modal");
    if (fadeInOutEl.className.includes("active")) {
        closeModal(fadeInOutEl);
    } else {
        let name = el.dataset.name;
        let fileName = "img/" + name + ".jpg";
        console.log(fileName);
        openModal(fadeInOutEl, fileName);
    }
}