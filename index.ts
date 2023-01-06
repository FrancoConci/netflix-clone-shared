import { loginErrors as login } from './src/errorCodes/login';

export interface QueryPayload {
  payload: string;
}

export const loginErrors = login;
