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
        const base64Logo = "data:image/png;base64,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"
        const base64Logo1 = "data:image/png;base64,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"
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
                    {/* <Image style={styles.imageLogo} source={{ uri: base64Logo }} />
                    <Image style={styles.imageLogo} source={{ uri: base64Logo1 }} /> */}
                </View>
            </ScrollView>
        );
    }
}