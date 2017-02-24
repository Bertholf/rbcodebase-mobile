import auth from './auth';

const saveProfile = (id, name_first, name_last, name_slug, phone, birthday, password, password_confirmation) => {
  auth.updateProfile(id, name_first, name_last, name_slug, phone, birthday, password, password_confirmation)
  .then((response) => {
    console.log('update===', response);
  })
  .then(resp => this.setState({}));
};


export default saveProfile;
