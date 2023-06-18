import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllAccountID } from '../../../api/service/account';

export default class ChoiceServiceScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetail: [],
            ticket: {},
            isLoading: true,
        };
    }

    loadTicket = async () => {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null) {
                const ticket = JSON.parse(ticketData);
                this.setState({ ticket, isLoading: false });
            }
        } catch (error) {
            console.log(error);
        }
    };

    async handleBill(navigation, totalPrice, totalAmount) {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null) {
                const ticket = JSON.parse(ticketData);
                ticket.totalPrice = totalPrice;
                ticket.totalAmount = totalAmount;

                // Lưu ticket cập nhật vào AsyncStorage
                await AsyncStorage.setItem('ticket', JSON.stringify(ticket));
                navigation.navigate('VNpayScreen')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getDataUser(cartData) {
        const idUser = await AsyncStorage.getItem('user');

        this.setState({ userDetail: await getAllAccountID(JSON.parse(idUser)) })
    }

    async componentDidMount() {
        await this.getDataUser();
        this.loadTicket();
    }

    render() {
        const navigation = this.props.navigation;
        const { ticket, isLoading, userDetail } = this.state;
        const data = this.props.route.params.data

        if (isLoading) {
            return <Text>Loading...</Text>; // Hiển thị một thông báo loading trong khi đang tải dữ liệu
        }

        const selectedItems = data[0].filter((item, index) => ticket.ticketAmounts[item.id - 1] > 0);
        const selectedItems1 = data[1].filter((item, index) => ticket.serviceAmounts[item.id - 1] > 0);

        const parts = ticket.date.split("-");
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

        const totalPriceTicket = data[0].reduce((accumulator, item, index) => {
            const item1 = ticket.ticketAmounts[item.id - 1];
            const price = item.price;
            return accumulator + (price * item1);
        }, 0);

        const totalPriceService = data[1].reduce((accumulator, item, index) => {
            const item1 = ticket.serviceAmounts[item.id - 1];
            const price = item.price;
            return accumulator + (price * item1);
        }, 0);

        const amountArray = ticket.ticketAmounts.concat(ticket.serviceAmounts); // Gộp hai mảng lại thành một mảng duy nhất
        const totalAmount = amountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.pop(6)}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Thông tin bạn đã chọn!</Text>
                        <Text style={styles.text}>Thanh toán ngay!</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    <ScrollView>
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
                                                <Text style={styles.ticketPrice}>{item.price.toLocaleString()} VND</Text>
                                                <Text style={styles.ticketQuantity}>x {ticket.ticketAmounts[item.id - 1].toLocaleString()}</Text>
                                            </View>
                                        ))
                                    }
                                    <View style={styles.ticket}>
                                        <Text style={styles.ticketName}>Tổng cộng: </Text>
                                        <Text style={styles.ticketPrice}>{totalPriceTicket.toLocaleString()} VND</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.title}>Danh sách dịch vụ đã chọn:</Text>
                                <View style={styles.serviceList}>
                                    {
                                        selectedItems1.map((item, index) => (
                                            <View key={index} style={styles.service}>
                                                <Text style={styles.serviceName}>{item.name}</Text>
                                                <Text style={styles.servicePrice}>{item.price.toLocaleString()} VND</Text>
                                                <Text style={styles.serviceQuantity}>x {ticket.serviceAmounts[item.id - 1]}</Text>
                                            </View>
                                        ))
                                    }
                                    <View style={styles.service}>
                                        <Text style={styles.serviceName}>Tổng cộng: </Text>
                                        <Text style={styles.servicePrice}>{totalPriceService.toLocaleString()} VND</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.title}>Ưu đãi thành viên:</Text>
                                <View style={styles.serviceList}>
                                    <View style={styles.service}>
                                        <Text style={styles.serviceName}>Hạng thành viên</Text>
                                        <Text style={styles.servicePrice}>{userDetail.rank_name}</Text>
                                    </View>
                                    <View style={styles.service}>
                                        <Text style={styles.serviceName}>Giảm giá</Text>
                                        <Text style={styles.servicePrice}>{userDetail.discount_percentage} %</Text>
                                    </View>
                                    <View style={styles.service}>
                                        <Text style={styles.serviceName}>Tổng tiền giảm:</Text>
                                        <Text style={styles.servicePrice}>{((totalPriceService + totalPriceTicket)*(+userDetail.discount_percentage / 100)).toLocaleString()} VND</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.title}>Phương thức thanh toán:</Text>
                                <Text style={styles.value}>VNPay</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.title}>Tổng hoá đơn: {((totalPriceService + totalPriceTicket) - (totalPriceService + totalPriceTicket)*(+userDetail.discount_percentage / 100)).toLocaleString()} VND</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.handleBill(navigation, (totalPriceService + totalPriceTicket) - (totalPriceService + totalPriceTicket)*(+userDetail.discount_percentage / 100), totalAmount)}>
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