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

export default class PostMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      name: '',
      type: '',
      data: '',
      path: '',
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
        const source = { uri: `data:image/jpeg;base64,${response.data}` };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
          name: response.fileName,
          data: response.data,
          type: response.type,
          path: response.path,
        });
      }
      const imgName = this.state.name;
      const imgData = this.state.data;
      const imgType = this.state.type;
      const imgPath = this.state.path;
      this.props.getData(imgName, imgData, imgType, imgPath)
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
