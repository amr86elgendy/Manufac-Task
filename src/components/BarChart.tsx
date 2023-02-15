import ReactECharts from 'echarts-for-react';
import { MyDataType } from '../types/myData';

type BarDataType = {
  xAxis: number[];
  series: number[];
};

export default function BarChart({
  data,
  xAxis,
  yAxis,
}: {
  data: BarDataType;
  xAxis: keyof MyDataType;
  yAxis: keyof MyDataType;
}) {
  console.log(data);
  const options = {
    xAxis: {
      name: xAxis,
      data: data.xAxis,
    },
    yAxis: {
      name: yAxis,
    },
    series: [
      {
        type: 'bar',
        data: data.series,
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
