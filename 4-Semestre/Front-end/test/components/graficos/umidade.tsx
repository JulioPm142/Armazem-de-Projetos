import { expect } from 'chai';
import * as React from 'react';

import ChartComponent from '../../../src/components/graficos/lineChart/humidade/index';

describe('TESTE UNITÁRIO - Inicialização do componente de gráfico Umidade', () => {
    it('Deve iniciar o componente de umidade corretamente', () => {
        expect(ChartComponent);
        expect(ChartComponent.prototype instanceof React.Component);
        expect(ChartComponent.prototype.render);
        expect(ChartComponent instanceof React.Component);

    });
});