'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Box, Typography, Container, Divider } from '@mui/material';
import { keyframes } from '@emotion/react';

const abomination1 = keyframes`
  0% { content: "A"; }
  4% { content: "Ab"; }
  8% { content: "Abo"; }
  12% { content: "Abou"; }
  16% { content: "About"; }
  20% { content: "About "; }
  24% { content: "About t"; }
  28% { content: "About th"; }
  32% { content: "About thi"; }
  36% { content: "About this"; }
  40% { content: "About this "; }
  44% { content: "About this p"; }
  48% { content: "About this pr"; }
  52% { content: "About this pro"; }
  56% { content: "About this proj"; }
  60% { content: "About this proje"; }
  64% { content: "About this projec"; }
  68% { content: "About this project"; }
  72% { content: "About this project"; }
  76% { content: "About this project"; }
  80% { content: "About this project"; }
  84% { content: "About this project"; }
  88% { content: "About this project"; }
  92% { content: "About this project"; }
  96% { content: "About this project"; }
  100% { content: "About this project"; }
`;

export default function About() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
          color: '#333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          pt: 10,
          pb: 10,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '24px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            p: { xs: 4, sm: 6, md: 8 },
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box
            style={{
              position: 'relative',
              width: '83%',
              height: '175px',
              margin: '7% auto',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                position: 'absolute',
                width: '100%',
                height: '50%',
                fontSize: '45px',
                color: '#a9a9a9',
                '&::after': {
                  position: 'absolute',
                  content: `''`,
                  width: ' 100%',
                  height: '100%',
                  lineHeight: '48px',
                  left: '30%',
                  top: '50%',
                  animation: `${abomination1} 7.5s linear 1 forwards`,
                  animationFillMode: 'forwards',
                },
              }}
            >
           
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Welcome to <strong>SkyPulse</strong> — a modern web application that
            brings you real-time weather updates and the latest news in one
            place. The goal of this project is to make it easy for users to stay
            informed about the world around them, from weather conditions to
            current events.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: '1.7rem',
              color: 'black',
              mb: 2,
            }}
          >
            What It Does
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            The app allows users to search for weather forecasts by city, view
            detailed temperature and humidity data, and read trending news
            articles fetched from a public API. It combines two essential daily
            habits — checking the weather and reading the news — into one
            simple, fast, and responsive interface.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: '1.7rem',
              color: 'black',
              mb: 2,
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            This project is built with <strong>Next.js</strong>,{' '}
            <strong>React</strong>, and <strong>TypeScript</strong>. It uses API
            data from <strong>OpenWeatherMap</strong> for weather forecasts and
            a <strong>News API</strong> for headlines. Styling is handled using{' '}
            <strong>Material UI</strong> and custom CSS.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: '1.7rem',
              color: 'black',
              mb: 2,
            }}
          >
            About the Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            Hi! I’m <strong>Olha Kucheruk</strong> — a frontend developer
            passionate about building clean, interactive web applications. This
            project is part of my learning journey in mastering{' '}
            <strong>Next.js</strong> and working with real-world APIs.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
