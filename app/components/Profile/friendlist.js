import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, Image,ScrollView, ActivityIndicator } from 'react-native';
import friend from '../../services/friend';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#9E9E9E',
    borderWidth: 0.3,
  },
  account: {
    paddingLeft: 10,
  },
  user: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
  detail: {
    fontSize: 11,
    color: 'grey',
    marginRight: 5,
    marginLeft: 3
  },
  button: {
     flexDirection: 'row',
     padding: 8,
     backgroundColor: '#2196F3',
     justifyContent:'space-between',
     color: 'white',
     alignItems:'center',
     marginTop: 5,
     borderRadius: 2,
  },
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});
console.log("helli", ListView);
export default class Friendlist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        loading: true,
        friendlist: {},
      };
    }
    componentDidMount() {
      friend.getFriend()
      .then((data) => {
        this.setState({ friendlist: data, loading: false });
        console.log('hAYYYY ',this.state);
      }).catch(err => console.log('ERROR LOH', err));
    }

    toggleSwitch() {
      this.setState({ clicked: !this.state.clicked });
    }
  render() {
     if (this.state.loading === false) {
    return (
      <ScrollView>
        {this.state.friendlist.data.map((data) => (
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
              <Image source={{ uri: data.image }} style={styles.photo} />
              <View style={styles.account}>
                <Text style={styles.user}>{data.first_name}</Text>
                <Text style={styles.detail}>{data.user_name}</Text>
              </View>
            </View>
              <TouchableOpacity>
                <Text style = {styles.button}>
                   {this.state.clicked ? 'Follow' : 'unfollow' }</Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }else{
   return (
     <ActivityIndicator />
   );
 }
 }
  }
