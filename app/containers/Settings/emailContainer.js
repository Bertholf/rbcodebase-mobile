import { connect } from 'react-redux';
import { getNetworkStatus, changeNetworkStatus } from '../../actions/networkStatus';
import EmailEdit from '../../components/Setting/EmailEdit';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailEdit);
