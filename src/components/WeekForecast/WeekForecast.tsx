/* eslint-disable @next/next/no-img-element */
import { useWeekWeather } from '@/lib/hooks/useWeekWeather';
import { Box, Typography } from '@mui/material';

export default function WeekForecast() {
  const { data } = useWeekWeather('Kyiv');
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#E8E8E8',
          display: 'flex',
          flexDirection: 'column',
          width: '1300px',
          margin: '40px auto',
          borderRadius: '16px',
          padding: '16px',
          '@media (max-width: 768px)': {
            width: '100%',
          },
          '@media (max-width: 1024px)': {
            width: '100%',
          },
        }}
      >
        <Typography variant="subtitle2" style={{ margin: '26px 0 0 42px' }}>
          6-day forecast
        </Typography>
        {data.map((day, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr  1fr 1fr',
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                borderRadius: '12px',
                padding: '8px 16px',
                mb: 1.5,
                columnGap: 2,
                boxSizing: 'border-box',
              }}
            >
              <Typography variant="caption">
                {day.weekday}, {day.date}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                  alt={day.weather.description}
                  style={{ margin: '22px 0 15px' }}
                />
                <Typography>
                  {day.temp_min}/{day.temp_max}°C
                </Typography>
              </Box>

              <Typography>{day.weather.description}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
