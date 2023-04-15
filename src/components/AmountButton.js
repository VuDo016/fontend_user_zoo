import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/AmountButtonStyles'

export default class AmountButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => { console.log("Button - pressed") }}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.text}>01</Text>
        </View>       
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}