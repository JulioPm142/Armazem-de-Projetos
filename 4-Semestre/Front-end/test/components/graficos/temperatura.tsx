import { expect } from 'chai';
import * as React from 'react';

import ChartComponent from '../../../src/components/graficos/lineChart/temperatura/index';

describe('TESTE UNITÁRIO - Inicialização do componente de gráfico Temperatura', () => {
    it('Deve iniciar o gráfico de temperatura corretamente', () => {
        expect(ChartComponent);
        expect(ChartComponent.prototype instanceof React.Component);
        expect(ChartComponent.prototype.render);
        expect(ChartComponent instanceof React.Component);
    });
});