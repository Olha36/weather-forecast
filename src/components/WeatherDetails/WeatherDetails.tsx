import { Box, Collapse, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import humidity from '@/assets/temperature/humidity.png';
import pressure from '@/assets/temperature/pressure.png';
import temperature from '@/assets/temperature/temperature.png';
import visibility from '@/assets/temperature/visibility.png';
import windSpeed from '@/assets/temperature/wind-speed.png';
import Image from 'next/image';

interface DayWeather {
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure?: number;
  speed: number;
  visibility?: number;
}

interface WeatherDetailsProps {
  expanded: boolean;
  day?: DayWeather | null;
}

const CardDetail = styled('div')(() => ({
  backgroundColor: '#D9D9D9',
  width: '290px',
  height: 'auto',
  padding: '20px 0',
}));

const StyledImage = styled(Image)(() => ({
  marginTop: '23px',
}));
export default function WeatherDetails({ expanded, day }: WeatherDetailsProps) {
  if (!day) return null;
  return (
    <Collapse in={expanded}>
      <Box
        sx={{
          mt: 2,
          p: 12,
          borderRadius: 2,
          backgroundColor: '#E8E8E8',
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 7,
          flexWrap: 'wrap',
        }}
      >
        <CardDetail>
          <Typography variant="subtitle2">Feels like </Typography>
          <Typography variant="h2">{day.feels_like}°C</Typography>
          <StyledImage src={temperature} alt="temperature"></StyledImage>
        </CardDetail>
        <CardDetail>
          <Typography variant="subtitle2">Min °C</Typography>
          <Typography variant="h2">{day.temp_min}°C</Typography>
          <Typography variant="subtitle2" style={{ marginTop: '23px' }}>
            Max °C
          </Typography>
          <Typography variant="h2">{day.temp_max}°C</Typography>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Humidity</Typography>
          <Typography variant="h2">{day.humidity}</Typography>
          <StyledImage src={humidity} alt="humidity"></StyledImage>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Pressure </Typography>
          <Typography variant="h2">{day.pressure} Pa</Typography>
          <StyledImage src={pressure} alt="pressure"></StyledImage>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Winds speed </Typography>
          <Typography variant="h2"> {day.speed}</Typography>
          <StyledImage src={windSpeed} alt="wind speed"></StyledImage>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Visibility</Typography>
          <Typography variant="h2">{day.visibility}</Typography>
          <StyledImage src={visibility} alt="visibility"></StyledImage>
        </CardDetail>
      </Box>
    </Collapse>
  );
}
