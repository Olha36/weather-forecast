'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { typography } from '../../../typography.js';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherChart from '../WeatherChart/WeatherChart';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeekForecast from '../WeekForecast/WeekForecast';
import News from '../News/News';
import { FormattedForecastItem, NewDayProps } from '@/types/WeatherTypes.js';

const theme = createTheme({
  typography,
});

export default function Home() {
  const [selectedCityData, setSelectedCityData] = useState<
    FormattedForecastItem[] | null
  >(null);

  const handleCardChange = (cityData: NewDayProps | NewDayProps[]) => {
    const dataArray = Array.isArray(cityData) ? cityData : [cityData];

    const formattedData: FormattedForecastItem[] = dataArray.map((item) => ({
      city: item.city,
      country: item.country,
      date: item.date,
      weekday: item.weekday,
      time: item.time,
      temp: item.temp,
      temp_min: item.temp_min,
      temp_max: item.temp_max,
      feels_like: item.feels_like,
      humidity: item.humidity,
      speed: item.speed,
      pressure: 0,
      visibility: 0,
      weather: item.weather,
    }));

    setSelectedCityData(formattedData);
  };

  return (
    <ThemeProvider theme={theme}>
      <main style={{ padding: '16px' }}>
        <WeatherSearch />
        <WeatherCard onCardChange={handleCardChange} />
        {selectedCityData && <WeatherChart hourlyData={selectedCityData} />}
        <WeekForecast />
        <News />
      </main>
    </ThemeProvider>
  );
}
