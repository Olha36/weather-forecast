'use client';
import { useForm } from 'react-hook-form';
import { Card } from '../../ui/card';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { actions } from '@/data/actions';
import type { FormState } from '@/types/FormState';
import React from 'react';
import type { SignupFormData } from '@/types/SignupFormData';
import { INITIAL_STATE } from '@/constants/auth';
import {
  Container,
  Header,
  Title,
  Content,
  FieldGroup,
  Footer,
  Prompt,
  StyledLink,
} from './signup-form.style';

export function SignupForm() {
  const [formState, setFormState] = React.useState<FormState>(INITIAL_STATE);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  console.log('## will render on client ##');
  console.log(formState);
  console.log('###########################');

  const onSubmit = async (data: SignupFormData) => {
    setFormState(INITIAL_STATE);
    try {
      // Convert plain object to FormData
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await actions.auth.registerUserAction(
        INITIAL_STATE,
        formData
      );
      setFormState(result);
    } catch (err) {
      const strapiError =
        err && typeof err === 'object' && 'status' in err
          ? (err as {
              status: number;
              name: string;
              message: string;
              details?: Record<string, string[]>;
            })
          : null;

      setFormState({
        success: false,
        message: 'Failed to register.',
        strapiErrors: strapiError,
        zodErrors: null,
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Header>
            <Title>Sign Up</Title>
          </Header>

          <Content>
            <FieldGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                {...register('username', { required: 'Username is required' })}
                placeholder="username"
              />
              {errors.username && (
                <span style={{ color: 'red' }}>{errors.username.message}</span>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="name@example.com"
              />
              {errors.email && (
                <span style={{ color: 'red' }}>{errors.email.message}</span>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="password"
              />
              {errors.password && (
                <span style={{ color: 'red' }}>{errors.password.message}</span>
              )}
            </FieldGroup>
          </Content>

          <Footer>
            <Button type="submit">Sign Up</Button>
            {formState.message && <p>User is successfully registered</p>}
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
