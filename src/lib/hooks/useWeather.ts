import { useEffect, useState } from 'react';
import { getHourlyForecast } from '../../api/weatherApi/weatherApi';
interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

interface City {
  name: string;
  country: string;
}

export interface HourlyForecastResponse {
  city: City;
  list: WeatherItem[];
}

interface FormattedForecastItem {
  city: string;
  country: string;
  date: string;
  weekday: string;
  time: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
  speed: number;
  visibility?: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}

export const useWeather = (cityName: string) => {
  const [data, setData] = useState<FormattedForecastItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cityName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result: HourlyForecastResponse = await getHourlyForecast(
          cityName
        );

        const city = result.city.name;
        const country = result.city.country;

        const forecastData: FormattedForecastItem[] = result.list.map(
          (item) => {
            const date = new Date(item.dt * 1000);
            return {
              city,
              country,
              date: date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }),
              weekday: date.toLocaleDateString('en-US', {
                weekday: 'long',
              }),
              time: date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              }),
              temp: Math.round(item.main.temp),
              temp_min: Math.round(item.main.temp_min),
              feels_like: Math.round(item.main.feels_like),
              humidity: item.main.humidity,
              pressure: item.main.pressure,
              temp_max: Math.round(item.main.temp_max),
              speed: item.wind.speed,
              visibility: item.visibility,
              weather: {
                main: item.weather[0].main,
                description: item.weather[0].description,
                icon: item.weather[0].icon,
              },
            };
          }
        );

        setData(forecastData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cityName]);

  return { data, setData, loading, error };
};
