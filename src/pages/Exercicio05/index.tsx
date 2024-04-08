import { useState } from "react";
import { Exercicio05Container } from "./styles";

export function Exercicio05() {
  const [inputString, setInputString] = useState<string>('');
  const [invertedString, setInvertedString] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputString(event.target.value);
  };

  const invertString = (): void => {
    let inverted = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      inverted += inputString[i];
    }
    setInvertedString(inverted);
  };

  return (
    <Exercicio05Container>
      <p>Escreva um programa que inverta os caracteres de um string.</p>
      <p>IMPORTANTE:</p>
      <p>a) Essa string pode ser informada através de qualquer entrada de sua preferência ou
        pode ser previamente definida no código;
      </p>
      <p>b) Evite usar funções prontas, como, por exemplo, reverse;</p>

      <h1>Resposta:</h1>

      <div>
        <input
          type="text"
          value={inputString}
          onChange={handleInputChange}
          placeholder="Digite o texo aqui"
        />
        <button onClick={invertString}>Inverter</button>
        {invertedString && (
          <p>A string invertida é: {invertedString}</p>
        )}
      </div>
    </Exercicio05Container>
  )
}