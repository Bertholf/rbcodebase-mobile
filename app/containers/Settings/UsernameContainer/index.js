import { connect } from 'react-redux';
import ChangeUsername from '../../../components/Setting/ChangeUsername';
import { getNetworkStatus } from '../../../actions/networkStatus';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    dispatch(getNetworkStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsername);
