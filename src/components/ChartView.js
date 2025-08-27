import { Line } from 'react-chartjs-2';
import prices from '../data/mockPrices.json';

const ChartView = () => {
  const data = {
    labels: prices.map(item => item.symbol),
    datasets: [{
      label: 'Price',
      data: prices.map(item => item.price),
      backgroundColor: 'rgba(99, 132, 255, 0.2)'
    }]
  };
  return <Line data={data} />;
};
