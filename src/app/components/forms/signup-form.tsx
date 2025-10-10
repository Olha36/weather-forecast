'use client';
import Link from 'next/link';
import styled from 'styled-components';

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
import { actions } from '@/data/actions';
import { useActionState } from 'react';
import type { FormState } from '@/types/FormState';

const INITIAL_STATE: FormState = {
  success: false,
  message: undefined,
  strapiErrors: null,
  zodErrors: null,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled(CardHeader)`
  text-align: center;
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
  gap: 30px;
  margin-top: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Footer = styled(CardFooter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Prompt = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  text-align: center;
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

export function SignupForm() {
  const [formState, formAction] = useActionState(
    actions.auth.registerUserAction,
    INITIAL_STATE
  );

  console.log('## will render on client ##');
  console.log(formState);
  console.log('###########################');
  return (
    <Container>
      <form action={formAction}>
        <Card>
          <Header>
            <Title>Sign Up</Title>
          </Header>

          <Content>
            <FieldGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
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
            <Button>Sign Up</Button>
            <Prompt>
              Already have an account?
              <StyledLink href="signin"> Log In</StyledLink>
            </Prompt>
          </Footer>
        </Card>
      </form>
    </Container>
  );
}
