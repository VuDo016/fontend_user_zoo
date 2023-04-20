import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      markers: [
        { id: 1, name: 'Animal 1', location: { latitude: 37.78825, longitude: -122.4324 } },
        { id: 2, name: 'Animal 2', location: { latitude: 37.7895, longitude: -122.4324 } },
        { id: 3, name: 'Stage', location: { latitude: 37.7895, longitude: -122.433 } },
        { id: 4, name: 'Dining Area', location: { latitude: 37.787, longitude: -122.432 } },
        { id: 5, name: 'Camping Area', location: { latitude: 37.788, longitude: -122.434 } },
        { id: 6, name: 'Boat Rowing', location: { latitude: 37.788, longitude: -122.431 } }
      ],
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      mapLoaded: false // add a flag to check if map has loaded
    };
  }

  onMapLayout = () => {
    this.setState({ mapLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={(text) => this.setState({ search: text })}
          value={this.state.search}
        />
        <MapView
          style={styles.map}
          initialRegion={this.state.initialRegion}
          onLayout={this.onMapLayout}
        >
          {this.state.mapLoaded && this.state.markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.location}
              title={marker.name}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 10,
  },
});

export default MapScreen;
