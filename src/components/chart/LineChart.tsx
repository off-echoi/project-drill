import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineCahrtProps {
  chartData: ChartData<'line'>;
  height?: string;
  width?: string;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const LineChart = ({ chartData, height = '100%', width = '100%' }: LineCahrtProps) => {
  return (
    <div style={{ height: height, maxHeight: '100dvh', width: width }}>
      <Line options={options} data={chartData} />
    </div>
  );
};
