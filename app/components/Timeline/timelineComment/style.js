import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 20,
  },
  comment: {
    flex: 2,
    padding: 0,
    marginLeft: 5,
    height: 30,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: '#2196F3',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2196F3',
    borderWidth: 2,
    marginBottom: 20,
  },
  icons: {
    width: 15,
    height: 15,
    tintColor: '#757575',
    opacity: 0.2,
    alignSelf: 'center',
    marginLeft: 10,
  },
  listcomment: {
  borderColor: '#B3E5FC',
  borderBottomWidth: 0.5,
  paddingBottom: 5,
  paddingTop: 5,
  marginRight: 20,
  },
  user: {
    color: '#000',
  },
  text: {
      opacity:0.5,
    },
})

export default styles;
