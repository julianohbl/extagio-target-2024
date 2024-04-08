import { Exercicio01Container } from "./styles";

export function Exercicio01() {
  const codigo = `
  int INDICE = 13, SOMA = 0, K = 0;

  enquanto K < INDICE faça
  
  {
  
  K = K + 1;
  
  SOMA = SOMA + K;
  
  }
  
  imprimir(SOMA);
  `;

  return (
    <Exercicio01Container>
      <div>
        <p>Observe o trecho de código abaixo:</p>

        <pre><code>
          {codigo}
        </code></pre>

        <p>Ao final do processamento, qual será o valor da variável SOMA?</p>
      </div>

      <h1>Resposta:</h1>
      <p>Ao final do processamento a variável SOMA terá o valor 91</p>
    </Exercicio01Container >
  )
}