function change(event) {
    event.preventDefault();
    document.querySelector("nav").classList.toggle("iconShow");
    document.getElementById("click").classList.toggle("active2");
}

function changeX(event) {
    event.preventDefault();
    document.querySelector("nav").classList.remove("iconShow");
    document.getElementById("click").classList.remove("active2");
}
