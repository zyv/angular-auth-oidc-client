import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://xyzzy-gmbh.youtrack.cloud/hub',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '8ef93e4a-bcc7-4c9f-9ac5-3a5124868e10',
        scope: 'YouTrack 0-0-0-0-0',
        responseType: 'id_token token',
        silentRenewUrl: `${window.location.origin}/silent-renew.html`,
        startCheckSession: true,
        silentRenew: true,

        customParamsAuthRequest: {
          request_credentials: 'silent',
          rnd: Math.random().toString(),
        },

        disableIdTokenValidation: true, // HUB-11902

        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
