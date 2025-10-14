import { loginUserService, registerUserService } from './auth';
export const services = {
  auth: {
    registerUserService,
    loginUserService,
  },
};
