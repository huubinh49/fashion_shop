const convertUrl = str => {
    let tmp = str.toLowerCase();
    tmp = tmp.replace(" ", "");
    return tmp;
}
function download(url, name){
            fetch(url)
            .then(res => res.blob())
            .then(resAsBlob =>{
                const urlBlob = URL.createObjectURL(resAsBlob);
                let  a = document.createElement("a");             
                a.href = urlBlob;
                a.download = name;
                a.target = "_blank"
                a.style.width = "20px"
                a.style.height = "20px"
                a.innerText = `download ${name}`
                a.onclick = (event)=>{event.target.style.display ="none"; };
                document.body.appendChild(a);
            })
            .catch(err => console.log(err))
}
 function autoDown(){
    for(let i = 0; i<data.length;i++){
        for(let j = 0; j<data[i]["swatches"].length;j++){
            download(`${data[i]["swatches"][j]["img"]}`, `${convertUrl(data[i]["name"])}_img_${data[i]["swatches"][j]["color_name"]}`)
            download(`https:${data[i]["swatches"][j]["color"]}`, `${convertUrl(data[i]["name"])}_color_${data[i]["swatches"][j]["color_name"]}`)
         }
         console.log("download "+ i);
    }
    
}
window.onload = () =>{
    
     autoDown();
}
window.onbeforeunload = (event)=> {
    return ''
}