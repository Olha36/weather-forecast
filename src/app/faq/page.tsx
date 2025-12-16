'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {
  BoxContainer,
  ContainerElement,
  BoxTitle,
  AnimatedFaqTitle,
} from '@/css/style';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqParagraph = styled(Typography)(() => ({
  marginBottom: '1.5rem',
  fontSize: '1.1rem',
  lineHeight: 1.8,
}));

const FaqItem = styled(Accordion)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#fafafa',
  borderRadius: '12px !important',
  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
  marginBottom: '1rem',
  padding: '0.3rem 0.6rem',
  transition: 'all 0.25s ease',

  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },

  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
  },

  '& .MuiAccordionDetails-root': {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#555',
  },
}));

export default function FAQ() {
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
            <AnimatedFaqTitle variant="h2" />
          </BoxTitle>

          {/* Intro paragraph */}
          <FaqParagraph>
            Welcome to the <strong>SkyPulse FAQ section</strong>. Here you can
            learn more about how the website works, the technologies behind it,
            and how to get the most out of the platform.
          </FaqParagraph>

          <FaqParagraph>
            If you have any additional questions, feel free to reach out via the
            contact form or leave feedback. I’m constantly improving SkyPulse to
            make it more useful and enjoyable to explore.
          </FaqParagraph>

          {/* FAQ items */}
          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>What is SkyPulse?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              SkyPulse is a modern web app built with Next.js, React, and
              TypeScript. It combines real-time weather forecasts and trending
              news in a clean, fast interface.
            </AccordionDetails>
          </FaqItem>

          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>
                Where does the weather data come from?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Weather information is sourced from the OpenWeatherMap API, which
              provides reliable, up-to-date forecasts for cities around the
              world.
            </AccordionDetails>
          </FaqItem>

          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>
                Can I save my favorite cities?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes! SkyPulse allows you to save a personalized list of favorite
              locations so you can quickly access weather data at any time.
            </AccordionDetails>
          </FaqItem>

          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>
                How often is the news updated?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              News articles are fetched from a public News API and refreshed
              automatically with the latest global headlines.
            </AccordionDetails>
          </FaqItem>

          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>
                What technologies were used?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              SkyPulse is built using Next.js, React, TypeScript, Material UI,
              custom CSS animations, and Strapi for authentication.
            </AccordionDetails>
          </FaqItem>

          <FaqItem>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700}>
                Is there going to be a mobile app?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              At this time there is no mobile app, but the website is fully
              responsive and mobile-friendly. A dedicated app may be considered
              in the future.
            </AccordionDetails>
          </FaqItem>
        </ContainerElement>
      </BoxContainer>

      <Footer />
    </>
  );
}
