// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:5201/api/",
  authConfig: {
    authority: "http://localhost:5101",
    client_id: "connectpwa",
    redirect_uri: "http://localhost:4200/callback.html",
    post_logout_redirect_uri: "http://localhost:4200/",
    response_type: "id_token token",
    scope: "openid profile common downtime",

    silent_redirect_uri: "http://localhost:4200/silent-renew.html",
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 4,
    // silentRequestTimeout:10000,
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
