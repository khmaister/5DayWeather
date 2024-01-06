var cityList = [];
var cityname;

// local storage functions
initCityList();
initWeather();

function initCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cityList = storedCities;
    }
    renderCities();
}

function initWeather() {
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));
    
    if (storedWeather !== null) {
        cityname = storedWeather;
        displayWeather();
        displayFiveDayForecast();
    }
}
function storeCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}
function storeCurrentCity() {

    localStorage.setItem("currentCity", JSON.stringify(cityname));
}