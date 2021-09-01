const apiKey = "8d92e74f0900e38c20a3e86a5aef948b";
let cityName = 'sylhet';
let defualtTemp = 0;
const loadData = () => {
    if (defualtTemp != 0) {
        cityName = document.getElementById('search-city').value;
        document.getElementById('search-city').value = '';
    }
    const url = `HTTPS://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));
};
if (defualtTemp == 0) {
    loadData();
    defualtTemp++;
}

const showData = data => {
    // console.log(data.weather[0].main);
    const weatherInKelvin = data.main.temp;
    const weatherInCelsius = parseInt(weatherInKelvin - 273.15);
    const weatherType = data.weather[0].main;
    // console.log(weatherInCelsius);
    const weatherOfACity = document.getElementById('city-name');
    const weatherTemp = document.getElementById("temperature");
    const weatherCondition = document.getElementById("weather-condition");
    weatherTemp.innerText = weatherInCelsius + '°C'
    weatherCondition.innerText = weatherType;
    weatherOfACity.innerText = cityName;
};