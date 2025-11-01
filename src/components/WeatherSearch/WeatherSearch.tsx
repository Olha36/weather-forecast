'use client';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import background from '../../assets/bg.png';
import Typography from '@mui/material/Typography';

interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '625px',
  margin: '20px auto',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function WeatherSearch({ onSearch }: WeatherSearchProps) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const monthYear = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const day = currentDate.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';
  const formattedDay = `${weekday}, ${day}${suffix}`;

  return (
    <Box
      sx={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '595px',
        width: '100%',
        color: 'white',
        paddingTop: '100px',
      }}
    >
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Weather dashboard
      </Typography>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          maxWidth: '613px',
          margin: '0 auto',
          alignItems: 'center',
          padding: '80px 0',
        }}
      >
        <p>
          Create your personal list of <br /> favorite cities and always be{' '}
          <br /> aware of the weather.
        </p>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginX: 2, backgroundColor: 'white' }}
        />
        <div className="weather-date">
          <p>{monthYear}</p>
          <p>{formattedDay}</p>
        </div>
      </div>

      <Search>
        <StyledInputBase
          placeholder="Search location…"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            color: 'white',
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Search>
    </Box>
  );
}
