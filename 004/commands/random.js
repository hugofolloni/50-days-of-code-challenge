const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const path = require('path')

const execute = async (message) => {
    try {

        const { data } = await axios.get(
            `https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria`
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

        message.channel.send("Estou indo pegar uma imagem dele!")
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(`${pageURL}`)
        await page.screenshot({ path : path.join(__dirname, '../assets/page.png')})
        await browser.close();
        message.channel.send({ files: [path.join(__dirname, '../assets/page.png')]})

    } catch (error) {
        throw error;
    }
};

module.exports = {
  name: 'random',
  help: 'Retorna uma página aleatória da Wikipédia',
  execute
}