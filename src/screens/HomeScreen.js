import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/HomeStyles'

export default class HomeScreen extends Component {
  render() {
    const navigation = this.props.navigation
    
    return (
      <View style={styles(true).container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles(true).imageBackground}>
          <Text style={styles(true).text}>NATURAL PARK ZOO</Text>
          <View style={styles(true).viewMid}>
            <TouchableOpacity style={styles(true).viewItem} onPress={() => navigation.navigate('BuyTicketScreen')}>
              <Image style={styles(true).image} source={require('../../assets/images/myTicket.png')}/>
              <Text style={styles(true).textMid}>Mua Vé</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(true).viewItem}>
              <Image style={styles(true).image} source={require('../../assets/images/todayEvent.png')}/>
              <Text style={styles(true).textMid}>Sự Kiện</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles(true).viewBtn} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles(true).textBtn}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(false).viewBtn} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles(false).textBtn}>TẠO TÀI KHOẢN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}