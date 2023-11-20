import React, { useState } from "react";
import "./calculator.scss";

//Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado

const Calculator = () => {
  //Variáveis
  const [value, setValue] = useState("");
  const [valueBy3, setValueBy3] = useState("");
  const [valueBy5, setValueBy5] = useState("");
  var somaDivididoPor3 = 0;
  var somaDivididoPor5 = 0;

  //Atualiza o valor de value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function calculaValor(event) {
    //previne que ao clicar no botão atualiza a página
    event.preventDefault();
    //Converte value em interiro e atribui seu valor a variável valor
    var valor = parseInt(value);
    //se valor atribuido a resto 1 === 0, então ele é inteiro e tem que ser não negativo
    if (valor % 1 === 0 && valor >= 1) {
      // inicia o loop em 0 e continua executando enquanto i for menor do que a variavel, e iteranto i a cada loop concluido
      for (var i = 0; i < valor; i++) {
        // se i atribuido a resto 3 for igual a zero, então o número é divisível por 3 e deve ser iterado a variável soma
        if (i % 3 === 0) {
          somaDivididoPor3 += i;
          setValueBy3(somaDivididoPor3);
        }
        // se i atribuido a resto 5 for igual a zero, então o número é divisível por 5 e deve ser iterado a variável soma
        if (i % 5 === 0) {
          somaDivididoPor5 += i;
          setValueBy5(somaDivididoPor5);
        }
      }
    } else
      alert(
        "O número digitado é invalido! Lembre-se o número deve ser inteiro e positivo!"
      );
  }
  return (
    <div className="calculator">
      <div className="formcontainer">
        <form>
          <input
            type="number"
            pattern="/^\d+$/"
            required
            placeholder="Digite um número inteiro positivo"
            name="value"
            value={value}
            onChange={handleChange}
          />
          <button onClick={calculaValor}>calcular</button>
          <p>
            Somatória da divisão por 3: {valueBy3} <br />
            Somatória da divisão por 5: {valueBy5}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
