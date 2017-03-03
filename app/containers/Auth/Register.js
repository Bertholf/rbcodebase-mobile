import { connect } from 'react-redux';
import RegistrationForm from '../../components/Auth/RegistrationForm';
import { submitRegister, submitLogin } from '../../actions/Auth';
import AuthRegisterService from '../../services/AuthRegistration';


const mapStateToProps = ({ app },) => ({
  name_first: app.auth.name_first,
  name_last: app.auth.name_last,
  email: app.auth.email,
  name_slug:app.auth.name_slug,
  password: app.auth.password,
  password_confirmation:app.auth.password_confirmation,
  message: app.auth.message,
});
const mapDispatchToProps = dispatch => ({
  submitRegister: (name_first, name_last, name_slug, password, password_confirmation, email) => {
    dispatch(submitRegister(name_first, name_last, name_slug, password, password_confirmation, email));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
