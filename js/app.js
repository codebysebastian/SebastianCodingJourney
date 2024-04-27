const menu = document.getElementById("menu");
const menuOpen = document.getElementById("menu-open");
const dropDownMenu = document.getElementById("dropdown-menu");
const dropDownMenuLink = document.getElementsByClassName("dropdown-menu__link");

//open the dropdown menu 
menu.addEventListener("click", function () {

    menu.style.display = "none";
    menuOpen.style.display = "block";
    dropDownMenu.style.display = "flex";

});
//close the dropdown menu
menuOpen.addEventListener("click", function () {

    menuOpen.style.display = "none";
    dropDownMenu.style.display = "none";
    menu.style.display = "block";

});
//when the user does click avobe a specific section on the page.
for(let i = 0; i < dropDownMenuLink.length; i ++)
{
    dropDownMenuLink[i].addEventListener("click", function () {

        dropDownMenu.style.display = "none";
        menuOpen.style.display = "none";
        menu.style.display = "block";
        
    });
}

