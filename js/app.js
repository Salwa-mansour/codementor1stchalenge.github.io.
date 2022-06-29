//toggle classes expand(for submenu),and show-nav-container(for mobile menu)
//close button ,open button, menu ,submenu
let closeButton = document.getElementById("close-btn");
let openButton =document.getElementById("menu-icon");
let mainMenu = document.getElementById("header-nav");
let subMenuLinks = document.getElementsByClassName("parent-menu")
let submenulinksArr = Array.from(subMenuLinks)

closeButton.addEventListener("click",closeMenu);
openButton.addEventListener("click",openMenu);
// submenulinksArr.forEach((element=>{element.addEventListener("click",toggleSubMenu(element));})) 
// submenulinksArr.forEach(element=>{element.addEventListener("click",toggleSubMenu())})
submenulinksArr.forEach(element => element.addEventListener("click", toggleSubMenu));

function closeMenu(){
    mainMenu.classList.remove("show-nav-container")

}
function openMenu(){
    mainMenu.classList.add("show-nav-container")

}
function toggleSubMenu(e){
     linkParent=e.target.parentElement;
     linkParent.classList.toggle("expand");
   
}