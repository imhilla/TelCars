// eslint-disable-next-line import/prefer-default-export
export const login = login => ({ type: 'LOGIN', payload: login });
export const authenticationRequest = request => ({ type: 'AUTHENTICATION_REQUEST', payload: request });
export const authenticationSuccess = request => ({ type: 'AUTHENTICATION_SUCCESS', payload: request });
export const authenticationFailure = request => ({ type: 'AUTHENTICATION_FAILURE', payload: request });
export const logout = request => ({ type: 'LOGOUT', payload: request });
