import COLORS from '@constants/colors'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {
      label: '모의고사',
      data: [65, 60, 70, 76, 88, 90, 81, 82, 90, 93, 88, 95],
      fill: false,
      backgroundColor: `${COLORS.PrimaryBlue}`,
      borderColor: `#ccc`,
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  legend: {
    display: false,
  },
}

function LineChart() {
  return (
    <div style={{ height: 'calc(100vh - 240rem)', minHeight: '200rem' }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
