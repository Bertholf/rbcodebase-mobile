import { connect } from 'react-redux';
import NameEdit from '../../components/Setting/ChangeName';
import { getNetworkStatus, changeNetworkStatus, getCurrentState } from '../../actions/networkStatus';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
  change: app.networkState.network,
  handler: app.networkState.network,
  currentState: app.networkState.currentState,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    dispatch(getNetworkStatus());
  },
  changeNetworkAction: () => {
    dispatch(changeNetworkStatus());
  },
  getCurrentState: () => {
    dispatch(getCurrentState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NameEdit);
