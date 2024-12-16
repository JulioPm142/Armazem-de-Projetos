# Testes de software

Os testes são escritos usando o frameworks de testes **Mocha** e **Chai**, focados na verificação de diferentes aspectos do sistema. Os testes garantem que os elementos visuais e interações se comportem conforme o esperado em diferentes cenários.

# Executando os testes

Para executar os testes, é necessário que o sistema esteja rodando localmente e o banco de dados esteja conectado. Siga os passos abaixo:

1. Abra um terminal (ex: CMD, Terminal, etc.).
2. Digite o comando npm test na raiz do projeto.

```
npm test
```

# Como escrever novos testes

Ao escrever novos testes, é importante seguir diretrizes para garantir a eficácia dos mesmos, utilizando das bibliotecas Mocha e Chai. Seguem abaixo algumas diretrizes:

1. Nomenclatura clara: Nomear os testes de forma clara e descritiva, indicando o que está sendo testado.
2. Compreensão do comportamento: Proporcionar o comportamento esperado do sistema após a execução do teste.
3. Isolamento de testes: Garantir que teste unitários seja independente e não dependa do estado ou resultado de outros testes.
4. Cobertura abrangente: Buscar cobrir o máximo possível do código, identificando áreas críticas e garantindo a confiabilidade do sistema.
5. Testes de regressão: Garantir que os testes sejam executados sempre que uma nova funcionalidade for adicionada ou alterada, evitando que erros sejam introduzidos no sistema.

Todos os testes estão localizados na pasta raiz ./test, separados em pastas de acordo com a entidade que está sendo testada, como ./test/components. Dentro de cada pasta, os testes estão separados em arquivos de acordo com o componente que está sendo testado, como ./test/components/graficos/chuva.tsx, ./test/components/graficos/temperatura.tsx, etc.

# Exemplo de Teste

Exemplo de um teste unitário realizado para verificar a inicialização correta do componente de gráfico de chuva.

Teste localizado em ./test/components/graficos/chuva.tsx

```
import { expect } from 'chai';
import * as React from 'react';

import ChartComponent from '../../../src/components/graficos/lineChart/chuva/index';

describe('TESTE UNITÁRIO - Inicialização do componente de gráfico Chuva', () => {
    it('Deve iniciar o gráfico de chuva corretamente', () => {
        expect(ChartComponent);
        expect(ChartComponent.prototype instanceof React.Component);
        expect(ChartComponent.prototype.render);
        expect(ChartComponent instanceof React.Component);
    });
});
```
