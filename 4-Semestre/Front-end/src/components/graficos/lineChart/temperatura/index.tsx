// ChartComponent.tsx
import React, { useEffect, useRef } from "react";
import * as Highcharts from "highcharts";

interface ChartProps {
  dadosTemperatura: any[]; // Define the appropriate type for your data
}

const ChartComponent: React.FC<ChartProps> = ({ dadosTemperatura }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const dadosGraficoTemperatura = dadosTemperatura.map((item) => ({
        x: new Date(item.date).getTime(),
        y: item.temperaturaMaxima,
      }));

      const dadosGraficoTemperaturaMinima = dadosTemperatura.map((item) => ({
        x: new Date(item.date).getTime(),
        y: item.temperaturaMinima,
      }));

      Highcharts.chart(chartContainerRef.current, {
        chart: {
          type: "line",
          backgroundColor: "#000",
        },
        title: {
          text: "Temperatura",
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
            text: "Temperatura C°",
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
            name: "Temperatura Máxima",
            data: dadosGraficoTemperatura,
            color: "#aa0000",
          },
          {
            type: "line",
            name: "Temperatura Mínima",
            data: dadosGraficoTemperaturaMinima,
            color: "#4ae",
          },
        ],
      });
    }
  }, [dadosTemperatura]);

  return <div ref={chartContainerRef} className="chart-container" />;
};

export default ChartComponent;
