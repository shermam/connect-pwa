export const environment = {
  production: true,
  apiUrl: "http://localhost:49448/api",
  authConfig: {
    authority: 'http://localhost:5000',
    client_id: 'angular-doc',
    redirect_uri: 'http://localhost:4200/callback.html',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    scope: 'openid profile api1',

    silent_redirect_uri: 'http://localhost:4200/silent-renew.html',
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 4,
    // silentRequestTimeout:10000,
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};
