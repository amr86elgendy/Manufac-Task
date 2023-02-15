import ReactECharts from 'echarts-for-react';
import { MyDataType } from '../types/myData';

export default function ScatterChart({
  data,
  xAxis,
  yAxis,
}: {
  data: (string | number)[][];
  xAxis: keyof MyDataType;
  yAxis: keyof MyDataType;
}) {
  console.log('scatter comp render');

  const options = {
    xAxis: {
      name: xAxis,
    },
    yAxis: {
      name: yAxis,
    },
    series: [
      {
        type: 'scatter',
        data,
        symbolSize: 10,
        // symbol: 'roundRect',

        itemStyle: {
          color: 'red',
        },
      },
    ],
  };
  return <ReactECharts option={options} />;
}
