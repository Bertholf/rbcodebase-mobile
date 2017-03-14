import auth from './auth';

const saveProfile = (id, name_first, name_last, name_slug, gender, phone, date_birth, password, password_confirmation) => {
  auth.updateProfile(id, name_first, name_last, name_slug, gender, phone, date_birth, password, password_confirmation)
  .then((response) => {
    console.log('update===', response);
  })
};


export default saveProfile;
