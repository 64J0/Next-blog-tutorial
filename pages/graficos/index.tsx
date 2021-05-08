import React, { useState, useRef, useCallback } from "react";
import Head from "next/head";
import Chartjs, { ChartConfiguration } from "chart.js";

import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

const GraficosPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [chartInstance, setChartInstance] = useState<Chart | null>(null);

  const [graphTitle, setGraphTitle] = useState("");
  const [verticalName, setVerticalName] = useState("");
  const [verticalData, setVerticalData] = useState("");
  const [horizontalName, setHorizontalName] = useState("");
  const [horizontalData, setHorizontalData] = useState("");

  const handleGraph = useCallback(() => {
    try {
      const yDataWithSpaces = verticalData.split(",");
      const yData: string[] = [];
      yDataWithSpaces.forEach((y) => {
        return yData.push(y.trim());
      });

      const xDataWithSpaces = horizontalData.split(",");
      const xData: string[] = [];
      xDataWithSpaces.forEach((x) => {
        return xData.push(x.trim());
      });

      const chartConfig = {
        type: "line",
        data: {
          labels: xData,
          datasets: [
            {
              label: verticalName,
              borderColor: "#0f679a",
              data: yData,
              borderWidth: 3,
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            fontSize: 24,
            text: graphTitle
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                fontSize: 14,
                labelString: horizontalName
              }
            }],
            yAxes: [{
            }]
          }
        }
      };

      if (canvasRef.current) {
        chartInstance && chartInstance.destroy();

        const context2d = canvasRef.current.getContext("2d");
        const newChartInstance = new Chartjs(
          (context2d as CanvasRenderingContext2D), 
          (chartConfig as ChartConfiguration)
        );
        setChartInstance(newChartInstance);
      }
    } catch (error) {
      alert("Operação inválida");
      console.error(error);
    }
  }, [graphTitle, verticalName, verticalData, horizontalName, horizontalData, canvasRef]);

  return (
    <Layout home="">
      <Head>
        <title>Gráficos</title>
      </Head>

      <div className={styles.graphic}>
        <h1>Gere um Gráfico</h1>

        <form
          className={styles['graphic__form']}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles['graphic__form-section']}>
            <label htmlFor="graph-title">Título do gráfico:</label>
            <input
              id="graph-title"
              type="text"
              value={graphTitle}
              onChange={(e) => setGraphTitle(e.target.value)}
            />
          </div>

          <div className={styles['graphic__form-section']}>
            <label htmlFor="vertical-name">Título vertical:</label>
            <input
              id="vertical-name"
              type="text"
              value={verticalName}
              onChange={(e) => setVerticalName(e.target.value)}
            />
          </div>

          <div className={styles['graphic__form-section']}>
            <label htmlFor="vertical-data">Dados de y:</label>
            <textarea
              id="vertical-data"
              value={verticalData}
              onChange={(e) => setVerticalData(e.target.value)}
            />
          </div>
          <span className={styles['graphic__tips']}>
            Exemplo: 0.2, 1.3, 3, 4.123124
          </span>

          <div className={styles['graphic__form-section']}>
            <label htmlFor="horizontal-name">Título horizontal:</label>
            <input
              id="horizontal-name"
              type="text"
              value={horizontalName}
              onChange={(e) => setHorizontalName(e.target.value)}
            />
          </div>

          <div className={styles['graphic__form-section']}>
            <label htmlFor="horizontal-data">Dados de x:</label>
            <textarea
              id="horizontal-data"
              value={horizontalData}
              onChange={(e) => setHorizontalData(e.target.value)}
            />
          </div>
          <span className={styles['graphic__tips']}>
            Exemplo: 0, 1, 3, 4
          </span>

          <button
            className={styles['graphic__button']}
            type="button"
            onClick={handleGraph}
          >
            Gerar!
          </button>
        </form>

        <canvas ref={canvasRef}></canvas>
      </div>
    </Layout>
  );
}

export default GraficosPage;