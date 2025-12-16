import { getStrapiURL } from '@/lib/utils/utils';
import type { TImage } from '@/types/TImage';
import type { TStrapiResponse } from '@/types/TStrapiResponse';

export type TRegisterUser = {
  username: string;
  password: string;
  email: string;
};

export type TLoginUser = {
  identifier: string;
  password: string;
};

export type TAuthUser = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  image?: TImage;
  credits?: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TAuthResponse = {
  jwt: string;
  user: TAuthUser;
};

export type TAuthServiceResponse = TAuthResponse | TStrapiResponse<null>;

export function isAuthError(
  response: TAuthServiceResponse
): response is TStrapiResponse<null> {
  return 'error' in response;
}

export function isAuthSuccess(
  response: TAuthServiceResponse
): response is TAuthResponse {
  return 'jwt' in response;
}

const baseUrl = getStrapiURL();

export async function registerUserService(
  userData: TRegisterUser
): Promise<TAuthServiceResponse | undefined> {
  const url = new URL('/api/auth/local/register', baseUrl);

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = (await response.json()) as TAuthServiceResponse;
    console.dir(data, { depth: null });

    return data;
  } catch (error) {
    console.error('❌ Registration Service Error:', error);
    return undefined;
  }
}

export async function loginUserService(
  userData: TLoginUser
): Promise<TAuthServiceResponse> {
  const url = new URL('/api/auth/local', baseUrl);

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = (await response.json()) as TAuthServiceResponse;
    return data;
  } catch (error) {
    console.error('❌ Login Service Error:', error);
    throw error;
  }
}
