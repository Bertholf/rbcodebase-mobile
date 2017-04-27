import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

const stylescomp = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContent: {
    flex: 12,
    width,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    borderRadius: 50,
  },
  image: {
    height: 200,
    width: 200,
  },
  name: {
    fontSize: 25,
    marginTop: 40,
  },
  email: {
    fontSize: 15,
  },
});

export default stylescomp;
