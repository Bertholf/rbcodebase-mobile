import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },

  OuterLayer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
  },

  OuterLayer2: {
    paddingLeft: 4,
    flexDirection: 'row',
  },
  OuterLayer3: {
    flexDirection: 'column',
    paddingTop: 8,
  },
  OuterLayer4: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 6,
  },
  OuterLayer5: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  SmallImage: {
    width: 40,
    height: 40,
    marginRight: 8,
    marginLeft: 6,
    marginTop: 6,
    borderRadius: 20,
  },
  LikeText: {
    color: '#000000',
    paddingRight: 10,
    paddingLeft: 5,
  },
  CommentText: {
    color: '#000000',
    paddingLeft: 5,
    paddingRight: 10,
  },
  Text1: {
    fontSize: 24,
    paddingLeft: 8,
    color: '#435172',
  },
  Text2: {
    fontSize: 12,
    paddingLeft: 8,
  },
  Text3: {
    fontSize: 12,
    paddingLeft: 22,
  },
  Text4: {
    fontSize: 16,
    color: '#435172',
  },
  Text5: {
    fontSize: 12,
    paddingBottom: 10,
  },
  ImageLike: {
    height: 24,
    width: 24,
    paddingRight: 6,
  },
  ImageComment: {
    height: 24,
    width: 24,
    paddingRight: 6,
  },
});

module.exports = styles;
