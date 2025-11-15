import Header from '@/components/Header/Header';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <Header />
      <h2>Menu</h2>
      <p>
        Welcome to our website! We are passionate about creating modern,
        efficient, and user-friendly web applications. Our goal is to deliver
        high-quality experiences for our users and clients.
      </p>
      <p>
        From here, you can access all key sections of the platform — from
        weather forecasts to personalized settings.
      </p>
      <Box>
        <Box>
          <Link href="/">Weather dashboard</Link>
          <p>
            View real-time forecasts, temperature, humidity, and detailed
            weather data for any city.
          </p>
        </Box>

        <Box>
          <Link href="/">FAQ section</Link>
          <p>
            Need assistance? Explore FAQs or reach out to our support team
            directly.
          </p>
        </Box>

        <Box>
          <Link href="/">Favourites</Link>
          <p>
            Build your personal list of favorite cities and quickly access their
            latest forecasts.
          </p>
        </Box>
      </Box>
    </>
  );
}
