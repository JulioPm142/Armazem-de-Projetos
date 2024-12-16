<h1 align="center"> Equipe ACE - Sprint 2: 03/04/2023 à 23/04/2023 </h1>

<br id="topo">
<p align="center">
    <a href="#objetivo">Objetivo da Sprint</a>  |  
    <a href="#entrega">Entregas</a>
</p>

<span id="objetivo">

## :dart: Objetivo

O objetivo dessa sprint era cumprir 4 requisitos: A melhoria das antigas funcionalidades de acordo com o que foi definido pelo cliente, uma página que disponibilizasse uma tabela pra mostrar todos os usuários, novas telas para apresentar relatórios gerados por busca de datas; sendo elas: bussca por data de pagamento, data de crédito e data de vencimento.
<div align="center">
    
![image](https://user-images.githubusercontent.com/79228873/233870034-7d7eb587-1aab-4141-b6c5-f95aa55e9013.png)
    
</div>
<span id="entrega">

## :heavy_check_mark: Entrega

### Refinamento das funcionalidades 
Após o feedback do cliente, foi levantado algumas melhorias e correções a serem aplicadas no site.

Essas melhorias são principalmente adição de máscaras aos campos, alinhamento de valores e etc. Foi feito também, o preenchimento automático dos campos
relacionados ao endereço assim que definido um cep.

![cadastrocliSP2](https://user-images.githubusercontent.com/79228873/233870886-82a14784-7878-4d3d-a203-b00b3cfed628.gif)

### Listagem de Clientes

Essa funcionalidade representa uma tela na qual o usuário tanto comercial, quanto financeiro terá acesso às informações principais e de maneira rápida
de todos clientes cadastrados no banco de dados.
Agora é possível acessar as opções acerca do pagamento das parcelas através de um cliente mostrado na tabela de clientes, basta apertar no ícone e ocorrerá o 
direcionamento.
A tela também conta com um campo para busca de clientes pelo nome, esse campo filtra em tempo real os valores digitados pelo usuário e trás o cliente desejado. 
Além disso, a tabela apresenta paginação, mostrando 5 registros por página, de maneira que o usuário possa navegar entre elas.

![listagemcliSP2](https://user-images.githubusercontent.com/79228873/233871191-964eabe1-bd29-4a3e-8ddb-4a9472be5423.gif)

### Relatórios

Para essa sprint, a funcionalidade de relatórios das parcelas se baseia numa busca no banco de dados a partir de duas datas escolhidas pelo usuário, a busca pode ser feita para retornar parcelas de acordo com datas de pagamento, de vencimento e de crédito, basta escolher a busca desejada e definir as datas.
Feito a busca, é retornado uma listagem de parcelas de todos os clientes (futuramente será possível fazer isso por cliente específico), já com algumas informações. 
É possível também clicar num ícone que aparecerá em cada parcela para ser direcionado ao pagamento de parcelas daquele cliente específico.
Cada página possui, também, paginação contendo 5 itens por página.

![relatorioSP2](https://user-images.githubusercontent.com/79228873/233872056-6de5f050-25e1-4b61-bc8b-2b0bfe5b9849.gif)

