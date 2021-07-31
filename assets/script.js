console.log('test')

var key = '9cfe7036b90b3a13af1a88f6bf534b32'
var searchInput = document.getElementById('search')
var searchBtn = document.getElementById('srchBtn')
console.log(searchBtn)
var currentWeather = document.querySelector('.current-weather-display')
console.log(currentWeather)

function getApi(){
    var search = searchInput.value
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=imperial`
    
    console.log(search)

    fetch(requestUrl)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function (data){
            console.log(data)

            var displayWeatherText = 
            `
            <h2> Current Temp: ${data.main.temp} </h2>
            <h2> Feels Like: ${data.main.feels_like}</h2>
            <h2> Humidity: ${data.main.humidity}</h2>
            <h2> High Temp: ${data.main.temp_max}</h2>
            <h2> Low Temp: ${data.main.temp_min}</h2>`

            currentWeather.setAttribute('style', 'border: 5px solid black')
            currentWeather.innerHTML = displayWeatherText


        })
        
}

searchBtn.addEventListener('click', getApi)