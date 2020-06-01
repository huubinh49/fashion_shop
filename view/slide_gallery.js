var img__current = 0;

function show_img(num) {
    let imgs = Array.from(document.querySelectorAll(".gallery .album img"));
    let img_result = document.getElementById("img__current");

    img__current = num;
    let img = imgs[num];



    img_result.setAttribute("src", img.getAttribute("src"));
}
function change_img(num) {
    let imgs = Array.from(document.querySelectorAll(".gallery .album img"));
    let img_result = document.getElementById("img__current");

    img__current += num;
    if (img__current < 0)
        img__current = imgs.length - 1;
    if (img__current >= imgs.length)
        img__current = 0;
    let img = imgs[img__current];

    img_result.setAttribute("src", img.getAttribute("src"));
}