import { connect } from 'react-redux';
import Setting from '../components/Setting/Setting';
import { getNetworkStatus, changeNetworkStatus, _handleConnectivityChange } from '../actions/networkStatus';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
  change: app.networkState.network,
  handler: app.networkState.network,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    // return true;
    dispatch(getNetworkStatus());
  },
  changeNetworkAction: () => {
    dispatch(changeNetworkStatus());
  },
  handler: () => {
    dispatch(_handleConnectivityChange());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
