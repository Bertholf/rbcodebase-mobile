import auth from './auth';

const saveProfile = (name_first, name_last, name_slug, phone, birthday, password, password_confirmation) => {
  auth.updateProfile(name_first, name_last, name_slug, phone, birthday, password, password_confirmation)
  .then((response) => {
    console.log('update===', response);
  });
};


export default saveProfile;
