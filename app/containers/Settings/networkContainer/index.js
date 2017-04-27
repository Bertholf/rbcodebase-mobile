import { connect } from 'react-redux';
import Setting from '../../../components/Setting/Setting';
import { getNetworkStatus } from '../../../actions/networkStatus';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    dispatch(getNetworkStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
