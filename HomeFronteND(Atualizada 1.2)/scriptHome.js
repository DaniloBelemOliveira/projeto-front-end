function toggleMenu(){
    const menuMobile = document.getElementById("menu-mobile");

    if(menuMobile.className == "menu-mobile"){
        menuMobile.className = "menu-mobile-activy"
    }else{
        menuMobile.className = "menu-mobile"
    }
}