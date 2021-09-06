const execute = async (message, args) => {
    if (!args.length) {
        return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
    } 
    var localidade = args.join("_");

    const api = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${localidade}&lang=pt&days=2`
    const fetch = require("node-fetch");

    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        var location = data.location.name + ', ' + data.location.country;
        var localtime = data.location.localtime.split(' ')[1];

        var isDayBinary = data.current.is_day;
        if(isDayBinary == 1){
            var isDay = "Está de dia"
        }
        else if(isDayBinary == 0){
            var isDay = "Está de noite"
        }
        const today = {
        currentCondition: data.current.condition.text,
        icon: data.current.condition.icon,
        currentTemperature: data.current.temp_c + " °C",
        currentFeelsLike: data.current.feelslike_c + " °C",
        currentWindSpeed: data.current.wind_kph + "km/h",
        currentChanceOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain + "%",
        }

        const tomorrowFinder =  data.forecast.forecastday[1],

        tomorrow = {
            date = tomorrowFinder.date.split('-').join(' ').reverse(),
            averageTemperature = tomorrowFinder.day.avgtemp_c + " °C",
            minTemperature = tomorrowFinder.day.mintemp_c + " °C",
            maxTemperature = tomorrowFinder.day.maxtemp_c + " °C",
            chanceOfRain = tomorrowFinder.day.daily_chance_of_rain + '%',
            condition = tomorrowFinder.day.condition.text,
            sunrise = tomorrowFinder.astro.sunrise,
            sunset = tomorrowFinder.astro.sunset
        }
        

        
        console.log(tomorrow, '\n', tomorrow.chanceOfRain)
    })

}

module.exports = {
	name: 'tempo',
	description: 'Te mostra dados climáticos da localização pesquisada.',
	execute,
}