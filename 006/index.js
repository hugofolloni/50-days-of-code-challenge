var submitButton = document.getElementById('submit');
var tickerInput = document.getElementById("nomeDoAtivo");
var qtyInput = document.getElementById("quantidadeDeAtivo");
var displayField = document.getElementById('display')

submitButton.addEventListener("click", () => {
    tickerLabel = tickerInput.value.toUpperCase();
    tickerQty = qtyInput.value;
    return getPrice();
});

function getPrice(){
    var api = `https://www.okanebox.com.br/api/acoes/ultima/${tickerLabel}/`
    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        var currentPrice = data.PREULT
        var tickerDisplay = document.createElement('p');
        tickerDisplay.textContent = tickerLabel;
        var qtyDisplay = document.createElement('p');
        qtyDisplay.textContent = tickerQty;
        var singlePriceDisplay = document.createElement('p');
        singlePriceDisplay.textContent = "";
        var totalPriceDisplay = document.createElement('p');
        totalPriceDisplay.textContent = "";
        singlePriceDisplay.textContent = currentPrice;
        totalPriceDisplay.textContent = currentPrice * tickerQty;
        displayField.style.cssText = 'position: relative; display: flex; flex-direction: column; padding; 10px;'
        displayField.append(tickerDisplay);
        displayField.append(qtyDisplay)
        displayField.append(singlePriceDisplay);
        displayField.append(totalPriceDisplay)
    }); 
}

// I know, the code is awful and I promise to fix this soon. It is just a proof of concept (now i know that i can do this hehe).