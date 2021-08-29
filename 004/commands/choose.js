const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const path = require('path')

const execute = async (message) => {
    const args = message.content.split(' ')
    args.shift()
    var pageLink = args.join("_")
    var pageURL = `https://pt.wikipedia.org/wiki/${pageLink}`
    if (!args.length) {
        return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
    } 
    try {
        
        const { data } = await axios.get(
            `${pageURL}`
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
            const newReadMe = $(el).text()
            textList.push(newReadMe)
        });
        var stringText = String(textList[0])
        if(stringText.length > 3000){
            var splitedString = stringText.split("")
            stringText = ''
            for(i=0; i < 3000; i++){
                stringText = stringText + splitedString[i]
            }
            stringText = stringText + "..."
        }

        message.reply(`, o resumo do seu tópico ${pageHeading}: \n\n${stringText}\n\n ||${pageURL}||`)

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
  name: 'choose',
  help: 'O usuário escolhe uma página da wikipédia para ser retornada',
  execute
}