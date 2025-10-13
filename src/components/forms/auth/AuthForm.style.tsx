import styled from 'styled-components';
import { CardContent, CardFooter, CardHeader } from '../../ui/Card';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled(CardHeader)`
  text-align: center;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const Footer = styled(CardFooter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
