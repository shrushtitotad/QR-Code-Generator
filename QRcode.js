var textInput=document.querySelector("#textInput")
var QRImg=document.querySelector("#QRImg")

async function generate(){
    var apiURL="https://api.qrserver.com/v1/create-qr-code/?size=220x180&data="+textInput.value
    var imgSource=await fetch(apiURL)
    console.log(apiURL)
    var QRImg=document.querySelector("#QRImg")
    QRImg.src=apiURL;
    console.log(QRImg)
    QRImg.classList.toggle("show-qr")
    document.querySelector(".window").style.height="350px"
}