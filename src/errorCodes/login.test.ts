import { loginErrors } from './login';

describe('loginErrorCodes tests', () => {
  it('loginErrorCodes - exports the right codes', () => {
    expect(loginErrors).not.toBeNull();
    expect(loginErrors.request).not.toBeNull();
    expect(loginErrors.request.shapeError).not.toBeNull();
    expect(loginErrors.request.shapeError.code).not.toBeNull();
    expect(loginErrors.request.shapeError.message).not.toBeNull();
    expect(loginErrors.request.shapeError.code).toStrictEqual(1000);
    expect(loginErrors.request.shapeError.message).toStrictEqual('loginErrors.request.shapeError');
    expect(loginErrors.request.valueError).not.toBeNull();
    expect(loginErrors.request.valueError.code).not.toBeNull();
    expect(loginErrors.request.valueError.message).not.toBeNull();
    expect(loginErrors.request.valueError.code).toStrictEqual(1001);
    expect(loginErrors.request.valueError.message).toStrictEqual('loginErrors.request.valueError');
  });
});
