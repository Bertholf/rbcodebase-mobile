import auth from './auth';

class Register {
   register({ name, email, username, password }) {
     auth.register(name, email, username, password)
     .then((response) => {
      console.log('RESPONSE', response);
     });
  }
}

const register = new Register();
export default register;
