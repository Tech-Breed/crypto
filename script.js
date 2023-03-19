function calculate() {
    const crypto = document.getElementById("crypto").value;
    const amount = document.getElementById("amount").value;
  
    let rate;
  
    switch (crypto) {
      case "btc":
        rate = 60000;
        break;
      case "eth":
        rate = 2000;
        break;
      case "doge":
        rate = 0.05;
        break;
      case "trx":
        rate = 0.06;
        break;
      case "xrp":
        rate = 0.36;
        break;
    }
  
    const result = amount * rate;
    document.getElementById("result").innerHTML = `${amount} ${crypto.toUpperCase()} = ${result} USD`;
  }
  