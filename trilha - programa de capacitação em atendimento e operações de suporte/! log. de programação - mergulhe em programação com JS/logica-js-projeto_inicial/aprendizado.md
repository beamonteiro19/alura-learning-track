# Resumo do Curso: Lógica de Programação com JavaScript

## O que foi feito
- Desenvolvimento de um **jogo de adivinhação** em JavaScript.
- O programa sorteia um número secreto aleatório e o usuário deve tentar adivinhar.
- Implementação de dicas (maior/menor) e contagem de tentativas até acertar.

## Aprendizados principais

### Entrada e saída
- **`alert()`**: usado para dar boas-vindas e fornecer feedback ao usuário.
- **`prompt()`**: captura a entrada do usuário como string.

### Números aleatórios
- **`Math.random()`**: gera um número decimal entre 0 e 1.
- Multiplicação por um valor (`* numeroMaximo`) para definir o intervalo.
- **`parseInt()`**: converte o resultado em número inteiro.
- Exemplo:  
  ```javascript
  let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
