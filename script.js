function generate() {
    document.getElementById("render").innerHTML = "";
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.getElementById("render").appendChild(canvas);
    });
}

function download() {
    const download = document.getElementById("download");
    let image = document.querySelector("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

document.querySelector("textarea").addEventListener('keyup', function(){
    const quoteText = document.getElementById("quote__text");

    if(this.value != ""){
        quoteText.innerHTML = this.value;
        renderCanvas();
    }
    else {
        quoteText.innerHTML = "Start typing </br>:)"
    }
    
});