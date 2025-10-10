'use client';
import Link from 'next/link';

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '../ui/card';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled(CardHeader)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled(CardTitle)`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Footer = styled(CardFooter)`
  display: flex;
  flex-direction: column;
`;

const Prompt = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 0.9rem;
`;

const StyledLink = styled(Link)`
  margin-left: 4px;
  color: #000000;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    color: #ff9e40;
  }
`;

export function SigninForm() {
  return (
    <Container>
      <form>
        <Card>
          <Header>
            <Title>Sign In</Title>
          </Header>

          <Content>
            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </FieldGroup>
          </Content>

          <Footer>
            <Button>Sign In</Button>
            <Prompt>
              Don&apos;t have an account?
              <StyledLink href="signup">Sign Up</StyledLink>
            </Prompt>
          </Footer>
        </Card>
      </form>
    </Container>
  );
}
