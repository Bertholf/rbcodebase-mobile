import { connect } from 'react-redux';
import Gender from '../../../components/Setting/GenderEdit';
import { getNetworkStatus } from '../../../actions/networkStatus';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    dispatch(getNetworkStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gender);
