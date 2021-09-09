var playerArray = [];
var rodada = 1;

const execute = async (message, args) => {
    if (!args.length) {
        return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
    } 

    const decision = args[0];  
 
   function getCard(){ 
        var cardName;  
        var cardValue; 
        var cardNumber = Math.ceil(Math.random() * 14)
        if(cardNumber > 11){ 
            cardValue = 10;
        }
        else{ 
            cardValue = cardNumber;
        }
        if(cardNumber == 11){ 
            cardName = "Ás"
        }
        else if(cardNumber == 12){
            cardName = 'Valete';
        }
        else if(cardNumber == 13){
            cardName = "Dama";
        }
        else if(cardNumber == 14){ 
            cardName = "Rei";
        }
        else{  
            cardName = cardNumber;
        }

        playerArray.push(cardValue)

        var naipeNumber = Math.ceil(Math.random() * 4); 
        switch(naipeNumber){
            case 1:
                var naipeName = 'Ouro';
                break;
            case 2:
                var naipeName = 'Copas';
                break;
            case 3:
                var naipeName = 'Paus';
                break;
            case 4:
                var naipeName = 'Espadas'
                break;
        }
        console.log(cardName, cardValue)
        message.channel.send(`Sua carta é: **${cardName} de ${naipeName}**!`); 
        rodada++;
    }


    if(decision == 'start'){ 
        playerArray = []; 
        rodada = 1;
        message.reply("Bem vindo ao **BLACKJACK**!\nSeu objetivo é chegar os 21 pontos.") 
        getCard(); 
        getSum(); 
    }


    if(decision == 'pedir'){
        if(rodada == 1){
            message.reply(`você não começou um jogo ainda!`)
        } 
        else{
            console.log(rodada) 
            getCard(); 
            getSum();
        }
    }


    if(decision == 'parar'){
        if(rodada == 1){
            message.reply(`você não começou um jogo ainda!`)
        } 
        console.log(rodada);
        const soma = playerArray.reduce((total, currentElement) => total + currentElement);
        message.channel.send(`Você decidiu parar! Sua soma é de ${soma}!\nAgora o dealer vai jogar!`);
        dealerGame();
    }


    if(decision == 'hard-reset'){
        playerArray = [];
        rodada = 1;
        message.reply(`o jogo atual de Blackjack sofreu um hard reset!`);
    }


    if(decision == "mostrar-lista"){
        message.reply(`a lista é ${playerArray}`);
    }

    
    if(decision == "help"){
        message.reply("\n\n** BEM VINDO AO GUIA DO BLACKJACK **\n\nPara começar, devemos saber do que se trata o jogo:\n     No Blackjack, você deve pedir o máximo de cartas sem ultrapassar o valor limite de 21.\n       Consiga 21 pontos e ganhe\n       Passe de 21 e perca\n       Pare antes do 21 e torça para o dealer não ultrapassar você!\nVamos aos comandos aqui disponíveis:\n     '.blackjack start' : inicia um jogo.\n     '.blackjack pedir' : pede mais uma carta.\n     '.blackjack parar' : para o jogo e da vez ao dealer.\n     '.blackjack hard-reset' : reseta seu jogo.\n     '.blackjack mostrar-lista' : relembra quais cartas você já tirou.\n\n**DIVIRTA-SE**")
    }


    function getSum(){ 
        console.log(playerArray)
        const soma = playerArray.reduce((total, currentElement) => total + currentElement) 
        console.log(soma, rodada) 
        message.channel.send(`Estamos na rodada ${rodada} e você soma **${soma} pontos**`); 
        if(soma > 21){ 
            message.reply(`\n** ### !!VOCÊ PERDEU!! ### **\nVocê ultrapassou os 21 pontos e perdeu!\n                       **:(**`)
        }
        if(soma == 21){
            message.reply(`\n** ### !!VOCÊ VENCEU!! ### **\nVocê alcançou 21 pontos e triunfou!\n                       **$$$**`)
        }
    }


    function dealerGame(){
        dealerArray = []
        var somaDealer = 0;
        while(somaDealer <= 21){
            newCard = Math.ceil(Math.random() * 14);
            if(newCard > 11){
                newCard = 10;
            }
            dealerArray.push(newCard);
            somaDealer = somaDealer + newCard;
        }
        somaDealer = somaDealer - newCard;
        message.channel.send(`A soma do Dealer foi: ${somaDealer}`)
        const soma = playerArray.reduce((total, currentElement) => total + currentElement)
        if(soma > somaDealer){
            message.reply(`\n** ### !!VOCÊ VENCEU!! ### **\nSua soma: ${soma}\nSoma do Dealer: ${somaDealer}\n                       **$$$**`);
        } 
        else if(soma == somaDealer){
            message.reply(`\n** ### !!TEMOS UM EMPATE!! ### **\nSua soma: ${soma}\nSoma do Dealer: ${somaDealer}\n                       **;-;**`);
        }
        else if(soma < somaDealer){
            message.reply(`\n** ### !!VOCÊ PERDEU!! ### **\nSua soma: ${soma}\nSoma do Dealer: ${somaDealer}\n                       **:(**`);
        }
        playerArray = [];
        rodada = 1;
    }
}

module.exports = {  
  name: 'blackjack',
  help: 'Jogo de Blackjack para o Discord',
  execute
}