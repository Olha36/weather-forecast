'use client';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getHourlyForecast } from '../../api/weatherApi/weatherApi';
import { FormattedForecastItem, WeatherCardProps } from '@/types/WeatherTypes';
import {
  toggleFavourite,
  isFavourite,
  getCardId,
} from '@/lib/utils/favouritesStorage';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import { useWeather } from '@/lib/hooks/useWeather';
import { useAuthStore } from '@/lib/utils/authStore';

// styling
const CardItem = styled('div')(() => ({
  width: '320px',
  borderRadius: '20px',
  backgroundColor: '#E4E4E4',
  padding: '15px',
}));

const CardContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '50px',
  marginTop: '60px',
}));

const CardActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '10px',
}));

export default function WeatherCard({
  data: initialData,
  onCardChange,
  city,
}: WeatherCardProps) {
  const isStatic = city === '';
  const weather = useWeather(city);
  const { isLoggedIn } = useAuthStore();

  const [data, setData] = useState<FormattedForecastItem[]>(
    isStatic ? initialData ?? [] : []
  );
  const [loadingCard, setLoadingCard] = useState<Map<string, boolean>>(
    new Map()
  );
  const [isFav, setIsFav] = useState<Map<string, boolean>>(new Map());
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const cardPerPage = 3;
  const startIndex = (page - 1) * cardPerPage;
  const currentCards = data.slice(startIndex, startIndex + cardPerPage);
  const pageTotal = Math.ceil(data.length / cardPerPage);

  useEffect(() => {
    const favMap = new Map<string, boolean>();
    data.forEach((card) => {
      favMap.set(getCardId(card), isFavourite(card));
    });
    setIsFav(favMap);
  }, [data]);

  useEffect(() => {
    if (!isStatic && weather.data.length) {
      setData(weather.data);
      onCardChange?.(weather.data);
    }
  }, [weather.data, isStatic]);

  const handleFavouriteClick = (card: FormattedForecastItem) => {
    if (!isLoggedIn) {
      alert('Please log in to save cards to favourites.');
      return;
    }

    const updated = toggleFavourite(card);
    const id = getCardId(card);

    setIsFav((prev) => new Map(prev).set(id, !prev.get(id)));

    if (isStatic) {
      const filtered = data.filter((c) => getCardId(c) !== id);
      setData(filtered);
      onCardChange?.(filtered);
      return;
    }

    onCardChange?.(updated);
  };

  const handleDelete = (globalIndex: number) => {
    const card = data[globalIndex];
    const id = getCardId(card);

    setData((prev) => prev.filter((_, i) => i !== globalIndex));

    setIsFav((prev) => {
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
  };

  const handleRefresh = async (globalIndex: number, city: string) => {
    const card = data[globalIndex];
    const id = getCardId(card);
    setLoadingCard((prev) => new Map(prev).set(id, true));

    try {
      const result = await getHourlyForecast(city);
      const date = new Date(result.list[0].dt * 1000);
      const newDay: FormattedForecastItem = {
        city: result.city.name,
        country: result.city.country,
        date: date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
        time: date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        temp: Math.round(result.list[0].main.temp),
        temp_min: Math.round(result.list[0].main.temp_min),
        temp_max: Math.round(result.list[0].main.temp_max),
        feels_like: Math.round(result.list[0].main.feels_like),
        humidity: result.list[0].main.humidity,
        speed: result.list[0].wind.speed,
        gust: result.list[0].wind.gust,
        weather: result.list[0].weather[0],
      };

      setData((prev) => {
        const updated = [...prev];
        updated[globalIndex] = newDay;
        return updated;
      });
    } finally {
      setLoadingCard((prev) => new Map(prev).set(id, false));
    }
  };

  if (!data.length) return <div>No data</div>;

  return (
    <div>
      <CardContainer>
        {currentCards.map((day, localIndex) => {
          const globalIndex = startIndex + localIndex;
          const id = getCardId(day);
          const expanded = expandedIndex === globalIndex;

          return (
            <CardItem key={id}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
              >
                <Typography variant="body2">{day.city}</Typography>
                <Typography variant="body2">{day.country}</Typography>
              </Box>

              <Box textAlign="center">
                <Typography variant="body1">{day.time}</Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    my: 1,
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: '#FFB36C', fontSize: '10px' }}
                  >
                    Hourly forecast
                  </Button>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{ bgcolor: '#FFB36C', fontSize: '10px' }}
                  >
                    Weekly forecast
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mb: 1,
                  }}
                >
                  <Typography variant="caption">{day.date}</Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ backgroundColor: '#000000' }}
                  />
                  <Typography variant="caption">{day.weekday}</Typography>
                </Box>

                {loadingCard.get(id) ? (
                  <CircularProgress sx={{ my: 3 }} />
                ) : (
                  <>
                    <Image
                      src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                      alt={day.weather.description}
                      style={{ margin: '22px 0 15px' }}
                      width={120}
                      height={120}
                    />
                    <Typography variant="h2">{day.temp}°C</Typography>
                  </>
                )}
              </Box>

              <CardActions>
                <RefreshIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRefresh(globalIndex, day.city)}
                />

                {isLoggedIn ? (
                  isFav.get(id) ? (
                    <FavoriteIcon
                      style={{ cursor: 'pointer', color: 'red' }}
                      onClick={() => handleFavouriteClick(day)}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleFavouriteClick(day)}
                    />
                  )
                ) : (
                  <FavoriteBorderOutlinedIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => alert('Please log in to save this card.')}
                  />
                )}

                <Button
                  size="medium"
                  variant="contained"
                  sx={{ bgcolor: '#FFB36C', fontSize: '10px' }}
                  onClick={() =>
                    setExpandedIndex(expanded ? null : globalIndex)
                  }
                >
                  {expanded ? 'see less' : 'see more'}
                </Button>

                <DeleteOutlineOutlinedIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(globalIndex)}
                />
              </CardActions>
            </CardItem>
          );
        })}
      </CardContainer>

      {expandedIndex !== null && (
        <CardContainer>
          <WeatherDetails expanded={true} day={data[expandedIndex]} />
        </CardContainer>
      )}

      <Pagination
        count={pageTotal}
        page={page}
        style={{ display: 'grid', justifyContent: 'center', margin: '2% 0' }}
        onChange={(_e, value) => setPage(value)}
      />
    </div>
  );
}
