//toggle classes expand(for submenu),and show-nav-container(for mobile menu)
//close button ,open button, menu ,submenu
let closeButton = document.getElementById("close-btn");
let openButton = document.getElementById("menu-icon");
let mainMenu = document.getElementById("header-nav");
let subMenuLinks = document.getElementsByClassName("parent-menu")
let submenulinksArr = Array.from(subMenuLinks)

closeButton.addEventListener("click", closeMenu);
openButton.addEventListener("click", openMenu);
mainMenu.addEventListener("click", outsideClickmenuColse)
//submenulinksArr.forEach(element => element.addEventListener("click", toggleSubMenu));
mainMenu.addEventListener("click", toggleSubMenu);

function closeMenu() {
    mainMenu.classList.remove("show-nav-container")

}

function openMenu() {
    mainMenu.classList.add("show-nav-container")

}

function outsideClickmenuColse(e) {

    if (e.target.classList.contains("show-nav-container")) {
        e.target.classList.remove("show-nav-container")
    }
}

function toggleSubMenu(e) {

    //     menuItem=e.target;
    //       const allItems=Array.from(
    //         menuItem.parentElement.children
    //       )
    //       allItems.forEach(item=>item.classList.remove("expand"))//close any other opend menu
    //  //   menuItem.classList.toggle("expand");//open the targeted one
    //     if(menuItem.classList.contains("expand")){
    //         menuItem.classList.remove("expand")
    //         console.log("should remove")
    //     }else{
    //         menuItem.classList.add("expand")
    //         console.log("shoud idd")
    //     }
    const clickeditem = e.target
    clickeditem.classList.toggle("expand")
    const allItems = Array.from(
        clickeditem.parentElement.children
    )
    allItems.forEach(function (item) {
        if (item != clickeditem) {
            item.classList.remove("expand")
        }
    })
}
// -------------------------------
//const target = document.querySelector('#myTarget')//subMenuLinks

// document.addEventListener('click', (event) => {
//     const withinBoundaries = event.composedPath().includes(submenulinksArr)
//   console.log(withinBoundaries)
//     if (withinBoundaries) {
//         submenulinksArr.forEach(element => element.addEventListener("click", toggleSubMenu));
//     } else {
//     //  target.innerText = 'Click happened **OUTSIDE** element'
//     } 
//   })
//collpas menus when clicked outside
const onClickOutside = (e) => {
    if (!e.target.className.includes("parent-menu")) {
        console.log('hy')
        submenulinksArr.forEach(element => element.classList.remove("expand"))
    }
};
window.addEventListener("click", onClickOutside);