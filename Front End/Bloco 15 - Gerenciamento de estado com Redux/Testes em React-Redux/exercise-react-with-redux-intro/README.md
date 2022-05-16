Esse é um projeto para o conteúdo da semana 16, sobre `Redux com react`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch` 

Verifique se as seguintes branchs apareceram:

  `exercise-one`
  `exercise-two`
  `exercise-three`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Dica: Use o Redux Devtools para ver o estado da sua aplicação em seu navegador.

#### Exercício 1

Como primeira tarefa, você deve usar o **Redux** para gerenciar o estado do componente `TrafficSignal`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

A função `renderSignal` retorna o src da imagem do sinal de trânsito e recebe como parâmetro uma string que deve vir da store.

O componente `TrafficSignal` tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

---

#### Exercício 2

Como segunda tarefa, você deve usar o **Redux** para gerenciar o estado do componente `Cars`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

Seu reducer deve ter 3 estados, `redCar`, `blueCar` e `yellowCar` e os 3 devem ser booleanos. Ao clicar no botão `Move`, o estado de seu respectivo carro deve mudar para que o carro ande. Já fizemos todo o CSS para que você se preocupe apenas com a lógica do exercício, ele encontra-se no arquivo `App.css`.

---

#### Exercício 3

Como terceira tarefa, você deve juntar seus 2 reducers anteriores em um único reducer, usando o `combineReducers`. Talvez haja uma mudança 
no estado de seu reduce, então certifique-se que ambos os componentes continuem funcionando após a união.

