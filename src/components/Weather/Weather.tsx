'use client';
import { useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import News from '../News/News';
import { FormattedForecastItem, NewDayProps } from '@/types/WeatherTypes.js';

export default function Home() {
  const [city, setCity] = useState('Kyiv');

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
  };

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <main style={{ padding: '16px' }}>
      <WeatherSearch onSearch={handleSearch} />
      <WeatherCard onCardChange={handleCardChange} city={city} />
      <News />
    </main>
  );
}
