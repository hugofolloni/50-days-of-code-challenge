const Discord = require('discord.js');

const execute = async (message, args) => {
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
       
        var apiMastery = `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerID}?api_key=${riotApiKey}`

        fetch(apiMastery)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            var firstMasteryChamp = data[0].championId;
            var firstMasteryLevel = data[0].championLevel;
            var firstMasteryPoints = (data[0].championPoints).toLocaleString('pt-BR');
            var secMasteryChamp = data[1].championId;
            var secMasteryLevel = data[1].championLevel;
            var secMasteryPoints = (data[1].championPoints).toLocaleString('pt-BR');
            var thdMasteryChamp = data[2].championId;
            var thdMasteryLevel = data[2].championLevel;
            var thdMasteryPoints = (data[2].championPoints).toLocaleString('pt-BR');

            championIdArray = [266, 103, 84, 166, 12, 32, 34, 1, 523, 22, 136, 268, 432, 53, 63, 201, 51, 164, 69, 31, 42, 122, 131, 119, 36, 245, 60, 28, 81, 9, 114, 105, 3, 41, 86, 150, 79, 104, 887, 120, 74, 420, 39, 427, 40, 59, 24, 126, 202, 222, 145, 429, 43, 30, 38, 55, 10, 141, 85, 121, 203, 240, 96, 7, 64, 89, 876, 127, 236, 117, 99, 54, 90, 57, 11, 21, 62, 82, 25, 267, 75, 111, 518, 76, 56, 20, 2, 61, 516, 80, 78, 555, 246, 133, 497, 33, 421, 526, 58, 107, 92, 68, 13, 360, 113, 235, 147, 875, 35, 98, 102, 27, 14, 15, 72, 37, 16, 50, 517, 134, 223, 163, 91, 44, 17, 412, 18, 48, 23, 4, 29, 77, 6, 110, 67, 45, 161, 254, 234, 112, 8, 106, 19, 498, 101, 5, 157, 777, 83, 350, 154, 238, 115, 26, 142, 143]

            championNameArray = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Chogath', 'Corki', 'Darius', 'Diana', 'Draven', 'DrMundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'KogMaw', 'Leblanc', 'LeeSin', 'Leona', 'Lilia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'MonkeyKing', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Velkoz', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']

            firstChamp = championNameArray[championIdArray.indexOf(firstMasteryChamp)]
            secondChamp = championNameArray[championIdArray.indexOf(secMasteryChamp)]
            thirdChamp = championNameArray[championIdArray.indexOf(thdMasteryChamp)]

            var apiInfo = `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerID}?api_key=${riotApiKey}`

            fetch(apiInfo)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                if(data.length == 0){
                    const embed =  new Discord.MessageEmbed()
                    .setColor('#a70000')
                    .setTitle(`:joystick: Perfil de ${playerName}`)
                    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/11.17.1/img/champion/${firstChamp}.png`)
                    .setDescription('Aqui está o que você procura:')
                    .addField('Nível / Região', `${summonerLevel} / ${region.toUpperCase()}`)
                    .addField('Ranqueada','O invocador ainda não possui nível ranqueado.')
                    .addField('Maestrias',`**[${firstMasteryLevel}]** ${firstChamp} - ${firstMasteryPoints}\n**[${secMasteryLevel}]** ${secondChamp} - ${secMasteryPoints}\n**[${thdMasteryLevel}]** ${thirdChamp} - ${thdMasteryPoints}`)
                    .addField("Página op.gg do invocador:", `||https://${playerRegion}.op.gg/summoner/userName=${playerName}||`)
                message.channel.send(embed)    
                }
                if(data.length == 1){
                    var firstTier = data[0].tier;
                    var formatted1stTier = firstTier.charAt(0).toUpperCase() + firstTier.slice(1).toLowerCase()
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
                    const embed =  new Discord.MessageEmbed()
                    .setColor('#a70000')
                    .setTitle(`:joystick: Perfil de ${playerName}`)
                    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/11.17.1/img/champion/${firstChamp}.png`)
                    .setDescription('Aqui está o que você procura:')
                    .addField('Nível / Região', `${summonerLevel} / ${region.toUpperCase()}`)
                    .addFields(
                            {name: `Ranqueada ${firstQueue}`, value:`*${formatted1stTier} ${firstRank}*\n${firstLP} PDL / Winrate: ${firstWR}%`, inline : true},
                        )
                    .addField('Maestrias',`**[${firstMasteryLevel}]** ${firstChamp} - ${firstMasteryPoints}\n**[${secMasteryLevel}]** ${secondChamp} - ${secMasteryPoints}\n**[${thdMasteryLevel}]** ${thirdChamp} - ${thdMasteryPoints}`)
                    .addField("Página op.gg do invocador:", `||https://${playerRegion}.op.gg/summoner/userName=${playerName}||`)
                message.channel.send(embed)    
                }
                if(data.length == 2){
                var firstTier = data[0].tier;
                var formatted1stTier = firstTier.charAt(0).toUpperCase() + firstTier.slice(1).toLowerCase()
                var firstRank = data[0].rank;
                var firstLP = data[0].leaguePoints;
                var firstWins = Number(data[0].wins) 
                var firstLosses = Number(data[0].losses);
                var firstWR = (firstWins * 100 / (firstLosses + firstWins)).toFixed(1)
                if(data[0].queueType == "RANKED_SOLO_5x5"){
                    var firstQueue = "Solo"
                }
                else if(data[0].queueType == "RANKED_FLEX_SR"){
                    var firstQueue = "Flex"
                }

                var secTier = data[1].tier;
                var formatted2ndTier = secTier.charAt(0).toUpperCase() + secTier.slice(1).toLowerCase()
                var secRank = data[1].rank;
                var secLP = data[1].leaguePoints;
                var secWins = Number(data[1].wins) 
                var secLosses = Number(data[1].losses);
                var secWR = (secWins * 100 / (secLosses + secWins)).toFixed(1)
                if(data[1].queueType == "RANKED_SOLO_5x5"){
                    var secQueue = "Solo"
                }
                else if(data[1].queueType == "RANKED_FLEX_SR"){
                    var secQueue = "Flex"
                }
                const embed =  new Discord.MessageEmbed()
                    .setColor('#a70000')
                    .setTitle(`:joystick: Perfil de ${playerName}`)
                    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/11.17.1/img/champion/${firstChamp}.png`)
                    .setDescription('Aqui está o que você procura:')
                    .addField('Nível / Região', `${summonerLevel} / ${region.toUpperCase()}`)
                    .addFields(
                            {name: `Ranqueada ${firstQueue}`, value:`*${formatted1stTier} ${firstRank}*\n${firstLP} PDL / Winrate: ${firstWR}%`, inline : true},
                            {name: '\u200B', value: '\u200B', inline:true },
                            {name: `Ranqueada ${secQueue}`, value:`*${formatted2ndTier} ${secRank}*\n${secLP} PDL / Winrate: ${secWR}%`, inline : true},
                        )
                    .addField('Maestrias',`**[${firstMasteryLevel}]** ${firstChamp} - ${firstMasteryPoints}\n**[${secMasteryLevel}]** ${secondChamp} - ${secMasteryPoints}\n**[${thdMasteryLevel}]** ${thirdChamp} - ${thdMasteryPoints}`)
                    .addField("Página op.gg do invocador:", `||https://${playerRegion}.op.gg/summoner/userName=${playerName}||`)
                message.channel.send(embed)           
            }
        })
        });
    })
}

module.exports = {
	name: 'elo',
	description: 'Te mostra dados estatísticos a respeito do invocador de League escolhido',
	execute,
}

