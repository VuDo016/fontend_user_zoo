import { TouchableOpacity, Image, View } from 'react-native'
import React, { Component } from 'react'
import Share from 'react-native-share';
import { captureScreen } from 'react-native-view-shot';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import styles from '../styles/ComponentStyle'

export default class ButtonBack extends Component {
  captureAndShare = async () => {
    try {
      const captureURI = await captureScreen({
        format: 'png', // Định dạng hình ảnh (png, jpg, ...)
        quality: 0.7, // Chất lượng hình ảnh (0-1)
        width: screenWidth, // Chiều rộng màn hình
        height: screenHeight // Chiều cao trang
      });

      const shareOptions = {
        title: 'Chia sẻ màn hình điện thoại',
        url: `file://${captureURI}`,
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.log('Lỗi chia sẻ:', error);
    }
  };

  render() {
    const navigation = this.props.navigation

    return (
      <View style={styles.viewButtonHead}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
          <Image style={styles.image} source={require('../../assets/images/IconBack.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBack} onPress={this.captureAndShare}>
          <Image style={styles.image} source={require('../../assets/images/iconAnimal/share.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}