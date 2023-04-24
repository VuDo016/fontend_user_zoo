import { TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/ComponentStyle'

export default class ButtonBack extends Component {
  render() {
    const navigation = this.props.navigation
    
    return (
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Image style={styles.image} source={require('../../assets/images/IconBack.png')} />
      </TouchableOpacity>
    )
  }
}