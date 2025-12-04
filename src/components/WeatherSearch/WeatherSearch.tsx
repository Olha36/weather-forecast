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
  borderRadius: Number(theme.shape.borderRadius) * 3,

  backgroundColor: alpha(theme.palette.common.white, 0.18),
  backdropFilter: 'blur(3px)',
  width: '625px',
  maxWidth: '90%',
  margin: '20px auto',
  paddingLeft: '12px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5),
    paddingRight: `calc(1em + ${theme.spacing(5)})`,
    fontSize: '1rem',
  },
}));

// -------------------------------
// Component
// -------------------------------
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

        width: '100%',
        color: 'white',
        py: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h2"
        sx={(theme) => ({
          textAlign: 'center',
          fontWeight: 700,
          mb: 4,
          textShadow: '0 4px 12px rgba(0,0,0,0.6)',
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
            mb: 3,
          },
        })}
      >
        Weather dashboard
      </Typography>

      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '650px',
          mx: 'auto',
          px: 2,
          py: 4,
          gap: 4,
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center',
            gap: 2,
            py: 2,
          },
        })}
      >
        <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
          Create your personal list of <br />
          favorite cities and always <br />
          be aware of the weather.
        </Typography>

        {/* DIVIDER */}
        <Divider
          orientation="vertical"
          flexItem
          sx={(theme) => ({
            borderColor: 'rgba(255,255,255,0.7)',
            height: '100px',
            mx: 2,
            [theme.breakpoints.down('sm')]: {
              position: 'absolute',
              margin: 0,
              left: '9%',
            },
          })}
        />

        {/* RIGHT DATE BLOCK */}
        <Box>
          <Typography sx={{ fontSize: '1.3rem', fontWeight: 600 }}>
            {monthYear}
          </Typography>
          <Typography sx={{ fontSize: '1.2rem', mt: 1 }}>
            {formattedDay}
          </Typography>
        </Box>
      </Box>

      {/* SEARCH BAR */}
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
            right: 4,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            width: '40px',
            height: '40px',
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Search>
    </Box>
  );
}
