import { connect } from 'react-redux';
import { Actions } from 'react-native-redux-router';
import TimelineDetail from '../../components/Timeline/TimelineDetail';

const mapStateToProps = ({timeline}) => ({
  timelines: []
});
const mapDispatchToProps = dispatch => ({
  anotherMethod: () => {},
});
export default connect(mapStateToProps, mapDispatchToProps)(TimelineDetail);
