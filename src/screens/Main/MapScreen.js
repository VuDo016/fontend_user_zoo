import React, { Component } from 'react';
import { Text, View, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from '../../styles/MapStyles';
import SearchBarExample from '../../components/SearchBarExample';
import { Image } from 'react-native-elements';

class MapScreen extends Component {
  state = {
    scale: 1,
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height
  };

  handleZoomIn = () => {
    this.setState(prevState => ({ scale: prevState.scale * 1.1 }));
  };

  handleZoomOut = () => {
    this.setState(prevState => ({ scale: prevState.scale * 0.9 }));
  };

  render() {
    const { scale, screenHeight, screenWidth } = this.state;
    const imageWidth = screenWidth * 2.5 * scale;
    const imageHeight = screenHeight - screenHeight * 10 / 100 * scale;

    return (
      <View>
        <SearchBarExample />
        <TouchableOpacity style={styles.button} onPress={() => this.handleZoomIn()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { bottom: 0, right: 0 }]} onPress={() => this.handleZoomOut()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            <Image style={{ width: imageWidth, height: imageHeight }} source={require('../../../assets/images/map/zoomap.png')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MapScreen;
