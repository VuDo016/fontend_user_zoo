import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

class MapScreen extends Component {
  UNSAFE_componentWillMount() {
    // Code trong componentWillMount
  }

  render() {
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    return (
      <View style={{ flex: 1 }}>
        <PinchZoomView
          scalable={true}
          minScale={1}
          maxScale={4}
          zoomEnabled={true}
          onZoomStart={() => console.log('Zoom started')}
          onZoomEnd={() => console.log('Zoom ended')}
          style={{ width: screenWidth, height: screenHeight }}
        >
          <Image
            style={{ width: '100%', height: screenHeight }}
            source={require('../../../assets/images/map/zoomap.png')}
            resizeMode="contain"
          />
        </PinchZoomView>
      </View>
    );
  }
}

export default MapScreen;
