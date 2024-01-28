const ipadVersionSidebarIcon = document.getElementById("ipad-version-sidebar-icon")
const navbar = document.getElementById("navbar")
const ipadVersionCrossIcon = document.getElementById("ipad-version-cross-icon")


if(ipadVersionSidebarIcon){
    ipadVersionSidebarIcon.addEventListener('click',()=>{
        navbar.classList.add("active")
    })
}

if(ipadVersionCrossIcon){
    ipadVersionCrossIcon.addEventListener('click',()=>{
        navbar.classList.remove("active")
    })
}