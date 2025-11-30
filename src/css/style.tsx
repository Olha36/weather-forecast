import { Box, Container, Typography } from '@mui/material';

import styled, { keyframes } from 'styled-components';
import { typography } from '../../typography';

export const BoxContainer = styled(Box)`
  min-height: 100vh;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const abomination = keyframes`
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
  100% { content: "About this project"; }
`;

export const abominationMenu = keyframes`
  0% { content: "M"; }
  15% { content: "Me"; }
  30% { content: "Men"; }
  45% { content: "Menu"; }
  100% { content: "Menu"; }
`;

export const abominationFaq = keyframes`
  0% { content: "F"; }
  50% { content: "FA"; }
  75% { content: "FAQ"; }
  100% { content: "FAQ"; }
`;

export const AnimatedTitle = styled(Typography)`
  position: absolute;
  width: 100%;
  height: 50%;
  fontsize: 45px;
  color: #a9a9a9;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    lineheight: 48px;
    left: 10%;
    top: 50%;

    animation: ${abomination} 7.5s linear 1 forwards;
  }
`;

export const AnimatedMenuTitle = styled(Typography)`
  position: absolute;
  width: 100%;
  height: 50%;
  fontsize: 45px;
  color: #a9a9a9;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    line-height: 48px;
    // left: 10%;
    top: 50%;
    text-align: center;
    animation: ${abominationMenu} 7.5s linear 1 forwards;
  }
`;

export const ContainerElement = styled(Container)`
  backgroundcolor: rgba(255, 255, 255, 0.85);
  borderradius: 24px;
  boxshadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  backdropfilter: blur(10px);
`;

export const BoxTitle = styled(Box)`
  position: relative;
  height: 50px;
  margin: 0 auto 5%;
`;

export const TypographyTitle = styled(Typography)`
  font-weight: ${typography.h3.fontWeight};
  font-size: ${typography.h3.fontSize}px;
  color: black;
  margin-bottom: 16px;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const AnimatedFaqTitle = styled(Typography)`
  position: absolute;
  width: 100%;
  height: 50%;
  fontsize: 45px;
  color: #a9a9a9;
  text-align: center;

  &::after {
    content: 'FAQ';
    animation: ${abominationFaq} 4.5s linear forwards;
  }
`;
