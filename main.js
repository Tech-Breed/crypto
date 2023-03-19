function convert() {
    const currency1 = document.getElementById("currency1").value;
    const currency2 = document.getElementById("currency2").value;
    const amount = document.getElementById("amount").value;
  
    const api_url = `https://api.coinbase.com/v2/exchange-rates?currency=${currency1}`;
    
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        const rate = data.data.rates[currency2];
        const convertedAmount = rate * amount;
        document.getElementById("result").innerHTML = `${amount} ${currency1} is ${convertedAmount.toFixed(2)} ${currency2}`;
      })
      .catch(error => {
        console.log(error);
        document.getElementById("result").innerHTML = "Error fetching data from API";
      });
  }
  