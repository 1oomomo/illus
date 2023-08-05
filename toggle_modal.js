function openHum(openEl, humIcn) {
    openEl.classList.add("active");
    humIcn.classList.add("active");
}
function closeHum(closeEl, humIcn) {
    closeEl.classList.remove("active");
    humIcn.classList.remove("active");
}

function humActive(id, className) {
    //console.log(typeof el);
    //this.className is String
    let humIcn = document.getElementById(id);
    let fadeInOutEl = document.getElementById("modal_menu");
    if (className.includes("active")) {
        closeHum(fadeInOutEl, humIcn);
    } else {
        openHum(fadeInOutEl, humIcn);
    }
}
