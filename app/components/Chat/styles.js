import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  OuterLayer: {
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    elevation: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  LayoutTextChat: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: '#2196f3',
    borderWidth: 0.7,
    marginLeft: 4,
    marginRight: 4,
  },
  LayoutInputText: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 12,
    // marginLeft: 12,
  },
  TextInput: {
    flex: 1,
    fontSize: 20,
    borderRadius: 3,
    color: '#2196f3',
  },
  TextSend: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
export default styles;
