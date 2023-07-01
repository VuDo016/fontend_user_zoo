import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import styles from '../../styles/DonationStyles';
import styles1 from '../../styles/EditUserStyle.js'

export default class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationAmount: 0,
            selectedOption: 'once',
        };
    }

    handleDonationAmountChange = (amount) => {
        this.setState({ donationAmount: amount * 1000 });
    };

    handleDonationFrequencyChange = (option) => {
        this.setState({ selectedOption: option });
    };

    async handleDonatePress(totalPrice) {
        try {
            if (totalPrice === 0) {
                alert('Vui lòng nhập số tiền !!!')
            }
            else {
                const ticketData = await AsyncStorage.getItem('ticket');
                if (ticketData !== null) {
                    const ticket = JSON.parse(ticketData);
                    ticket.totalPrice = totalPrice;

                    // Lưu ticket cập nhật vào AsyncStorage
                    await AsyncStorage.setItem('ticket', JSON.stringify(ticket));
                    this.props.navigation.navigate('VNpayScreen')
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { donationAmount, selectedOption } = this.state;

        const once = [50, 100, 500]
        const monthly = [200, 500, 100]
        const yearly = [5000, 10000, 20000]

        let array = []
        if (selectedOption === 'yearly') array = yearly
        else if (selectedOption === 'monthly') array = monthly
        else array = once

        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles1.header}>
                    <Image
                        style={styles1.iconArrow}
                        source={require('../../../assets/images/IconBack.png')}
                    />
                    <Text style={styles1.textTitle}>Ủng hộ sở thú</Text>
                </TouchableOpacity>
                <Text style={[styles.title]}>Hãy giúp chúng tôi tạo ra một thế giới tốt đẹp hơn cho động vật</Text>
                <Text style={[styles.subtitle]}>Thay mặt các loài động vật, sở thú của chúng tôi xin cảm ơn bạn trước vì đã tạo nên sự khác biệt!</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WhyDonation')}>
                    <Text style={styles.subtitle1}>Tại sao lại quyên góp?</Text>
                </TouchableOpacity>
                <View style={styles.formContainer}>
                    <Text style={styles.fieldTitle}>Bạn muốn đóng góp bao nhiêu?</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, { height: screenHeight * 0.07 }]}
                            placeholder="0"
                            keyboardType="numeric"
                            value={donationAmount.toLocaleString() + ' đ'}
                            onChangeText={this.handleDonationAmountChange}
                            required
                        />
                        <View style={styles.currencyContainer}>
                            {
                                array.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => this.handleDonationAmountChange(item)}
                                        style={[styles.radioButton, (donationAmount / 1000) === item && styles.radioButtonSelected]}
                                    >
                                        <Text style={styles.radioButtonLabel}>{item.toLocaleString()}K</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    {/* <View style={styles.selectGroup}>
                        <Text style={[styles.fieldTitle]}>Bạn muốn quyên góp bao lâu một lần?</Text>
                        <View style={styles.radioButtonContainer}>
                            <CheckBox
                                value={selectedOption === 'once'}
                                onValueChange={() => this.handleDonationFrequencyChange('once')}
                            />
                            <Text style={[styles.radioButtonLabel, { marginLeft: screenWidth * 0.02 }]}>Một lần</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <CheckBox
                                value={selectedOption === 'monthly'}
                                onValueChange={() => this.handleDonationFrequencyChange('monthly')}
                            />
                            <Text style={[styles.radioButtonLabel, { marginLeft: screenWidth * 0.02 }]}>Hàng tháng</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <CheckBox
                                value={selectedOption === 'yearly'}
                                onValueChange={() => this.handleDonationFrequencyChange('yearly')}
                            />
                            <Text style={[styles.radioButtonLabel, { marginLeft: screenWidth * 0.02 }]}>Hàng năm</Text>
                        </View>
                    </View> */}

                    <TouchableOpacity style={[styles.button, { height: screenHeight * 0.07 }]} onPress={() => this.handleDonatePress(donationAmount)}>
                        <Text style={styles.buttonText}>Quyên góp ngay !</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
