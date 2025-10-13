'use client';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { Label } from '../../ui/Label';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { AuthForm } from '../auth/AuthForm';
import Link from 'next/link';
import { useState } from 'react';

type LoginFormInputs = { email: string; password: string };

export function SigninForm() {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch('/api/auth/login', {
        // call your Next.js API route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Login successful!');
        // redirect manually
        window.location.href = '/dashboard';
      } else {
        setMessage(result.message || 'Login failed');
      }
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
      else setMessage('Login failed');
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

        <Button type="submit">Sign In</Button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </Box>
    </AuthForm>
  );
}
