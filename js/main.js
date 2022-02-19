var navBtn = document.getElementById("navBtn")
var photo = document.getElementById("photo")
var sliderNav = document.getElementById("sliderNav")
var body = document.getElementsByName("body")
var navItems = document.getElementById("navItems")
var searchField = document.getElementById("searchField")
var BtnSearchField = document.getElementById("BtnSearchField")



navBtn.addEventListener("click", function (e) {
    var x = e.target.className
    if (x.includes("uil-bars")) {
        navBtn.classList.replace("uil-bars", "uil-times")
        navItems.classList.add("active")
    } else {
        navBtn.classList.replace("uil-times", "uil-bars")
        navItems.classList.remove("active")
    }
})
window.addEventListener("scroll", function () {
    navBtn.classList.replace("uil-times", "uil-bars")
    navItems.classList.remove("active")
})


BtnSearchField.addEventListener("click", function () {
    var searchValue = searchField.value
})


// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================
// ======================================================API part============================================================



var leftData = document.getElementById("leftData")
var middleData = document.getElementById("middleData")
var rightData = document.getElementById("rightData")
var searchField = document.getElementById("searchField")
var BtnSearchField = document.getElementById("BtnSearchField")



var weatherData = [];
async function getWeather(city) {
    var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=667c6d01b6374e36826133739220702&q=${city}&days=3&aqi=no&alerts=no`)


    var finalResponse = await res.json();
    weatherData = finalResponse
    console.log(weatherData.location.name)
    displayLeftWeather()
    displayMiddleWeather()
    displayRightWeather()
}
getWeather("cairo")


BtnSearchField.addEventListener("click", function () {
    var searchValue = searchField.value
    getWeather(searchValue)
})



function displayLeftWeather() {
    var allDate = weatherData.location.localtime
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var myDate = new Date(allDate)
    var today = myDate.getDay()
    var strToday = days[today]


    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    month = myDate.getMonth();
    strMonth = monthNames[month]


    var dayMonth = allDate.slice(5, 7)
    dayMonth > 10 ? dayMonth = allDate.slice(5, 7) : dayMonth = allDate.slice(6, 7)

    var directions = ['East', 'West', 'North', 'South']
    var windDirection;
    var wind_dir = weatherData.current.wind_dir.toLowerCase()
    if (wind_dir.startsWith("e") ) {
        windDirection = directions[0]
    }
    else if (wind_dir.startsWith("w")) {
        windDirection = directions[1]
    }
    else if (wind_dir.startsWith("n")) {
        windDirection = directions[2]
    }
    else if (wind_dir.startsWith("s")) {
        windDirection = directions[3]
    }


    leftCartoona =
        `<div class="headerData w-100 d-flex justify-content-between p-2">
        <p>${strToday}</p>
        <p>${dayMonth + strMonth}</p>
    </div>
    <div class="contentData">
        <h3>${weatherData.location.name}</h3>
        <h1 class="d-inline">${weatherData.current.temp_c} &#8451;</h1>
        <img src="${weatherData.current.condition.icon}" style="margin-left:20px">
        <p>${weatherData.current.condition.text}</p>
        <div class="details">
            <span> <i class="uil uil-umbrella"></i> ${weatherData.current.humidity}</span>
            <span> <i class="uil uil-wind"></i>${weatherData.current.wind_kph}km/h </span>
            <span><i class="uil uil-compass"></i> ${windDirection}</span>
        </div>
    </div>`
    leftData.innerHTML = leftCartoona;

}





function displayMiddleWeather() {
    var allDate = weatherData.location.localtime
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var myDate = new Date(allDate)
    var today = myDate.getDay()
    var strToday = days[today + 1]



    middleCartoona =
        `<div class="headerData w-100  p-2 text-center">
        <p>${strToday}</p>
    </div>
    <div class="contentData text-center ">
    <img src="${weatherData.forecast.forecastday[1].day.condition.icon}" style="margin-left:20px">
        <h3>${weatherData.forecast.forecastday[1].day.maxtemp_c}&#8451;</h3>
        <h4>${weatherData.forecast.forecastday[1].day.mintemp_c}&deg;</h4>
        <p>${weatherData.forecast.forecastday[1].day.condition.text}</p>
    </div>`
    middleData.innerHTML = middleCartoona
}





function displayRightWeather() {
    var allDate = weatherData.location.localtime
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var myDate = new Date(allDate)
    var today = myDate.getDay()
    var strToday = days[today + 2]



    rightCartoona =
        `<div class="headerData w-100  p-2 text-center">
        <p>${strToday}</p>
    </div>
    <div class="contentData text-center ">
    <img src="${weatherData.forecast.forecastday[2].day.condition.icon}" style="margin-left:20px">
        <h3>${weatherData.forecast.forecastday[2].day.maxtemp_c}&#8451;</h3>
        <h4>${weatherData.forecast.forecastday[2].day.mintemp_c}&deg;</h4>
        <p>${weatherData.forecast.forecastday[2].day.condition.text}</p>
    </div>`
    rightData.innerHTML = rightCartoona
}



