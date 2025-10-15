export interface WeatherDescription {
  main: string;
  description: string;
  icon: string;
}

export interface FormattedForecastItem {
  city?: string;
  country?: string;
  date?: string;
  weekday?: string;
  time?: string;
  temp?: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
  pressure?: number;
  speed: number;
  gust?: number;
  visibility?: number;
  weather: WeatherDescription;
}

export interface NewDayProps {
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
  gust?: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}

export interface WeatherCardProps {
  onCardChange?: (
    data: FormattedForecastItem | FormattedForecastItem[]
  ) => void;
}

export interface WeatherChartProps {
  hourlyData: FormattedForecastItem[];
}

export interface WeatherDetailsProps {
  expanded: boolean;
  day?: FormattedForecastItem | null;
}