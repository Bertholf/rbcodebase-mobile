'use strict';
import React from 'react';
import {
  StyleSheet
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
    paddingTop:8,
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
    color: '#1565c0',
    paddingRight: 20,
    paddingLeft: 5,
  },
  CommentText: {
    color: '#1565c0',
    paddingLeft: 5,
    paddingRight:10,
  },
  Comment1: {
    color: '#1565c0',
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  Comment2: {
    color: '#1565c0',
  },
  CommentText2: {
    paddingRight:6,

  },
  Text1: {
    fontSize: 24,
    paddingLeft: 8,
    color:'#1565c0'
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
  Card: {
    flexDirection: 'row',
    marginRight: 6,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1565c0',
  },

});

module.exports = styles;
