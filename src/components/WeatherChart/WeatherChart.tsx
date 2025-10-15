// import { Typography } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { WeatherChartProps } from '@/types/WeatherTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeatherChart({ hourlyData }: WeatherChartProps) {
  if (!hourlyData || !hourlyData.length) return <div>No data for chart</div>;

  const labels = hourlyData.map((item) => item.time);
  const temps = hourlyData.map((item) => item.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Hourly forecast for ${hourlyData[0].city}`,
        data: temps,
        borderColor: '#ffb36c',
        backgroundColor: 'rgba(192, 75, 75, 0.2)',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Hourly forecast for ${hourlyData[0].city}`,
        // align: 'center',
        align: 'start',
        color: '#333',
        font: {
          size: 16,
          weight: 600,
        },
        position: 'top',
        fullSize: false,
      },
    },
    layout: {
      padding: {
        top: 26,
        bottom: 26,
      },
    },
    scales: {
      x: { title: { display: true, text: 'Hour' } },
      y: { title: { display: true, text: '°C' } },
    },
  };

  return (
    <div style={{ marginTop: '40px', maxWidth: '1300px', margin: '0 auto' }}>
      <Line
        options={options}
        data={chartData}
        style={{ backgroundColor: '#E8E8E8' }}
      />
    </div>
  );
}
