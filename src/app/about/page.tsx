'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Typography, Divider } from '@mui/material';

import {
  BoxContainer,
  AnimatedTitle,
  ContainerElement,
  BoxTitle,
  TypographyTitle,
} from '@/css/style';
import { styled } from '@mui/material/styles';

const AboutDescription = styled(Typography)(() => ({
  mb: 4,
  fontSize: '1.1rem',
  lineHeight: 1.8,
}));
export default function About() {
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
            <AnimatedTitle variant="h2"></AnimatedTitle>
          </BoxTitle>

          <AboutDescription variant="body1">
            Welcome to <strong>SkyPulse</strong> — a modern web application that
            brings you real-time weather updates and the latest news in one
            place. The goal of this project is to practice with Next.js,
            Typescript and Strapi.
          </AboutDescription>

          <Divider sx={{ mb: 4 }} />

          <TypographyTitle variant="h3">What It Does</TypographyTitle>
          <AboutDescription variant="body1">
            The app allows users to search for weather forecasts by city, view
            detailed temperature and humidity data, and read trending news
            articles fetched from a public API. It combines two essential daily
            habits — checking the weather and reading the news — into one
            simple, fast, and responsive interface.
          </AboutDescription>

          <Divider sx={{ mb: 4 }} />

          <TypographyTitle variant="h3">Tech Stack</TypographyTitle>
          <AboutDescription variant="body1">
            This project is built with <strong>Next.js</strong>,{' '}
            <strong>React</strong>, and <strong>TypeScript</strong>. It uses API
            data from <strong>OpenWeatherMap</strong> for weather forecasts and
            a <strong>News API</strong> for headlines. Styling is handled using{' '}
            <strong>Material UI</strong> and custom CSS. For authentication, I
            integrated <strong>Strapi</strong>.
          </AboutDescription>

          <Divider sx={{ mb: 4 }} />

          <TypographyTitle variant="h3">About the Developer</TypographyTitle>
          <AboutDescription variant="body1">
            Hi! I’m <strong>Olha Kucheruk</strong> — a frontend developer
            passionate about building clean, interactive web applications. This
            project is part of my learning journey in mastering{' '}
            <strong>Next.js</strong> and working with real-world APIs.
          </AboutDescription>
        </ContainerElement>
      </BoxContainer>
      <Footer />
    </>
  );
}
