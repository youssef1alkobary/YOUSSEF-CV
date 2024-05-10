// let menuBar = document.querySelector('#menuBar');

// menuBar.onclick = function menu() {
//     let list = document.querySelector('#list');
//     let menuX = document.querySelector('#menuX');
//     this.style.display = "none";
//     list.style.display = "block";
//     menuX.style.display = "block";
// }

// let menuX = document.querySelector('#menuX');

// menuX.onclick = function menu() {
//     let list = document.querySelector('#list');
//     let menuX = document.querySelector('#menuX');
//     menuBar.style.display = "block";
//     list.style.display = "none";
//     menuX.style.display = "none";
// }

let menuBar = document.querySelector('#menuBar');

menuBar.onclick = function menubar() {
    let lists = document.querySelector('#list');
    let menuX = document.querySelector('#menuX');

    this.style.display = "none";
    menuX.style.display = "block";
    lists.style.marginLeft = "-35px";
}

let menuX = document.querySelector('#menuX');

menuX.onclick = function menuX() {
    let lists = document.querySelector('#list');

    this.style.display = "none";
    menuBar.style.display = "block";
    lists.style.marginLeft = "-400px";
}