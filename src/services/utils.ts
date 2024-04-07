import { AuthorizationStatus } from '../const';

export const isAuthorized = (authorizationStatus: AuthorizationStatus) => authorizationStatus === AuthorizationStatus.Auth;

export const isCheckingAuthorization = (authorizationStatus: AuthorizationStatus) => authorizationStatus === AuthorizationStatus.Unknown;
