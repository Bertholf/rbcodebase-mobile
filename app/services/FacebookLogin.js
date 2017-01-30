import { LoginManager, AccessToken } from 'react-native-fbsdk';

const url = 'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=';

function initUser(token) {
  fetch(url + token)
  .then(response => response.json())
  .then((json) => {
    console.log(json.name);
    console.log(json.email);
    console.log(json.id);
    console.log(json.friends);
  })
  .catch(() => console.log('ERROR GETTING DATA FROM FACEBOOK'));
}

// const FacebookLogin = () => {
//   LoginManager.logInWithReadPermissions(['public_profile']).then(
//     (result) => {
//       if (result.isCancelled) {
//         console.log('Login cancelled');
//       } else {
//         AccessToken.getCurrentAccessToken().then((data) => {
//           const { accessToken } = data;
//           console.log('Token is : ' + accessToken);
//           initUser(accessToken);
//         });
//       }
//     },
//     (error) => {
//       console.log('Login fail with error: ' + error);
//     },
//   );
// }

export default class FacebookLogin {
  static getFacebookLogin() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const { accessToken } = data;
            console.log('Token is : ' + accessToken);
            initUser(accessToken);
          });
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error);
      },
    );
  }
}

// export default FacebookLogin;
