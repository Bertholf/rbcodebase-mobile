import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 0,
    flexDirection: 'row',
    flex: 1,
    paddingRight: 20
  },
  comment: {
    flex: 2,
    paddingTop: 0,
    fontFamily: 'sans-serif-medium',
    paddingBottom: 0,
    marginRight: 5,
    height: 30
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: '#2196F3'
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2196F3',
    borderWidth: 2,
    marginBottom: 20
  },
  listcomment: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#B3E5FC',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    paddingTop: 5,
    marginRight: 20
  }
})

export default styles;
