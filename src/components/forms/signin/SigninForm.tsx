'use client';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { Label } from '../../ui/Label';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { AuthForm } from '../auth/AuthForm';
import Link from 'next/link';
import { useState } from 'react';
import { FormState } from '@/types/FormState';
import { loginUserService } from '@/data/services/auth-services';

type LoginFormInputs = { email: string; password: string };

export function SigninForm() {
  const [formState, setFormState] = useState<FormState>({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    setFormState({});
    try {
      const response = await loginUserService({
        identifier: data.email,
        password: data.password,
      });

      if ('error' in response) {
        setFormState({
          success: false,
          message: response.error.message,
          strapiErrors: response.error,
        });
      } else {
        setFormState({ success: true, message: 'Login successful!' });
        document.cookie = `jwt=${response.jwt}; path=/; max-age=${
          60 * 60 * 24 * 7
        }`;
        window.location.href = '/';
      }
    } catch (err) {
      if (err instanceof Error) {
        setFormState({ success: false, message: err.message });
      } else {
        setFormState({ success: false, message: 'Login failed' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      title="Sign In"
      footer={
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="subtitle2" color="textSecondary">
            Don&apos;t have an account?
          </Typography>
          <Link href="/auth/signup">Sign up</Link>
        </Box>
      }
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.com"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>{errors.email.message}</span>
          )}
        </Box>

        <Box display="flex" flexDirection="column" gap={1}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="At least 6 characters"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password.message}</span>
          )}
        </Box>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Sign In'}
        </Button>

        {formState.strapiErrors && (
          <Typography color="error">
            {formState.strapiErrors.message || 'Something went wrong'}
          </Typography>
        )}
        {formState.message && (
          <Typography color={formState.success ? 'success.main' : 'error'}>
            {formState.message}
          </Typography>
        )}
      </Box>
    </AuthForm>
  );
}
