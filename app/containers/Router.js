import { connect } from 'react-redux';
import Routing from './../Router';

const mapStateToProps = (state) => {
  return { hello: false };
};
const mapDispatchToProps = (dispatch) => {
  return {
    doSomething: () => {},
  };
};
const Router = connect(mapStateToProps, mapDispatchToProps)(Routing);
export default Router;
