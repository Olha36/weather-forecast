import { FormattedForecastItem } from '@/types/WeatherTypes';

const FAVOURITES_KEY = 'favouriteWeatherCards';

export const getCardId = (card: FormattedForecastItem): string => {
  return `${card.city}-${card.date}-${card.time}`;
};

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
  const id = getCardId(card);

  const exists = favourites.some((fav) => getCardId(fav) === id);

  let updated: FormattedForecastItem[];
  if (exists) {
    updated = favourites.filter((fav) => getCardId(fav) !== id);
  } else {
    updated = [...favourites, card];
  }

  saveFavourites(updated);
  return updated;
}

export function isFavourite(card: FormattedForecastItem): boolean {
  const favourites = getFavourites();
  const id = getCardId(card);
  return favourites.some((fav) => getCardId(fav) === id);
}
