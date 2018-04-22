//https://auth.bullhornstaffing.com/oauth/token?grant_type=refresh_token&refresh_token={refresh_token}&client_id={client_id}&client_secret={client_secret}
// import BhAccessToken.js
// POST request

//This is slightly different than dataCenterAuthUrl
var dataCenterTokenUrl = 'https://auth.bullhornstaffing.com/oauth/token?grant_type=refresh_token';

function getRefreshUrl(refresh_token,client_id,client_secret){
  var refreshUrl = dataCenterTokenUrl +
        '&refresh_token=' + refresh_token +
        '&client_id=' + client_id +
        '&client_secret=' + client_secret

  return refreshUrl

}


// Uses the refreshUrl to obtain a new refresh_token + access_token
