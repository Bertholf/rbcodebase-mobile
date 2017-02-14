import { LoginManager, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

const facebookRegister = () => {
  LoginManager.logInWithReadPermissions(['public_profile'])
   .then((result) => {
     if (result.isCancelled) {
       return Promise.reject(result);
     }
     return AccessToken.getCurrentAccessToken();
   })
   .then((accessToken) => {
     const responseCallback = (error, result) => {
       if (!error) {
         const props = {
           firstName: result.first_name,
           lastName: result.last_name,
           email: result.email,
         };
         Actions.registrationform(props);
       } else {
        console.log('Success fetching data ', result);
       }
     };
     const profileRequestParams = {
       fields: {
         string: 'id, name, email, first_name, last_name, gender',
       },
     };

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
