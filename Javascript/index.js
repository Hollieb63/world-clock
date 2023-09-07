setInterval(function(){

let londonElement=document.querySelector("#london");
let londonDateElement=londonElement.querySelector(".date");
let londonTimeElement=londonElement.querySelector(".time");
londonDateElement.innerHTML=moment().format("MMMM Do, YYYY");
londonTimeElement.innerHTML=moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small>]");

let tokyoElement=document.querySelector("#tokyo");
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
tokyoDateElement.innerHTML=moment().format("MMMM Do, YYYY");
tokyoTimeElement.innerHTML=moment().tz("Asia/Tokyo").format("h:mm:ss [<small>]A[</small>]");

let seoulElement=document.querySelector("#seoul");
let seoulDateElement=seoulElement.querySelector(".date");
let seoulTimeElement=seoulElement.querySelector(".time");
seoulDateElement.innerHTML=moment().format("MMMM Do, YYYY");
seoulTimeElement.innerHTML=moment().tz("Asia/Seoul").format("h:mm:ss [<small>]A[</small>]");

let quebecElement=document.querySelector("#quebec");
let quebecDateElement=quebecElement.querySelector(".date");
let quebecTimeElement=quebecElement.querySelector(".time");
quebecDateElement.innerHTML=moment().format("MMMM Do, YYYY");
quebecTimeElement.innerHTML=moment().tz("Canada/Central").format("h:mm:ss [<small>]A[</small>]");
},1000);

function updateCity(event){
    let cityTimeZone=event.target.value;
    let cityName= cityTimeZone.split("/")[1];
    let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=
    `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>`;
}

let selectCityElement=document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);