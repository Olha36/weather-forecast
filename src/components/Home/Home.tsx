'use client'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Nature from '@/components/Nature/Nature';
import Weather from '@/components/Weather/Weather';
import { typography } from '../../../typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography,
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Weather />
        <Nature />
        <Footer />
      </ThemeProvider>
    </>
  );
}
