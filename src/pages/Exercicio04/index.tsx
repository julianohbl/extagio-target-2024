import { Exercicio04Container } from "./styles";

export function Exercicio04() {
  return (
    <Exercicio04Container>
      <p>
        Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala
        diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar
        os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla
        qual lâmpada.
      </p>

      <p>
        Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas,
        qual interruptor controla cada lâmpada?
      </p>

      <h1>Resposta:</h1>

      <p>Liguaria o primeiro interruptor e aguardaria alguns minutos.</p>
      <p>Depois apagaria ele, ligaria o segundo interruptor e entraria na primeira sala.</p>
      <p>Se a lâmpada estiver acesa, o segundo interruptor é da primeira sala.</p>
      <p>Daí acenderia o terceiro interruptor e entraria na segunda sala.</p>
      <p>Se estiver acesa quer dizer que a primeira sala é o segundo interruptor, a segunda é o terceiro interruptor e a terceira é o primeiro interruptor.</p>
      <p>Se não estiver acesa quer dizer que a primeira sala é o segundo interruptor, a segunda sala é o primeiro e a terceira é o terceiro interruptor.</p>
      <p>Caso eu entrasse na primera sala e estivesse apagada, verificaria se a lâmpada está quente.</p>
      <p>Se a lâmpada estiver quente, quer dizer que o primeiro interruptor é da primeira sala.</p>
      <p>Daí seria só sair, acender o segundo interruptor e entrar na segunda sala.</p>
      <p>Se estiver aceso quer dizer que a primeira sala é o primeiro interruptor, a segunda é o segundo interruptor e a terceira é o terceiro interruptor.</p>
      <p>Se não estiver acesa quer dizer que a primeira sala é o primeiro interruptor, a segunda sala é o terceiro interruptos e a terceira é o segundo interruptor.</p>

    </Exercicio04Container>
  )
}