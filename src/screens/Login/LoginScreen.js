import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../../styles/LoginStyles';
import colors from '../../../assets/colors/colors';

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
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

    handleLoginPress = () => {
        const { email, password, rememberMe } = this.state;

        // You can perform authentication here and navigate to the main app screen
    };

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
                    <TouchableOpacity style={styles.button} onPress={this.handleLoginPress}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('TabBar')}>Đăng nhập</Text>
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