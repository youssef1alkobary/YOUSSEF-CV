let menuBar = document.querySelector('#menuBar');

menuBar.onclick = function menubar() {
    let lists = document.querySelector('#list');
    let menuX = document.querySelector('#menuX');

    this.style.display = "none";
    menuX.style.display = "block";
    lists.style.marginLeft = "-285px";
}

let menuX = document.querySelector('#menuX');

menuX.onclick = function menuX() {
    let lists = document.querySelector('#list');

    this.style.display = "none";
    menuBar.style.display = "block";
    lists.style.marginLeft = "-640px";
}