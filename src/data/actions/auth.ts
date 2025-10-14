'use server';

import { services } from '@/data/services';
import { isAuthError } from '@/data/services/auth';
import { SignupFormSchema } from '@/data/validation/auth';
import type { FormState } from '@/types/FormState';
import { z } from 'zod';

export async function registerUserAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log('Hello From Register User Action');

  const fields = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
    email: formData.get('email') as string,
  };

  const validatedFields = SignupFormSchema.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);
    console.log('Validation failed:', flattenedErrors.fieldErrors);
    return {
      success: false,
      message: 'Validation failed',
      strapiErrors: null,
      zodErrors: flattenedErrors.fieldErrors,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  console.log('Validation successful:', validatedFields.data);

  const responseData = await services.auth.registerUserService(
    validatedFields.data
  );

  if (!responseData) {
    return {
      success: false,
      message: 'Ops! Something went wrong. Please try again.',
      strapiErrors: null,
      zodErrors: null,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  if (isAuthError(responseData)) {
    return {
      success: false,
      message: 'Failed to Register.',
      strapiErrors: {
        ...responseData.error,
        details: responseData.error.details ?? undefined,
      },
      zodErrors: null,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  console.log('#############');
  console.log('User Registered Successfully', responseData);
  console.log('#############');

  return {
    success: true,
    message: 'User registration successful',
    strapiErrors: null,
    zodErrors: null,
    data: {
      ...prevState.data,
      ...fields,
    },
    jwt: responseData.jwt,
  };
}
