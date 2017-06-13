import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timelineContainer: {
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 0,

  },
  about: {
    flexDirection: 'row',
  },
  avatarImg: {
    ...Platform.select({
      ios: {
        width: 50,
        height: 50,
        marginRight: 12,
        borderRadius: 50/2,
      },
      android: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 12,
      }
    }),
  },
  textAboutContainer: {
    flex: 9,
  },
  textNameProfile: {
    color: 'black',
    fontSize: 18,
  },
  textDay: {
    color: '#aaa',
    fontSize: 12,
    lineHeight: 15,
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  iconRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconRightMenu: {
    width: 25,
    height: 25,
    top: 0,
    left: 0,
  },
  statusContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  textStatus: {
    color: 'rgba(0,0,0,0.9)',
  },
  commentsCountContainer: {
    flexDirection: 'row',
    padding: 0,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textLike: {
    marginRight: 15,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,
  },
  textComment: {
    marginRight: 10,
    marginLeft: 10,
  },
  icons: {
    width: 20,
    height: 20,
    tintColor: '#757575',
    opacity: 0.2,
    alignSelf: 'center',
    marginRight: 20,
  },
  input: {
    flex: 2,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: '#2196F3',
  },

  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#2196F3',
    borderBottomWidth: 1,
    marginBottom: 8,
    marginRight: 20,
  },
  liked: {
    marginRight: 5,
    height: 15,
    width: 15,
    tintColor: '#2196F3',
  },
  unlike: {
    marginRight: 5,
    height: 15,
    width: 15,
    opacity: 0.5,
  },
});

export default styles;
