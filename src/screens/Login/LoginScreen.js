import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/LoginStyles';
import colors from '../../../assets/colors/colors';
import { handle_SignIn_SignUp_KH } from '../../../api/method/post';

export default class LoginScreen extends Component {
    state = {
        email: 'vudo456@gmail.com',
        password: '12345678',
        rememberMe: false
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

    async checkLoginKhachHang(navigation) {
        try {
            const data = await handle_SignIn_SignUp_KH(this.state.email, this.state.password, '', 1)
            if (data[0].tokens.length !== 0) {
                AsyncStorage.setItem('token', JSON.stringify(data[0].tokens))
                AsyncStorage.setItem('user', JSON.stringify(data[0].userId))
                const previousScreen = navigation.getState().routes[navigation.getState().routes.length - 2]?.name;
                // Kiểm tra tên màn hình trước đó và thực hiện xử lý tương ứng
                if (previousScreen === 'InfoBill') {
                    navigation.navigate('VNpayScreen')
                } else if (previousScreen === 'HomeScreen') {
                    navigation.navigate('TabBar')
                } else if (previousScreen === 'RegisterScreen') {
                    navigation.navigate('TabBar')
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            const newUser = this.props.route.params.newUser
            if (newUser !== null) {
                this.setState({ email: newUser.email })
                this.setState({ password: newUser.password })
            }
        });
    }

    render() {
        const { email, password, rememberMe } = this.state;
        const navigation = this.props.navigation
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.viewMid}>
                        <View>
                            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                                <Image style={styles.backButtonIcon} source={require('../../../assets/images/IconBack.png')} />
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Đăng nhập</Text>
                            <Text style={styles.textTitle1}>Chào bạn quay lại</Text>
                        </View>
                        <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập Email của bạn"
                        placeholderTextColor={colors.mainDark}
                        value={email}
                        onChangeText={this.handleEmailChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mật khẩu của bạn"
                        placeholderTextColor={colors.mainDark}
                        secureTextEntry
                        value={password}
                        onChangeText={this.handlePasswordChange}
                    />
                    <View style={styles.rememberMeContainer}>
                        <CheckBox
                            value={rememberMe}
                            onValueChange={this.handleRememberMeChange}
                        />
                        <Text style={styles.rememberMeLabel}>Ghi nhớ đăng nhập</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.checkLoginKhachHang(navigation)}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBtnText}>
                        <Text style={styles.textBottom}>Bạn quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBtnText1} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.textBottom1}>Chưa có tài khoản?</Text>
                        <Text style={styles.textBottom}> Đăng kí ngay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}