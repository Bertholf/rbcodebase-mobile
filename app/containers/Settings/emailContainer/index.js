import { connect } from 'react-redux';
import { getNetworkStatus } from '../../../actions/networkStatus';
import EmailEdit from '../../../components/Setting/EmailEdit';

const mapStateToProps = ({ app }) => ({
  network: app.networkState.network,
});

const mapDispatchToProps = dispatch => ({
  networkAction: () => {
    // return true;
    dispatch(getNetworkStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailEdit);
