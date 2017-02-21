import auth from './auth';

const saveProfile = (name_first, name_last, name_slug, email, phone, birthday, password, password_confirmation) => {
  auth.updateProfile(name_first, name_last, name_slug, email, phone, birthday, password, password_confirmation)
  .then((response) => {
    console.log('update===', response);
  });
};


export default saveProfile;
