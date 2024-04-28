function updatetemp(response) {
    let temperatures = document.querySelector(".temp-detail");
    let cityElement = document.querySelector(".weather-city");
    let description = document.querySelector(".condition");
    let humid = document.querySelector(".humid");
    let windSpeed = document.querySelector(".speed");
    let dateTime = document.querySelector(".date");
    let date = new Date(response.data.time * 1000);
    let output1 = response.data.temperature.humidity;
    let output2 = response.data.wind.speed;
    console.log(response.data)

    dateTime.innerHTML = formatDate(date)
    humid.innerHTML = `${output1}%`;
    windSpeed.innerHTML = `${output2}km/h`;
    cityElement.innerHTML = response.data.city;
    description.innerHTML = response.data.condition.description;

    temperatures.innerHTML = Math.round(response.data.temperature.current);

    // time


}

function formatDate(date) {
    let minute = date.getMinutes();
    let hours = date.getHours();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
    ];

    let day = days[date.getDay()];

    if (minute < 10) {
        minute = `0${minute}`;
    }



    return `${day} ${hours}:${minute}`;


}
function searchCity(city) {
    let apiKey = "f831500415adaof5bc93fd0tde1db8d4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updatetemp);

}




function searchEngine(event) {
    event.preventDefault();
    let input = document.querySelector(".search-input1");
    let change_city = document.querySelector(".weather-city");

    change_city.innerHTML = input.value;
    searchCity(input.value);


}


let search_button = document.querySelector(".search-form");
search_button.addEventListener('submit', searchEngine);