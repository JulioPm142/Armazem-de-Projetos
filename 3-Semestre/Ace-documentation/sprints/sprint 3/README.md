<h1 align="center"> Equipe ACE - Sprint 3: 24/04/2023 à 14/05/2023 </h1>

<br id="topo">
<p align="center">
    <a href="#objetivo">Objetivo da Sprint</a>  |  
    <a href="#entrega">Entregas</a>
</p>

<span id="objetivo">

## :dart: Objetivo
Nessa sprint tivemos como objetivo aplicar as regras de autenticação e autorização no sistema, além disso, foi preciso reajustar a lógica dos relatórios de cobrança que não estava totalmente alinhada com a expectativa do cliente, por fim, foi elaborado uma forma alternativa de visualizar as parcelas dos clientes.
  
  <span id="entrega">
  
## :heavy_check_mark: Entregas
  
### Autenticação e Autorização
Com a segurança implementada a partir de agora é necessário logar para acessar as funções do site. Quando é feito o login, o backend fica responsável por validar se aquele usuário existe e se suas informações estão corretas e caso estejam, aquele usuário fica apto a utilizar as funcionalidades do sistema. Em relação à autorização, existem 3 tipos de usuários: o admin, o comercial e o financeiro. O admin pode acessar todas as funções, a função de cadastrar clientes está autorizada apenas para o comercial, e a função de baixa de parcelas e relatório de cobranças estão autorizadas apenas para o financeiro, enquanto a listagem de clientes do banco está autorizada para todos usuários.
      
![login](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/1f163755-9a31-46a4-bef9-036475ad4e67)
  
### Mudança nos relatórios de cobrança 
As buscas nos relatórios estão agora atualizadas, a busca por data de pagamento, assim como por data de crédito, trará apenas aquelas parcelas que já foram pagas, enquanto que a busca por data de vencimento trará as parcelas que estão em atraso e as que ainda estão abertas.

![relatorioupdate](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/2e10ff46-efbe-42b8-9579-946fbd3d79e7)
  
### Nova visualização das parcelas
As parcelas de cada cliente poderão ser mostradas através de um modal que aparecerá na tela quando acessado, além disso, também é possível ver um "resumo" das informações de cada cliente, tudo isso clicando no ícone de lupa.

![parcelasupdate](https://github.com/Equipe-Ace/Ace-documentation/assets/79228873/920a076a-0e2a-45cc-9fc0-0181cae3204c)

