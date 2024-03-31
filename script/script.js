let imgLogo = document.getElementById("logo");
imgLogo.setAttribute("src", "./assets/icon-logo-nav.svg");
let hora = new Date();
let agora = hora.getHours();
let avatar = document.getElementById("avatar");
let tituloPricipal = document.getElementById("titulo-principal");

if(agora >= 0 && agora < 6) {
    document.body.style.backgroundColor = "#2d6c89";
    avatar.setAttribute("src", "./../img/img1.jpg");
} else if (agora >= 6 && agora < 12) {
    document.body.style.backgroundColor = "#f9d487";
    document.body.style.color = "black";
    avatar.setAttribute("src", "./../img/img2.jpg");
} else if (agora >= 12 && agora < 18) {
    document.body.style.backgroundColor = "#fcbea4";
    document.body.style.color = "black";
    avatar.setAttribute("src", "./../img/img3.jpg");
} else if (agora >= 18) {
    document.body.style.backgroundColor = "#193d4b";
    avatar.setAttribute("src", "./../img/img4.jpg");
    tituloPricipal.style.color = "black";
}

function menuClick() {
    let menuRes = document.getElementById("itens")

    if(menuRes.style.display == "none") {
        menuRes.style.display = "block"
    } else {
        menuRes.style.display = "none"
    }
}

let main = document.getElementById("container");
main.style.backgroundColor = "white";

