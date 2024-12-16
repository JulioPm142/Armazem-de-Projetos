// ChartComponent.tsx
import React, { useEffect, useRef } from "react";
import * as Highcharts from "highcharts";

interface ChartProps {
  dados: any[]; // Define the appropriate type for your data
  nome: string;
}

const ChartComponent: React.FC<ChartProps> = ({ dados, nome}) => {
  const chartContainerRef = useRef(null);
  useEffect(() => {
    if (chartContainerRef.current) {
      const dadosGraficoTemperatura = dados.map((item) => ({
        x: new Date(item.date).getTime(),
        y: item.dados,
      }));

      // const dadosGraficoTemperaturaMinima = dados.map((item) => ({
      //   x: new Date(item.date).getTime(),
      //   y: item.valor,
      // }));

      Highcharts.chart(chartContainerRef.current, {
        chart: {
          type: "line",
          backgroundColor: "#000",
        },
        title: {
          text: nome.toUpperCase(),
          style: {
            color: "white",
          },
        },
        xAxis: {
          type: "datetime",
          gridLineWidth: 1,
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          gridLineWidth: 1,
          title: {
            text: nome,
          },
          labels: {
            style: {
              color: "white",
            },
          },
        },
        legend: {
          itemStyle: {
            color: "white",
          },
        },
        series: [
          {
            type: "line",
            name: nome,
            data: dadosGraficoTemperatura,
            color: "#aa0000",
          },
        ],
      });
      
    }
  }, [dados, nome]);

  return <div ref={chartContainerRef} className="chart-container" />;
};

export default ChartComponent;
