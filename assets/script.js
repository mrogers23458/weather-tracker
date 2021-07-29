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

            var tempNow = document.createElement('h2')
            tempNow.textContent = 'Current Temp ' + data.main.temp

            currentWeather.append(tempNow)


        })
}

searchBtn.addEventListener('click', getApi)