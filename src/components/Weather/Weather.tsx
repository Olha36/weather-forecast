'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { typography } from '../../../typography.js';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherCard from '../WeatherCard/WeatherCard';

const theme = createTheme({
  typography,
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ padding: '16px' }}>
        <WeatherSearch />
        <WeatherCard />
      </main>
    </ThemeProvider>
  );
}
