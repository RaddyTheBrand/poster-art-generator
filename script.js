html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas);
});

function download() {
    var download = document.getElementById("download");
    var image = document.querySelector("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}




