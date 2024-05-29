let imgLogo = document.getElementById("logo");
imgLogo.setAttribute("src", "./assets/icon-logo-nav.svg");
let hora = new Date().getHours();
let avatar = document.getElementById("avatar");
let tituloPricipal = document.getElementById("titulo-principal");

try {
    if(hora >= 0 && hora < 6) {
        document.body.style.backgroundColor = "#2d6c89";
        document.body.style.color = "white";
        avatar.setAttribute("src", "../img/img1.jpg");
    } else if(hora >= 6 && hora < 12) {
        document.body.style.backgroundColor = "#f9d487";
        document.body.style.color = "black";
        avatar.setAttribute("src", "../img/img2.jpg");
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = "#fcbea4";
        document.body.style.color = "black";
        avatar.setAttribute("src", "../img/img3.jpg");
    } else if(hora >= 18 && hora <= 23) {
        document.body.style.backgroundColor = "#193d4b";
        document.body.style.color = "white";
        avatar.setAttribute("src", "../img/img4.jpg");
    }    
} catch (error) {
    console.log(error)
}


function menuClick() {
    let menuRes = document.getElementById("itens")

    if(menuRes.style.display == "none") {
        menuRes.style.display = "block"
    } else {
        menuRes.style.display = "none"
    }
}

