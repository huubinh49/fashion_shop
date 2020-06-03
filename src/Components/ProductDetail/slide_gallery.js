var img__current = 0;

const adjustment = ()=>{
    let img = document.querySelector("img[alt='slide-product']");
    let album_wrapper = document.querySelector(".album--wrapper");
    if(album_wrapper){    
    let prev = album_wrapper.querySelector(".pre");
    let next = album_wrapper.querySelector(".next");
    let album = album_wrapper.querySelector(".album");
    let number_img = Array.from(album.getElementsByTagName("img")).length;
    let width = img.clientHeight;
        if(window.innerWidth >992){
            album_wrapper.style.height = `${Math.min(6, number_img)*width}px`;
            album.style.height = `${(Math.min(6, number_img)-0.5)*width}px`;
            prev.style.top = "0px";
            next.style.top = `${(Math.min(6, number_img)-0.5)*width+20}px`
        }else{
            album_wrapper.style.height = `${1*width}px`;
            album.style.height = `${1*width}px`;
        }
    }
};
window.onload = ()=>{
    adjustment()
    show_img(img__current)
    };
window.onresize = ()=>{
    adjustment()
    };

function show_img(num) {
    let imgs = Array.from(document.querySelectorAll(".gallery .album img"));
    let img_result = document.getElementById("img__current");
    if(imgs[num]){
    imgs[num].scrollIntoView({block:"nearest", inline:"start", behavior:"smooth"})
    img__current = num;
    let img = imgs[num];
    img_result.setAttribute("src", img.getAttribute("src"));

    // deblur another img
    for(let i = 0; i<imgs.length;i++){
        if(i !== img__current){
            imgs[i].style.filter = "none";
        }
    }
    //blur current img
    imgs[img__current].style.filter = "blur(2px)";
    }
}


function change_img(num) {
    let imgs = Array.from(document.querySelectorAll(".gallery .album img"));
    
    if(imgs){
    img__current += num;
    if (img__current < 0)
        img__current = imgs.length - 1;
    if (img__current >= imgs.length)
        img__current = 0;
    

    // Add event gallery
    // let album = document.querySelector(".gallery .album");
    // if(num<0){

    // }
    // else{
    //     album.style.top = ()
    // }
    show_img(img__current)
}
}
export {show_img, change_img}