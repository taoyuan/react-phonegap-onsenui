export const AUTH_REQUEST = 'auth:request';
export const AUTH_SUCCESS = 'auth:success';
export const AUTH_FAILURE = 'auth:failure';

export function authRequest(creds) {
  return {
    type: AUTH_REQUEST,
    creds
  };
}

export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user,
  };
}

export function authFailure(error) {
  return {
    type: AUTH_REQUEST,
    error
  };
}
