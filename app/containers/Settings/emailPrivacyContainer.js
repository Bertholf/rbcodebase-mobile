import { connect } from 'react-redux';
import { getNetworkStatus, changeNetworkStatus } from '../../actions/networkStatus';
import AdPreference from '../../components/Setting/EmailSetting';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
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

export default connect(mapStateToProps, mapDispatchToProps)(AdPreference);
