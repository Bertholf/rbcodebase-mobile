import { connect } from 'react-redux';
import Welcome from '../../components/Welcome/Welcome';

const mapStateToProps = state => ({
  loaded: true,
});

const mapDispatchToProps = dispatch => ({
  done: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
