
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu-container");
let dash = document.querySelector(".burger");

let links = document.querySelectorAll(".nav-link");

burger.addEventListener("click", function() {
    burger.classList.toggle("activebrgr");

    if(menu.classList.contains("activemenu")){
        menu.classList.remove("activemenu");
        menu.classList.add("deactivatemenu");
    }
    else {
        menu.classList.add("activemenu");
        menu.classList.remove("deactivatemenu");
    }
});


links[3].addEventListener("click", function() {
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});

links[4].addEventListener("click", function() {
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});


links[5].addEventListener("click", function() {
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});