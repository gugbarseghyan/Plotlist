let home = document.querySelector("#home");
let food = document.querySelector("#food");
let cars = document.querySelector("#cars");
let shop = document.querySelector("#shop");
let trevel = document.querySelector("#trevel");
let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let tab3 = document.querySelector("#tab3");
let tab4 = document.querySelector("#tab4");
let tab5 = document.querySelector("#tab5");

home.onclick = function(){
    tab1.style.display = "flex";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    home.style.backgroundColor = "#2B2D42";
    food.style.backgroundColor = "#8D99AF";
    cars.style.backgroundColor = "#8D99AF";
    shop.style.backgroundColor = "#8D99AF";
    trevel.style.backgroundColor = "#8D99AF";
}
food.onclick = function(){
    tab2.style.display = "flex";
    tab1.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    food.style.backgroundColor = "#2B2D42";
    home.style.backgroundColor = "#8D99AF";
    cars.style.backgroundColor = "#8D99AF";
    shop.style.backgroundColor = "#8D99AF";
    trevel.style.backgroundColor = "#8D99AF";
}
cars.onclick = function(){
    tab3.style.display = "flex";
    tab2.style.display = "none";
    tab1.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    cars.style.backgroundColor = "#2B2D42";
    food.style.backgroundColor = "#8D99AF";
    home.style.backgroundColor = "#8D99AF";
    shop.style.backgroundColor = "#8D99AF";
    trevel.style.backgroundColor = "#8D99AF";
}
shop.onclick = function(){
    tab4.style.display = "flex";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab1.style.display = "none";
    tab5.style.display = "none";
    shop.style.backgroundColor = "#2B2D42";
    food.style.backgroundColor = "#8D99AF";
    cars.style.backgroundColor = "#8D99AF";
    home.style.backgroundColor = "#8D99AF";
    trevel.style.backgroundColor = "#8D99AF";
}
trevel.onclick = function(){
    tab5.style.display = "flex";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab1.style.display = "none";
    trevel.style.backgroundColor = "#2B2D42";
    food.style.backgroundColor = "#8D99AF";
    cars.style.backgroundColor = "#8D99AF";
    shop.style.backgroundColor = "#8D99AF";
    home.style.backgroundColor = "#8D99AF";
}