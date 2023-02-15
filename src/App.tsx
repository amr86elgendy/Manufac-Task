import { useMemo } from 'react';
import BarChart from './components/BarChart';
import ScatterChart from './components/ScatterChart';
import { data } from './data';

type AverageType = {
  [key: string]: { count: number; total: number };
};
function App() {
  const scatterXAxis = 'Color intensity';
  const scatterYAxis = 'Hue';

  const scatterData = useMemo(() => {
    console.log('memo run');
    return data.map((option) => [option[scatterXAxis], option[scatterYAxis]]);
    // here data is unnecessary dependency (static data) because mutating them doesn't re-render the component, but in real work this will be returning from an API
  }, [data, scatterXAxis, scatterYAxis]);

  const barXAxis = 'Alcohol';
  const barYAxis = 'Malic Acid';

  const barData = useMemo(() => {
    const averages = data.reduce((r: AverageType, el) => {
      r[el[barXAxis]] = r[el[barXAxis]] || { count: 0, total: 0 };
      r[el[barXAxis]].count++;
      r[el[barXAxis]].total += el[barYAxis];
      return r;
    }, {});
    const xAxis = Object.keys(averages).map(key => parseInt(key));
    const series = Object.values(averages).map((el) => el.total / el.count);
    return { xAxis, series };
  }, [data, scatterXAxis, scatterYAxis]);
  
  return (
    <main className=''>
      <ScatterChart
        data={scatterData}
        xAxis={scatterXAxis}
        yAxis={scatterYAxis}
      />
      <BarChart data={barData} xAxis='Alcohol' yAxis='Malic Acid' />
    </main>
  );
}

export default App;
