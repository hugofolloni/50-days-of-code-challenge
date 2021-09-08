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
        const region = data.location.name;
        const country = data.location.country;
        const location = region + ', ' + country;
        const localtime = data.location.localtime.split(' ')[1];
        const today = data.location.localtime.split(' ')[0].split('-').reverse().join('/')

        const isDayBinary = data.current.is_day;
        if(isDayBinary == 1){
            var isDay = "Está de dia"
        }
        else if(isDayBinary == 0){
            var isDay = "Está de noite"
        }

        const todayFinder = data.forecast.forecastday[0];

        var icon = data.current.condition.icon;
        var iconLink = icon.split('').splice(2, (Number(icon.length) - 2)).join('');

        const current = {
            condition: data.current.condition.text,
            temperature: data.current.temp_c + " °C",
            minTemperature: todayFinder.day.mintemp_c + " °C",
            feelsLike: data.current.feelslike_c + " °C",
            maxTemperature: todayFinder.day.maxtemp_c + " °C",
            windSpeed: data.current.wind_kph + "km/h",
            chanceOfRain: todayFinder.day.daily_chance_of_rain + '%',
            sunrise: todayFinder.astro.sunrise,
            sunset: todayFinder.astro.sunset,
        }
    
        const tomorrowFinder =  data.forecast.forecastday[1];
    
        const tomorrow = {
            date: tomorrowFinder.date.split('-').reverse().join('/'),
            averageTemperature: tomorrowFinder.day.avgtemp_c + " °C",
            minTemperature: tomorrowFinder.day.mintemp_c + " °C",
            maxTemperature: tomorrowFinder.day.maxtemp_c + " °C",
            chanceOfRain: tomorrowFinder.day.daily_chance_of_rain + '%',
            condition: tomorrowFinder.day.condition.text,
            sunrise: tomorrowFinder.astro.sunrise,
            sunset: tomorrowFinder.astro.sunset
        }

        const embed = new Discord.MessageEmbed()
                    .setColor('#993399')
                    .setTitle(`:white_sun_rain_cloud: Condições Climáticas em ${region}`)
                    .setDescription(`${location}`)
                    .setThumbnail(`https://${iconLink}`)
                    .addFields(
                            {name: `Hoje — ${today} — ${localtime}`, value:`\n**Situação climática**:\n${current.condition}.\n**${isDay}.**\n**Chance de chuva:** ${current.chanceOfRain}\n**Velocidade do vento:** ${current.windSpeed}`, inline : true},
                            {name: '\u200B', value: '\u200B', inline:true },
                            {name: `Temperaturas`, value:`**Temperatura atual:** ${current.temperature}\n**Sensação térmica:** ${current.feelsLike}\n**Máxima:** ${current.maxTemperature} — **Mínima:** ${current.minTemperature}`, inline : true},
                        )
                    .addFields(
                        {name: `Amanhâ — ${tomorrow.date}`, value:`**Condição climática provável:**\n${tomorrow.condition}.\n**Chance de chuva:** ${tomorrow.chanceOfRain}.`, inline: true},
                        {name: '\u200B', value: '\u200B', inline:true},
                        {name: `Amanhã`, value:`**Média:** ${tomorrow.averageTemperature}\n**Máxima:** ${tomorrow.maxTemperature} — **Mínima:** ${tomorrow.minTemperature}`, inline : true},
                    )
                    .addField("Amanhecer — Anoitecer", `**Hoje:** ${current.sunrise} — ${current.sunset}\n**Amanhã:** ${tomorrow.sunrise} — ${tomorrow.sunset}`)
                message.channel.send(embed) 
    })

}

module.exports = {
	name: 'tempo',
	description: 'Te mostra dados climáticos da localização pesquisada.',
	execute,
}
