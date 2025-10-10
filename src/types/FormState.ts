export type FormState = {
  success?: boolean;
  message?: string;
  data?: {
    identifier?: string;
    username?: string;
    email?: string;
    password?: string;
  };
  strapiErrors?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, string[]>;
  } | null;
  zodErrors?: {
    identifier?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
  } | null;
  jwt?: string;
};
