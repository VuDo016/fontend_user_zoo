import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Image } from 'react-native-elements'

import styles from '../styles/TabBarStyles'

export default class TabBack extends Component {
  render() {
    return (
      <View style={styles(true).container}>
        <TouchableOpacity style={styles(true).button}>
            <Image style={styles(true).imageBack} source={require('../../assets/images/IconBack.png')} />
        </TouchableOpacity>       
      </View>
    )
  }
}