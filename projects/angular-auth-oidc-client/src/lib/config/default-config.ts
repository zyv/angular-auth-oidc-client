import { LogLevel } from '../logging/log-level';
import { OpenIdConfiguration } from './openid-configuration';

export const DEFAULT_CONFIG: OpenIdConfiguration = {
  authority: 'https://please_set',
  authWellknownEndpointUrl: '',
  authWellknownEndpoints: undefined,
  redirectUrl: 'https://please_set',
  checkRedirectUrlWhenCheckingIfIsCallback: false,
  clientId: 'please_set',
  responseType: 'code',
  scope: 'openid email profile',
  hdParam: '',
  postLogoutRedirectUri: 'https://please_set',
  startCheckSession: false,
  silentRenew: false,
  silentRenewUrl: 'https://please_set',
  silentRenewTimeoutInSeconds: 20,
  renewTimeBeforeTokenExpiresInSeconds: 0,
  useRefreshToken: false,
  usePushedAuthorisationRequests: false,
  ignoreNonceAfterRefresh: false,
  postLoginRoute: '/',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
  autoUserInfo: true,
  autoCleanStateAfterAuthentication: true,
  triggerAuthorizationResultEvent: false,
  logLevel: LogLevel.Warn,
  issValidationOff: false,
  historyCleanupOff: false,
  maxIdTokenIatOffsetAllowedInSeconds: 120,
  disableIatOffsetValidation: false,
  customParamsAuthRequest: {},
  customParamsRefreshTokenRequest: {},
  customParamsEndSessionRequest: {},
  customParamsCodeRequest: {},
  disableRefreshIdTokenAuthTimeValidation: false,
  triggerRefreshWhenIdTokenExpired: true,
  tokenRefreshInSeconds: 4,
  refreshTokenRetryInSeconds: 3,
  ngswBypass: false,
};
