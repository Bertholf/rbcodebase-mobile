import auth from './auth';

const saveProfile = (name_first, name_last, name_slug, email, phone, birthday) => {
  auth.updateProfile(name_first, name_last, name_slug, email, phone, birthday)
  .then((response) => {
    console.log('update===', response);
  });
};


export default saveProfile;
