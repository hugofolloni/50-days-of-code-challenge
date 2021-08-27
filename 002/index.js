const axios = require('axios');
const cheerio = require('cheerio');

var i = 0;

const getReadMe = async () => {
    if(i < 10){
        stringDate = "00" + i;
    }
    else if (i >= 10){
        stringDate = "0" + i;
    }
    i++;
	try {
		const { data } = await axios.get(
			`https://github.com/hugofolloni/100DaysOfCodeChallenge/tree/main/${stringDate}`
		);
		const $ = cheerio.load(data);

		$('.markdown-body.entry-content.container-lg').each((_idx, el) => {
			const newReadMe = $(el).text()
			console.log(newReadMe)
		});

	} catch (error) {
		throw error;
	}

};

getReadMe();
setInterval(getReadMe, 2000);