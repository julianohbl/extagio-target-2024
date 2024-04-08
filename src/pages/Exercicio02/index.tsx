import { useState } from "react"
import { Exercicio02Container } from "./styles"

export function Exercicio02() {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [isInFibonacci, setIsInFibonacci] = useState<boolean | null>(null);

  const checkNumber = (): void => {
    const number = inputNumber;
    let a = 0;
    let b = 1;
    let c = 0;

    while (c < number) {
      c = a + b;
      a = b;
      b = c;
    }

    setIsInFibonacci(c === number);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value);
    setInputNumber(value);
    setIsInFibonacci(null);
  };

  return (
    <Exercicio02Container>
      <p>Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a
        soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva
        um programa na linguagem que desejar onde, informado um número, ele calcule a sequência
        de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a
        sequência.
      </p>

      <p>IMPORTANTE:</p>

      <p>Esse número pode ser informado através de qualquer entrada de sua preferência ou pode
        ser previamente definido no código;
      </p>

      <h1>Resposta:</h1>
      <div>
        <p>Digite um número para verificar se ele pertence à sequência de Fibonacci:</p>
        <input
          type="number"
          value={inputNumber}
          onChange={handleChange}
          placeholder="0"
          min={0}
        />
        <button onClick={checkNumber}>Verificar</button>
        {isInFibonacci !== null && (
          <p>
            O número {inputNumber} {isInFibonacci ? "pertence" : "não pertence"} à sequência de Fibonacci.
          </p>
        )}
      </div>


    </Exercicio02Container>
  )
}