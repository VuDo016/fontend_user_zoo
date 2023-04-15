import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import styles from '../../styles/LoginStyles';
import colors from '../../../assets/colors/colors';

export default class RegisterScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    rememberMe: false
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleRememberMeChange = (rememberMe) => {
    this.setState({ rememberMe });
  };

  handleLoginPress = () => {
    const { email, password, rememberMe } = this.state;

    // You can perform authentication here and navigate to the main app screen
  };

  render() {
    const { email, password, name, sdt } = this.state;
    const navigation = this.props.navigation

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewMid}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButtonIcon} source={require('../../../assets/images/IconBack.png')} />
              </TouchableOpacity>
              <Text style={styles.textTitle}>Đăng ký</Text>
              <Text style={styles.textTitle1}>Tạo tài khoản ngay</Text>
            </View>
            <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nhập Tên của bạn"
            placeholderTextColor={colors.mainDark}
            value={name}
            onChangeText={this.handleNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập Email của bạn"
            placeholderTextColor={colors.mainDark}
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Tạo một mật khẩu có ít nhất 5 ký tự"
            placeholderTextColor={colors.mainDark}
            secureTextEntry
            value={password}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleLoginPress}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewBtnText1} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.textBottom1}>Bạn đã có tài khoản?</Text>
            <Text style={styles.textBottom}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}