'use client';

import { getFavourites, saveFavourites } from '@/lib/utils/favouritesStorage';
import WeatherCard from '../WeatherCard/WeatherCard';
import { FormattedForecastItem } from '@/types/WeatherTypes';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';

export default function Favourite() {
  const [favourites, setFavourites] = useState<FormattedForecastItem[]>([]);

  useEffect(() => {
    setFavourites(getFavourites());
  }, []);

  const handleCardChange = (updated: FormattedForecastItem[]) => {
    setFavourites(updated);
    saveFavourites(updated);
  };

  return (
    <div>
      <Header />
      <h2 style={{textAlign: 'center'}}>Your favourites</h2>

      {favourites.length > 0 ? (
        <WeatherCard
          data={favourites}
          onCardChange={handleCardChange}
          city="" // static mode
        />
      ) : (
        <p>No favourites yet</p>
      )}
    </div>
  );
}
