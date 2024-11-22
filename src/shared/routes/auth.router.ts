import { ROUTES } from './router';

export const AUTH_PREFIX = ROUTES.API_PREFIX + '/auth';

export const AUTH_ROUTES = {
  LOGIN: AUTH_PREFIX + '/login',
  REGISTRATION: AUTH_PREFIX + '/registration',
};
