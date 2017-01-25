import { connect } from 'react-redux';
import Routing from './../Router';

const mapStateToProps = state => ({ hello: false });
const mapDispatchToProps = dispatch => ({
  doSomething: () => {},
});
const Router = connect(mapStateToProps, mapDispatchToProps)(Routing);
export default Router;
