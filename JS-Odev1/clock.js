let userName = prompt("Adınızı Giriniz");

let bilgi = document.querySelector("#myName");
bilgi.innerHTML = `${userName}`;

var saat = document.querySelector("#myClock");
function cTime(){
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}
setInterval(cTime,1000)
