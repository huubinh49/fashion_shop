function close_collapse(my_btn) {
    let menu_id = my_btn.getAttribute("data-collapse")
    let menu = document.getElementById(menu_id);
    menu.style.display = "none";

    let black_div = document.querySelector(".over--black");
    black_div.style.display = "none";
}
function open_collapse(my_btn) {
    let black_div = document.querySelector(".over--black");
    black_div.style.display = "block";
    black_div.style.position = "fixed";
    let menu_id = my_btn.getAttribute("data-collapse")
    let menu = document.getElementById(menu_id);
    menu.style.display = "flex";
    menu.style.position = "fixed";
}

// Fix bug resize
window.addEventListener("resize", function () {
    let button_toggle = document.querySelector(".nav__close--collapse");
    close_collapse(button_toggle)
    let btn_times = Array.from(document.querySelectorAll(".dropdown__icon"));
    btn_times.forEach(btn => {
        hide_dropdown(btn);
    })

}, false)
// MenuDropdown on Mobile
function hide_dropdown(my_icon) {
    let menu_dropdown = my_icon.parentElement.parentElement.querySelector('ul[class^="dropdown__menu"]');
        let black_div = document.querySelector(".over--black");
        black_div.style.display = "none";
        my_icon.getElementsByClassName("fa-angle-down")[0].style.display = "block";
        my_icon.getElementsByClassName("fa-times")[0].style.display = "none";
        my_icon.style.backgroundColor = "whitesmoke";
        my_icon.setAttribute("data-onshow", "false");
        menu_dropdown.style.display = "none"
    
}
function toggle_dropdown(my_icon) {
    if (window.innerWidth < 989) {
        let data_onshow = my_icon.getAttribute("data-onshow");
        let menu_dropdown = my_icon.parentElement.parentElement.querySelector('ul[class^="dropdown__menu"]');
        if (data_onshow === "false") {
            my_icon.getElementsByClassName("fa-angle-down")[0].style.display = "none";
            my_icon.getElementsByClassName("fa-times")[0].style.display = "block";
            my_icon.style.backgroundColor = "rgb(245, 82, 6)";
            my_icon.setAttribute("data-onshow", "true")
            // my_icon 
            menu_dropdown.style.display = "block"
        }
        else {
            my_icon.getElementsByClassName("fa-angle-down")[0].style.display = "block";
            my_icon.getElementsByClassName("fa-times")[0].style.display = "none";
            my_icon.style.backgroundColor = "whitesmoke";
            my_icon.setAttribute("data-onshow", "false");
            menu_dropdown.style.display = "none"
        }
    }
}
/// Scroll
window.addEventListener("resize",menu_scroll,false)
document.addEventListener("scroll", menu_scroll, false)
function menu_scroll() {
    let currentWidth = window.innerWidth;
    let currentY = window.pageYOffset;
    let header = document.querySelector("header");
    if(header){
    let header_height = header.offsetHeight;
    if(currentY<header_height)
    {
        header.classList.remove("header__mobile--onFix");
        header.classList.remove("header__pc--onFix");
    }
    else
    {
        if (currentWidth < 989) {
            header.classList.remove("header__pc--onFix")
            header.classList.add("header__mobile--onFix",currentY >= header_height)
        }
        else {
            header.classList.remove("header__mobile--onFix")
            header.classList.add("header__pc--onFix", currentY >= header_height)
        }
    }}
}
////
//Show menu dropdown on PC
document.addEventListener("mousemove", show_menu, false)
document.addEventListener("scroll", show_menu, false)
// TODO - hehe
function show_menu() {
    if (window.innerWidth >= 989) {
        // to determine header height
        let header = document.querySelector("header");
        // chose nav__item which can be dropped
        let nav__dropdown = Array.from(document.getElementsByClassName("nav__item--dropdown"));
        // chose toggle as a button to drop
        let dropdown_toggle = nav__dropdown.map(item => item.querySelector(".dropdown__toggle"));
        //add event each of toggle button 
        
        dropdown_toggle.forEach(toggle => {
            // chose list dropdown nearest
            let menu = toggle.parentElement.querySelector('ul[class^="dropdown__menu"]');
            // distance to normal position
            let distance = 50;
            if (menu.classList.contains("dropdown__menu--huge")) {
                //because the menu has fixed position 
                menu.style.top = header.offsetHeight + distance + "px";
                menu.style.left = 0 + "px";
                // when we touch toggle button
                toggle.onmouseover = () => {
                    menu.classList.add("show__menu--huge")
                }
                toggle.onmouseout = () => {
                    menu.classList.remove("show__menu--huge")
                }
               
                // when we touch menu dropdown
                toggle.nextElementSibling.onmouseover = () => {
                    menu.classList.add("show__menu--huge")
                }
                
                toggle.nextElementSibling.onmouseout = () => {

                    menu.classList.remove("show__menu--huge")
                }
            } else {
                // If we scroll page 
                if (window.pageYOffset > header.offsetHeight)
                    menu.style.top = header.offsetHeight +30+"px";
                else
                //because the menu has fixed position 
                menu.style.top = header.offsetHeight / 2 + 30 + distance + "px";
                menu.style.width = 180 + "px";
                menu.style.left = -10 + "px";
                // when we touch toggle button
                toggle.onmouseover = () => {
                    menu.classList.add("show__menu")
                }
                toggle.onmouseout = () => {
                    menu.classList.remove("show__menu")
                }
                // when we touch menu dropdown
                toggle.nextElementSibling.onmouseover = () => {
                    menu.classList.add("show__menu")
                }
                toggle.nextElementSibling.onmouseout = () => {

                    menu.classList.remove("show__menu")
                }
            }
        }
        )
    }

}
export {open_collapse, close_collapse, hide_dropdown, toggle_dropdown,  menu_scroll, show_menu}