import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timelineContainer: {
    justifyContent: 'flex-start',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  about: {
    flexDirection: 'row',
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  textAboutContainer: {
    flex: 9,
  },
  textNameProfile: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 16,
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
    paddingTop: 5,
    paddingBottom: 5,
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
    marginRight: 20,
    marginLeft: 20,
  },
});

export default styles;
