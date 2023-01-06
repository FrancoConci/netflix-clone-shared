import { baseLoginErrorCode } from './baseErrorCodes';

let baseError = baseLoginErrorCode;

export const loginErrors = {
  request: {
    shapeError: {
      code: baseError++,
      message: 'loginErrors.request.shapeError',
    },
    valueError: {
      code: baseError++,
      message: 'loginErrors.request.valueError',
    },
  },
};
