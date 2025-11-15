import { FormattedForecastItem } from '@/types/WeatherTypes';

const FAVOURITES_KEY = 'favouriteWeatherCards';

export function getFavourites(): FormattedForecastItem[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem(FAVOURITES_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveFavourites(favourites: FormattedForecastItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}

export function toggleFavourite(card: FormattedForecastItem) {
  const favourites = getFavourites();
  const exists = favourites.some(
    (fav) => fav.city === card.city && fav.date === card.date
  );

  let updated: FormattedForecastItem[];
  if (exists) {
    updated = favourites.filter(
      (fav) => !(fav.city === card.city && fav.date === card.date)
    );
  } else {
    updated = [...favourites, card];
  }

  saveFavourites(updated);
  return updated;
}

export function isFavourite(card: FormattedForecastItem): boolean {
  const favourites = getFavourites();
  return favourites.some(
    (fav) => fav.city === card.city && fav.date === card.date
  );
}
