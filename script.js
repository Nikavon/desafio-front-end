function Converter() {
    let input = parseFloat(document.getElementById("valor_inicial").value);
    let output = document.getElementById("resultado");
    let de = document.getElementById("moedasde");
    let para = document.getElementById("moedaspara");
    
    console.log(de.value)
  
    //Reais
    if (de.value == "BRL" && para.value != "Moeda 2") {
      let valorEmReais = input;
      let valor;
      if (para.value == "BRL") {
        valor = "O valor em reais é: R$" + valorEmReais.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmReais * 0.16).toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmReais * 0.19).toFixed(2);
      }
      output.innerHTML = valor;
    } else {
        output.innerHTML = '';
    }
    if (de.value == "USD" && para.value != "Moeda 2") {
      let valorEmDolar = input;
      let valor;
      if (para.value == "USD") {
        valor = "O valor em dolar é: $" + valorEmDolar.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmDolar * 0.98).toFixed(2);
      } else if (para.value == "BRL") {
        valor = "O valor em real é: $" + (valorEmDolar * 5.16).toFixed(2);
      }
      output.innerHTML = valor;
    }
      if (de.value == "EUR" && para.value != "Moeda 2") {
        let valorEmEuro = input;
        let valor;
        if (para.value == "EUR") {
          valor = "O valor em euro é: R$" + valorEmEuro.toFixed(2);
        } else if (para.value == "BRL") {
          valor = "O valor em euros é: €" + (valorEmEuro * 5.26).toFixed(2);
        } else if (para.value == "USD") {
          valor = "O valor em dólar é: $" + (valorEmEuro * 1.02).toFixed(2);
        }
        output.innerHTML = valor;
      }
  }