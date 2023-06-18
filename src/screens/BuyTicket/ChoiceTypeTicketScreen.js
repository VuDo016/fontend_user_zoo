import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getTicketCategory } from '../../../api/service/ticket';

export default class ChoiceTypeTicket extends Component {
    state = {
        ticket: [],
        isLoading: true,
        ticketAmounts: [0, 0, 0] // Mảng lưu giá trị amount cho từng ticket
    };

    handleTicketAmountChange = (index, amount) => {
        const updatedAmounts = [...this.state.ticketAmounts];
        updatedAmounts[index] = amount;
        this.setState({
            ticketAmounts: updatedAmounts,
        });
    };

    async getTicketAll() {
        try {
            this.setState({ ticket: await getTicketCategory() })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getTicketAll();
    }

    loadTicket = async (ticketAmounts, navigation, ticket1) => {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null && JSON.stringify(ticketAmounts) !== JSON.stringify([0, 0, 0])) {
                const ticket = JSON.parse(ticketData);
                ticket.ticketAmounts = ticketAmounts; // Thêm ticketAmounts vào ticket
                
                // Lưu ticket cập nhật vào AsyncStorage
                await AsyncStorage.setItem('ticket', JSON.stringify(ticket));

                navigation.navigate('ChoiceServiceScreen', {ticket: ticket1})
            }
            else 
                alert('Vui lòng nhập số lượng vé cần mua !!')
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const navigation = this.props.navigation
        const { ticket, isLoading, ticketAmounts } = this.state
        const img = [
            require('../../../assets/images/man.png'),
            require('../../../assets/images/childen.png'),
            require('../../../assets/images/oldman.png')
        ]
          
        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.pop(2)}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Chọn loại vé bạn muốn mua?</Text>
                        <Text style={styles.text}>Nhập số lượng cần mua?</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    {
                        ticket.map((item, index) => (
                            <View key={index} style={styles.viewItemChoice}>
                                <View>
                                    <Image style={styles.image} source={img[index]} />
                                    <Text>{item.conditions}</Text>
                                </View>
                                <View style={styles.viewTT}>
                                    <Text style={styles.textType}>{item.ticket_type}</Text>
                                    <Text style={styles.textPrice}>{item.price.toLocaleString()} vnđ</Text>
                                    <AmountButton onAmountChange={(amount) => this.handleTicketAmountChange(index, amount)} />
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.viewFoot}>
                    <Text style={styles.textFoot}>Trẻ em dưới 1m hoặc dưới 2 tuổi được miễn phí</Text>
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => this.loadTicket(ticketAmounts, navigation, ticket)}>
                        <Text style={styles.textBtn}>Tiếp theo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
                        <Text style={styles.textBtn}>Trở lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}