<h1 align="center"> Equipe ACE - Sprint 1: 13/03/2023 à 02/04/2023 </h1>

<br id="topo">
<p align="center">
    <a href="#objetivo">Objetivo da Sprint</a>  |  
    <a href="#entrega">Entregas</a>
</p>

<span id="objetivo">

## :dart: Objetivos da Sprint
A partir da apresentação do desafio enfrentado pela empresa parceira, a solução desenvolvida se configura em um sistema onde seus funcionários cadastram clientes junto das parcelas que estiverem ligadas a eles e dão baixa nas parcelas quando forem pagas.
<div align="center">

![Screenshot 2023-04-02 210022](https://user-images.githubusercontent.com/101061910/229386159-9eeb26d4-3862-4c73-8736-64747c2d5eea.png)

</div>

→ [Voltar ao topo](#topo)

<span id="entrega">

## :heavy_check_mark: Entregas

### Cadastro de cliente e de parcelas

As funcionalidades de cadastro de cliente e de registro/cadastro de parcelas são contempladas ao mesmo tempo pelo usuário comercial, ou seja, assim que um cliente é cadastrado, as parcelas são cadastradas automaticamente. Isso ocorre pois o cliente já é cadastrado com um serviço fictício e apartir deste, são geradas 12 parcelas (regra de negócio da geração das parcelas), levando em consideração o valor do serviço, que foi escolhido pelo usuário comercial.

Cada parcela, quando gerada, possui um id único, um id referente ao cliente dono da parcela, um valor calculado a partir do preço do serviço e uma data de vencimento, que de acordo com as regras de negócio impostas pelo cliente, deve ser igual a 30 dias após a "compra" do serviço, isto para a primeira parcela, pois as 11 seguintes devem ser iguais a 30 dias após a data de vencimento da parcela anterior.

<br></br>

![cadastroCliEPar](https://user-images.githubusercontent.com/79228873/229387307-19b3a797-9080-4f83-bedb-b9014197a373.gif)

<br></br>

### Baixa/Controle das parcelas

A funcionalidade de controle das parcelas é realizada pelo usuário financeiro. Este, assim que seleciona um cliente (existente) pelo nome do cliente, é direcionado para uma página onde são apresentadas as informações referentes à sua última parcela a vencer (caso o cliente não tenha pago nenhuma, então a parcela que aparecerá vai ser a primeira; caso tenha pago a primeira, então a parcela que aparecerá vai ser a segunda e assim por diante...).

Se o financeiro seguir para operação de pagamento de parcela, ele será direcionado para a página de pagamento onde escolherá quais valores atribuir para os campos: data de pagamento, data de crédito e valor pago. Assim que o usuário digitar os valores desejados e confirmar a operação de atualização nos dados da parcela, ela será devidamente atualizada no banco de dados. Desta forma, se o usuário voltar para tela de informações da parcela, ele irá se deparar com uma nova parcela selecionada. Isso ocorre porque a parcela anterior já foi atualizada e agora é tratada como paga, então o back-end devolve a parcela conseguinte a ela.

<br></br>

![baixaParcela](https://user-images.githubusercontent.com/79228873/229388996-224a7961-e8ef-4c04-b503-003049ae0914.gif)

→ [Voltar ao topo](#topo)
