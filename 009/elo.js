module.exports = {
	name: 'elo',
	description: 'Te mostra em tempo real a cotação de algumas moedas',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
		} 

        var playerName = args[0]

        var region = args[1]

        const fetch = require("node-fetch")

        var apiSummoner = `https://${region}1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${riotApiKey}`


        fetch(apiSummoner)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            var playerID = data.id;

            var playerName = data.name

            var playerRegion = region.toUpperCase()

            var summonerLevel = data.summonerLevel
           
            console.log(playerName, summonerLevel, playerRegion)
           
            var apiMastery = `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerID}?api_key=${riotApiKey}`

            fetch(apiMastery)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                var firstMasteryChamp = data[0].championId;
                var firstMasteryLevel = data[0].championLevel;
                var firstMasteryPoints = data[0].championPoints;
                var secMasteryChamp = data[1].championId;
                var secMasteryLevel = data[1].championLevel;
                var secMasteryPoints = data[1].championPoints;
                var thdMasteryChamp = data[2].championId;
                var thdMasteryLevel = data[2].championLevel;
                var thdMasteryPoints = data[2].championPoints;

                var apiInfo = `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerID}?api_key=${riotApiKey}`

                fetch(apiInfo)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    var firstTier = data[0].tier;
                    var firstRank = data[0].rank;
                    var firstLP = data[0].leaguePoints;
                    var firstWins = Number(data[0].wins) 
                    var firstLosses = Number(data[0].losses);
                    var firstWR = (firstWins * 100 / (firstLosses + firstWins)).toFixed(1)
                    if(data[0].queueType == "RANKED_SOLO_5x5"){
                        var firstQueue = "SoloQ"
                    }
                    else if(data[0].queueType == "RANKED_FLEX_SR"){
                        var firstQueue = "FlexQ"
                    }

                    var secTier = data[1].tier;
                    var secRank = data[1].rank;
                    var secLP = data[1].leaguePoints;
                    var secWins = Number(data[1].wins) 
                    var secLosses = Number(data[1].losses);
                    var secWR = (secWins * 100 / (secLosses + secWins)).toFixed(1)
                    if(data[1].queueType == "RANKED_SOLO_5x5"){
                        var secQueue = "SoloQ"
                    }
                    else if(data[1].queueType == "RANKED_FLEX_SR"){
                        var secQueue = "FlexQ"
                    }
                   
                    console.log(firstTier, firstRank, firstLP, firstWR, firstQueue)
                    console.log(secTier, secRank, secLP, secWR, secQueue)
                    console.log(firstMasteryChamp, firstMasteryLevel, firstMasteryPoints)
                    console.log(secMasteryChamp, secMasteryLevel, secMasteryPoints)
                    console.log(thdMasteryChamp, thdMasteryLevel, thdMasteryPoints)
                })
            });
        })
}}
