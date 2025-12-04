'use client';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import { Box, styled, Typography } from '@mui/material';

import {
  BoxContainer,
  AnimatedMenuTitle,
  ContainerElement,
  BoxTitle,
} from '@/css/style';

const MenuParagraph = styled(Typography)(() => ({
  marginBottom: '1.5rem',
  fontSize: '1.1rem',
  lineHeight: 1.8,
}));

const MenuItem = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
  padding: '1.2rem 1.5rem',
  borderRadius: '12px',
  background:
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f7f7f7',
  transition: 'all 0.25s ease',
  boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
  },

  '& a': {
    fontSize: '1.3rem',
    fontWeight: 600,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  '& p': {
    marginTop: '0.5rem',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#555',
  },
}));

export default function MenuComponent() {
  return (
    <>
      <Header />

      <BoxContainer>
        <ContainerElement
          maxWidth="md"
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <BoxTitle>
            <AnimatedMenuTitle variant="h2" />
          </BoxTitle>

          <MenuParagraph variant="body1">
            Welcome to <strong>SkyPulse</strong>! I am passionate about creating
            modern, efficient, and user-friendly web applications. My goal is to
            deliver high-quality experiences for users and clients.
          </MenuParagraph>

          <MenuParagraph variant="body1">
            From here, you can access all key sections of the platform — from
            weather forecasts to personalized settings.
          </MenuParagraph>

          <MenuItem>
            <Link href="/">Weather dashboard</Link>
            <p>
              View real-time forecasts, temperature, humidity, and detailed
              weather data for any city.
            </p>
          </MenuItem>

          <MenuItem>
            <Link href="/faq">FAQ section</Link>
            <p>
              Need assistance? Explore FAQs or reach out to the support team
              directly.
            </p>
          </MenuItem>

          <MenuItem>
            <Link href="/favourite">Favourites</Link>
            <p>
              Build your personal list of favorite cities and quickly access
              their latest forecasts.
            </p>
          </MenuItem>
        </ContainerElement>
      </BoxContainer>
    </>
  );
}
