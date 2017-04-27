import { connect } from 'react-redux';
import Routing from './../../Router';

const mapStateToProps = () => ({ hello: false });
const mapDispatchToProps = () => ({
  doSomething: () => {},
});
const Router = connect(mapStateToProps, mapDispatchToProps)(Routing);
export default Router;
