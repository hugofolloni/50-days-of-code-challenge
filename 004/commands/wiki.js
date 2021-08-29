const axios = require('axios');
const cheerio = require('cheerio');

const execute = async (message) => {
    const args = message.content.split(' ')
    args.shift()
    var pageDirection = args.join("_")
    var pageFind = `https://pt.wikipedia.org/wiki/${pageDirection}`
    if (!args.length) {
        var pageFind = "https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria";
    } 
    try {
        
        const { data } = await axios.get(
            `${pageFind}`
        );
        const $ = cheerio.load(data);
        
        var title = []
        $('.firstHeading').each((_idx, el) => {
            var heading = $(el).text()
            title.push(heading)
        })
        var pageHeading = title[0]

        var textList = []
        $('.mw-parser-output > p').each((_idx, el) => {
            const bodyPart = $(el).text()
            textList.push(bodyPart)
        });
        
        var stringText = String(textList[0])
        if(stringText == ""){
            return message.reply("desculpe, mas esse tópico está quebrado. Tente novamente!")
        }
        if(stringText.length > 3000){
            var splitedString = stringText.split("")
            stringText = ''
            for(i=0; i < 3000; i++){
                stringText = stringText + splitedString[i]
            }
            stringText = stringText + "..."
        }

        var pageLinkToCreate = pageHeading.split(' ')
        var pageLink = pageLinkToCreate.join('_')

        var pageURL = `https://pt.wikipedia.org/wiki/${pageLink}`

        message.reply(`o resumo do seu tópico aleatório ${pageHeading} é: \n\n${stringText}\n\n ||${pageURL}||`)

    } catch (error) {
        throw error;
    }

};

module.exports = {
  name: 'wiki',
  help: 'O usuário escolhe uma página da wikipédia para ser retornada',
  execute
}