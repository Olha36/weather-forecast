export type TStrapiResponse<T> = {
  error: {
    status: number;
    name: string;
    message: string;
    details?: T;
  };
};
