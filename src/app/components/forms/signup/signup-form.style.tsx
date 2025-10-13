import styled from 'styled-components';
import { CardTitle, CardHeader, CardContent, CardFooter } from '../../ui/card';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled(CardHeader)`
  text-align: center;
`;

export const Title = styled(CardTitle)`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Footer = styled(CardFooter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Prompt = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-left: 4px;
  color: #000000;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    color: #ff9e40;
  }
`;
