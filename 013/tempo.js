const Discord = require('discord.js');

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
        var region = data.location.name;
        var country = data.location.country;
        var location = region + ', ' + country;
        var localtime = data.location.localtime.split(' ')[1];
        var today = data.location.localtime.split(' ')[0].split('-').reverse().join('/')

        var isDayBinary = data.current.is_day;
        if(isDayBinary == 1){
            var isDay = "Está de dia"
        }
        else if(isDayBinary == 0){
            var isDay = "Está de noite"
        }
        var todayFinder = data.forecast.forecastday[0];

        var currentCondition = data.current.condition.text;
        var currentIcon = data.current.condition.icon;
        var iconLink = currentIcon.split('').splice(2, (Number(currentIcon.length) - 2)).join('')
        var currentTemperature = data.current.temp_c + " °C";
        var currentFeelsLike =  data.current.feelslike_c + " °C";
        var currentWindSpeed = data.current.wind_kph + "km/h";
        var currentMinTemperature = todayFinder.day.mintemp_c + " °C";
        var currentMaxTemperature = todayFinder.day.maxtemp_c + " °C";
        var currentChanceOfRain = todayFinder.day.daily_chance_of_rain + '%';
        var currentSunrise = todayFinder.astro.sunrise;
        var currentSunset = todayFinder.astro.sunset;

        var tomorrowFinder =  data.forecast.forecastday[1];
    
        var tomorrowDate = tomorrowFinder.date.split('-').reverse().join('/')
        var tomorrowAverageTemperature = tomorrowFinder.day.avgtemp_c + " °C";
        var tomorrowMinTemperature = tomorrowFinder.day.mintemp_c + " °C";
        var tomorrowMaxTemperature = tomorrowFinder.day.maxtemp_c + " °C";
        var tomorrowChanceOfRain = tomorrowFinder.day.daily_chance_of_rain + '%';
        var tomorrowCondition = tomorrowFinder.day.condition.text;
        var tomorrowSunrise = tomorrowFinder.astro.sunrise;
        var tomorrowSunset = tomorrowFinder.astro.sunset;

        const embed = new Discord.MessageEmbed()
                    .setColor('#993399')
                    .setTitle(`:white_sun_rain_cloud: Condições Climáticas em ${region}`)
                    .setDescription(`${location}`)
                    .setThumbnail(`https://${iconLink}`)
                    .addFields(
                            {name: `Hoje — ${today} — ${localtime}`, value:`\n**Situação climática**:\n${currentCondition}.\n**${isDay}.**\n**Chance de chuva:** ${currentChanceOfRain}\n**Velocidade do vento:** ${currentWindSpeed}`, inline : true},
                            {name: '\u200B', value: '\u200B', inline:true },
                            {name: `Temperaturas`, value:`**Temperatura atual:** ${currentTemperature}\n**Sensação térmica:** ${currentFeelsLike}\n**Máxima:** ${currentMaxTemperature} — **Mínima:** ${currentMinTemperature}`, inline : true},
                        )
                    .addFields(
                        {name: `Amanhâ — ${tomorrowDate}`, value:`**Condição climática provável:**\n${tomorrowCondition}.\n**Chance de chuva:** ${tomorrowChanceOfRain}.`, inline: true},
                        {name: '\u200B', value: '\u200B', inline:true},
                        {name: `Amanhã`, value:`**Média:** ${tomorrowAverageTemperature}\n**Máxima:** ${tomorrowMaxTemperature} — **Mínima:** ${tomorrowMinTemperature}`, inline : true},
                    )
                    .addField("Amanhecer — Anoitecer", `**Hoje:** ${currentSunrise} — ${currentSunset}\n**Amanhã:** ${tomorrowSunrise} — ${tomorrowSunset}`)
                message.channel.send(embed) 
    })

}

module.exports = {
	name: 'tempo',
	description: 'Te mostra dados climáticos da localização pesquisada.',
	execute,
}
