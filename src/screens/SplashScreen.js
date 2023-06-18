import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import styles from '../styles/SplashStyles';
import { getAccessTokenNew } from '../../api/service/account';

class SplashScreen extends Component {
  state = {
    logoOpacity: new Animated.Value(0),
    bgOpacity: new Animated.Value(0),
    loadingWidth: new Animated.Value(0)
  }

  checkAccessTokenExpiration = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
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
    }
    else {
      console.log('token không tồn tại')
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

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.bgOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.loadingWidth, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start(async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        await this.checkAccessTokenExpiration();
        this.refreshTokenInterval = setInterval(this.checkAccessTokenExpiration, 2 * 1000);
        this.props.navigation.navigate('TabBar');
      } else {
        // Token chưa tồn tại trong AsyncStorage
        this.props.navigation.navigate('HomeScreen');
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.refreshTokenInterval);
  }

  render() {
    const logoScale = this.state.logoOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1]
    });

    const loadingWidth = this.state.loadingWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>
        <Animated.Image source={require('../../assets/images/splash_bg.jpg')} style={[styles.background, { opacity: this.state.bgOpacity }]} resizeMode="cover" />
        <Animated.View style={[styles.logoContainer, { opacity: this.state.logoOpacity, transform: [{ scale: logoScale }] }]}>
          <Animated.Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        </Animated.View>
        <View style={styles.loadingContainer}>
          <Animated.View style={[styles.loadingBar, { width: loadingWidth }]} />
        </View>
      </View>
    );
  }
}

export default SplashScreen;
