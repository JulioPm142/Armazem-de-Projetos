<h1 align="center"> Equipe ACE - Sprint 4: 15/05/2023 à 04/06/2023 </h1>

<br id="topo">
<p align="center">
    <a href="#objetivo">Objetivo da Sprint</a>  |  
    <a href="#entrega">Entregas</a>
</p>

<span id="objetivo">

## :dart: Objetivo
Para última sprint, nosso objetivo foi adicionar uma funcionalidade que demonstrasse de maneira simples se um cliente era adimplente ou inadimplente, assimo como, evoluir o design dos relatórios e refinar suas funções, e por fim apresentar uma documentação acerca das regras de negócio. Além de todas essas mudanças, também houveram adições extras como: responsividade e criação de usuários.
  
  
<span id="entrega">
  
## :heavy_check_mark: Entregas
  
### Funcionalidade para mostrar adimplência
Agora, na tela de listagem de clientes,  é possível saber quais clientes são adimplentes e quais são inadimplentes. Se um cliente tiver uma parcela vencida que ainda não foi paga, este será indicado como inadimplente, enquanto que, se um cliente pagou uma parcela, dentro ou fora do vencimento, ou se uma parcela não paga ainda não venceu, então, ele será indicado como adimplente.
    
 ![funcAdimpl](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/cba6655b-1f69-416e-bf5d-ffbea19ba34a)
  
### Refinamento dos relatórios
A tela dos relatórios sofreu inúmeras mudanças, a começar por ser uma única tela que oferece a escolha de qual tipo de relatório será mostrado, ao invés de ter que ficar indo de tela em tela para acessar o tipo de relatório desejado. Os tipos de relatórios também foram atualizados, agora são 4: relatório de parcelas a vencer, de parcelas pagas, de parcelas creditadas e de parcelas em atraso. Além disso agora os relatórios mostram a situação das parcelas; no relatório "a vencer" elas podem estar: vencidas, pagas ou a vencer, no relatório de "pagas" elas podem estar: pagas ou não pagas, no relatório de "creditadas" elas podem estar: em aberto, creditadas ou a creditar, e no relatório "em atraso" elas podem estar: em atraso, pagas, a pagar ou pagas em atraso. Além disso, cada tipo de relatório possui dados específicos gerais como: total de parcelas a vencer, total recebido, quantidade de parcelas creditadas e etc.
    
 ![funcRelatFinal](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/a5d0dc61-d041-4b2a-a1d4-28e7b8ab1026)

  ### Adições extras
  Algumas funcionalidades extras também foram desenvolvidas, elas são: cadastro de usuários e responsividade.
  
  #### Cadastro de usuários
  Usuários administradores são capazes de cadastrar outros usuários em uma tela exclusiva. Esses usuários cadastrados podem somente ser do tipo financeiro e comercial.
    
 ![funcCadasUsu](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/a8378960-a840-4e80-a960-1fe82d1f1997)
  
  #### Responsividade
  Todas as telas do sistema agora apresentam responsividade, tornando a interface muito mais acessível à outras plataformas e tamanhos de telas.
    
<div align="center">
    
![demonstRespo](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/a424b8c7-2f6b-4d4f-8574-06b54f44052d)
    
</div>
    
 ### Documentação
  O sistema possui 4 principais regras de negócio: Cadastro de clientes, Registro de parcelas a vencer, Registro de baixa de parcela e Relatórios de cobrança.
  Cada uma dessas regras possui alguns requisitos específicos que também são abordados.
  
 #### Cadastro de cliente:
  Essa regra é contemplada quando um usuário comercial ou admin, acessa a aba de "cadastrar clientes". Nela o usuário determina o preço do serviço comprado pelo cliente e também as informações relevantes sobre o cliente, como: nome, cpf, telefone e endereço completos (requisitos abordados).
  
  #### Registro de parcelas a vencer:
  Essa regra é contemplada quando um usuário comercial ou admin, acaba de cadastrar um novo cliente com seu serviço. Após o cadastro o sistema gerará automaticamente 12 parcelas referentes àquele serviço, de forma que a primeira parcela vença 30 dias após a obtenção do serviço, e as subsequentes vencem 30 dias após sua anterior (requisitos abordados).
  
  #### Registro de baixa de parcela:
  Essa regra é contemplada quando um usuário financeiro ou admin, acessa a função de pagamento de parcelas de um cliente específico. Ele é então direcionado à última parcela a vencer do cliente, onde decidirá os valores para incorporar a data de pagamento, data de crédito e o valor pago, valor este que não pode ser menor que o valor da parcela, porém pode ser igual ou maior (requisitos abordados).
  
  #### Relatórios de cobrança:
  Essa regra é contemplada quando um usuário financeiro ou admin, acessa a aba de "relatórios". Nela o usuário poderá escolher um valor de data inicial e data final para trazer do banco de dados todas as parcelas dentro desse intervalo, e então ele escolherá um tipo de relatório (parcelas a vencer, pagas, creditadas e em atraso) e ao fazer a busca trará as parcelas juntamente com diversas informações pertinentes através do status da parcela (paga, vencida, em atraso e etc) e dados gerais, de forma que uma parcela só é considerada paga se o pagamento já tiver "caído" (requisitos abordados). 
   
 Para melhor entender o fluxo de como o sistema será usado por cada usuário e a aplicação das regras de negócio, é possível consultar o BPMN a seguir.
 #### BPMN do fluxo de utilização do sistema:
    
 #### Parte 1 (cadastro de cliente e registro de parcelas):
    
 ![image](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/1c7527d1-1eab-4822-98af-32441cf7a441)

#### Parte 2 (registro de baixa das parcelas):
 ![image](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/c5256623-84eb-4231-88e2-3f3a2806f2b9)

  
#### Parte 3 (Relatórios de cobrança):
![image](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/e9112133-ca2f-4f00-9a1f-bddb2b5e770b)
    
#### BPMN Completo:
![image](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/475e8da1-6881-44f4-a04d-9fb52ffd8019)





