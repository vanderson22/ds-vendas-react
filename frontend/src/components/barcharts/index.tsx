//sintaxe lambda

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { AMOUNT, BASE_URL, SUCCESS } from 'utils/requests';
// PROCURAR NA PÁGINA DO APEX CHARTS ! https://apexcharts.com

type SeriesData = {
  name: string,
  data: number[]
}

type ChartData = {
  labels: {
    categories: string[],
    series: SeriesData[]
  }
}

const Barchart = () => {

  const [chartData, setChartData] = useState<ChartData>(
    {

      labels: {
        categories: [],
        series: [
          {
            name: "",
            data: []
          }

        ]
      }
    });


  useEffect(() => {
    axios.get(`${BASE_URL}${SUCCESS}`)
      .then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));

        setChartData({

          labels: {
            categories: myLabels,
            series: [
              {
                name: "% Sucesso",
                data: mySeries
              }

            ]
          }
        });
      });
  }, []);



  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };


  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.labels.series}
      type="bar"
      height="240"
    />
  );
}
export default Barchart;
