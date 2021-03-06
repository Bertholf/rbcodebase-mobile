import { LoginManager, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import auth from './auth';

const facebookRegister = (callback) => {
  LoginManager.logInWithReadPermissions(['public_profile'])
   .then((result) => {
     if (result.isCancelled) {
       return Promise.reject(result);
     }
     return AccessToken.getCurrentAccessToken();
   })
   .then((res) => {
     console.log('RES FACEBOOK',res);
     const fbRes = res;
     auth.check(res.accessToken, 'facebook', res.userID)
     .then((resL) => {
       console.log("RESPON RBCODEBASE FB", resL);
       if (resL.data.registered === false) {
         const props = {
           firstName: resL.data.name.split(' ')[0],
           lastName: resL.data.name.split(' ')[1],
           email: resL.data.email,
           username: '',
           provider: 'facebook',
           accessToken: fbRes.accessToken,
           oauthProviderId: fbRes.userID,
         };
         Actions.pop();
         Actions.registrationform(props);
       } else {
         callback(resL.data.access_token);
       }
     const profileRequestParams = {
       fields: {
         string: 'id, name, email, first_name, last_name, gender',
       },
     };
    }).catch(err => console.log(err))
     const profileRequestConfig = {
       httpMethod: 'GET',
       version: 'v2.5',
       parameters: profileRequestParams,
       accessToken: accessToken.accessToken,
     };

     const profileRequest = new GraphRequest(
        '/me',
        profileRequestConfig,
        responseCallback,
     );

     new GraphRequestManager().addRequest(profileRequest).start();
   })
 .catch(err => console.log(err));
};
export default facebookRegister;
