import { Image, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getVehicle, getBoating, getTentRentals } from '../../../api/service/ticket';

export default class ChoiceServiceScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ticket: {},
            isLoading: true,
        };
    }

    loadTicket = async () => {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null) {
                const ticket = JSON.parse(ticketData);
                console.log(ticket)
                this.setState({ ticket, isLoading: false });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.loadTicket();
    }

    render() {
        const navigation = this.props.navigation;
        const { ticket, isLoading } = this.state;
        const data = this.props.route.params.data

        if (isLoading) {
            return <Text>Loading...</Text>; // Hiển thị một thông báo loading trong khi đang tải dữ liệu
        }

        const selectedItems = data[0].filter((item, index) => ticket.ticketAmounts[item.id - 1] > 0);
        const selectedItems1 = data[1].filter((item, index) => ticket.serviceAmounts[item.id - 1] > 0);

        const parts = ticket.date.split("-");
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Thông tin bạn đã chọn!</Text>
                        <Text style={styles.text}>Thanh toán ngay!</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    <View style={styles.container1}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Ngày đến:</Text>
                            <Text style={styles.value}>{formattedDate}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Danh sách vé đã mua:</Text>
                            <View style={styles.ticketList}>
                                {
                                    selectedItems.map((item, index) => (
                                        <View key={index} style={styles.ticket}>
                                            <Text style={styles.ticketName}>{item.ticket_type}</Text>
                                            <Text style={styles.ticketPrice}>{item.price} VND</Text>
                                            <Text style={styles.ticketQuantity}>x {ticket.ticketAmounts[item.id - 1]}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Danh sách dịch vụ đã chọn:</Text>
                            <View style={styles.serviceList}>
                                {
                                    selectedItems1.map((item, index) => (
                                        <View key={index} style={styles.service}>
                                            <Text style={styles.serviceName}>{item.name}</Text>
                                            <Text style={styles.servicePrice}>{item.price} VND</Text>
                                            <Text style={styles.serviceQuantity}>x {ticket.serviceAmounts[item.id - 1]}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Phương thức thanh toán:</Text>
                            <Text style={styles.value}>VNPay</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigation.navigate('LoginScreen', { newUser: null })
                            alert("Vui lòng đăng nhập để thanh toán")
                        }}>
                        <Text style={styles.textBtn}>Thanh toán</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
                        <Text style={styles.textBtn}>Trở lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}