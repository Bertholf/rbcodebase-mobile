import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './../../../components/Timeline/StatusPostCard/styles';

const imgName = [];
const imgData = [];
const imgType = [];
const imgPath = [];

export default class PostMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      name: '',
    };
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      imgName.push(response.fileName)
      imgData.push(response.data)
      imgType.push(response.type)
      imgPath.push(response.path)
      this.props.getData(imgName, imgData, imgType, imgPath)

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
          name: response.fileName,
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.containerBottom}>
        <TouchableOpacity>
          <Image
            source={require('./../../../images/ic_perm_identity_black_24dp.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./../../../images/ic_place_black_24dp.png')}
            style={styles.image}
          />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image
            source={require('./../../../images/ic_videocam_black_24dp.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <Image
            source={require('./../../../images/camera.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./../../../images/ic_insert_emoticon_black_24dp.png')}
            style={styles.image}
          />

        </TouchableOpacity>

      </View>
    );
  }
}
