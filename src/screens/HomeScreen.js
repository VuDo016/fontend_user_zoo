import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import styles from '../styles/HomeStyles'
import { getAccessTokenNew } from '../../api/service/account';

export default class HomeScreen extends Component {
  componentDidMount() {
    this.refreshTokenInterval = setInterval(this.checkAccessTokenExpiration, 32 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTokenInterval);
  }

  checkAccessTokenExpiration = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);

    if (this.isAccessTokenExpired(cartData.accessToken)) {
      const tokenNew = await getAccessTokenNew(cartData.refreshToken)
      try {
        await AsyncStorage.setItem('token', JSON.stringify(tokenNew));
        console.log('Token đã được lưu vào AsyncStorage.');
      } catch (error) {
        console.log('Lỗi khi lưu token vào AsyncStorage:', error);
      }
    }
  };

  isAccessTokenExpired = (accessToken) => {
    if (!accessToken) {
      return true;
    }

    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken.exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;

    return decodedToken.exp <= currentTime;
  };

  render() {
    const navigation = this.props.navigation

    return (
      <View style={styles(true).container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles(true).imageBackground}>
          <Text style={styles(true).text}>NATURAL PARK ZOO</Text>
          <View style={styles(true).viewMid}>
            <TouchableOpacity style={styles(true).viewItem} onPress={() => navigation.navigate('BuyTicketScreen')}>
              <Image style={styles(true).image} source={require('../../assets/images/myTicket.png')} />
              <Text style={styles(true).textMid}>Mua Vé</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(true).viewItem}>
              <Image style={styles(true).image} source={require('../../assets/images/todayEvent.png')} />
              <Text style={styles(true).textMid}>Sự Kiện</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles(true).viewBtn} onPress={() => navigation.navigate('LoginScreen', { newUser: null })}>
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