import { getWeeklyForecast } from '@/api/weatherApi/weatherApi';
import { useEffect, useState } from 'react';

interface WeatherItem {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

interface GroupedByDate {
  [date: string]: WeatherItem[];
}

export interface ForecastDay {
  city: string;
  country: string;
  date: string;
  weekday: string;
  temp_min: number;
  temp_max: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}

export const useWeekWeather = (cityName: string) => {
  const [data, setData] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cityName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getWeeklyForecast(cityName);

        const city = result.city.name;
        const country = result.city.country;

        const groupedByDate: GroupedByDate = result.list.reduce(
          (acc: GroupedByDate, item: WeatherItem) => {
            const dateStr = new Date(item.dt * 1000).toLocaleDateString(
              'en-US',
              {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }
            );
            if (!acc[dateStr]) acc[dateStr] = [];
            acc[dateStr].push(item);
            return acc;
          },
          {}
        );

        const forecastData: ForecastDay[] = Object.entries(groupedByDate).map(
          ([date, items]) => {
            const weekday = new Date(items[0].dt * 1000).toLocaleDateString(
              'en-US',
              {
                weekday: 'long',
              }
            );

            const temp_min = Math.min(...items.map((i) => i.main.temp_min));
            const temp_max = Math.max(...items.map((i) => i.main.temp_max));
            const weather = items[0].weather[0];

            return {
              city,
              country,
              date,
              weekday,
              temp_min: Math.round(temp_min),
              temp_max: Math.round(temp_max),
              weather: {
                main: weather.main,
                description: weather.description,
                icon: weather.icon,
              },
            };
          }
        );

        setData(forecastData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cityName]);

  return { data, loading, error };
};
