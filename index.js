function searchEngine(event) {
    event.preventDefault();
    let input = document.querySelector(".search-input1");
    let change_city = document.querySelector(".weather-city");

    change_city.innerHTML = input.value;



}

let search_button = document.querySelector(".search-form");
search_button.addEventListener('submit', searchEngine);