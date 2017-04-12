import google from './../modules/google';

const registerWithGoogle = () => {
  google.signIn()
    .then(user => console.log(user))
    .catch(err => dispatch(errorLogin(err)));
};

export default registerWithGoogle;
