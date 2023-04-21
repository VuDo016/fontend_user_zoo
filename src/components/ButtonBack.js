import { TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/ComponentStyle'

export default class ButtonBack extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonBack}>
        <Image style={styles.image} source={require('../../assets/images/IconBack.png')} />
      </TouchableOpacity>
    )
  }
}