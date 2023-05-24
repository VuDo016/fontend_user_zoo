import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getBoating, getTentRentals } from '../../../api/service/ticket';

export default class ChoiceServiceScreen extends Component {
    state = {
        selected: {},
        boating: [],
        tentRental: [],
        isLoading: true,
        serviceAmounts: [0, 0, 0, 0] // Mảng lưu giá trị amount cho từng service
    };

    handleSeleted = (id) => {
        const { selected } = this.state;
        const newSelected = { ...selected };
        if (newSelected[id]) {
            delete newSelected[id];
        } else {
            newSelected[id] = true;
        }
        this.setState({ selected: newSelected });
    };

    async getService() {
        try {
            this.setState({ boating: await getBoating() })
            this.setState({ tentRental: await getTentRentals() })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    handleTicketAmountChange = (index, amount) => {
        const updatedAmounts = [...this.state.serviceAmounts];
        updatedAmounts[index] = amount;
        this.setState({
            serviceAmounts: updatedAmounts,
        });
    };


    componentDidMount() {
        this.getService();
    }

    loadTicket = async (serviceAmounts) => {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null) {
                const ticket = JSON.parse(ticketData);
                const { selected } = this.state;

                // Kiểm tra và cập nhật serviceAmounts chỉ cho các mục đã chọn
                const serviceAmountsCopy = serviceAmounts.map((amount, index) => {
                    const isSelected = selected[index];
                    return isSelected ? amount : 0;
                });
                ticket.serviceAmounts = serviceAmountsCopy; // Cập nhật serviceAmounts vào ticket

                // Lưu ticket cập nhật vào AsyncStorage
                await AsyncStorage.setItem('ticket', JSON.stringify(ticket));
            }
        } catch (error) {
            console.log(error);
        }
    };



    render() {
        const { selected, boating, tentRental, serviceAmounts } = this.state;
        const ticket = this.props.route.params.ticket
        const data = [ticket, boating.concat(tentRental)]
        const navigation = this.props.navigation
        const count = Object.keys(selected).length;

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Chọn dịch vụ bạn muốn thuê?</Text>
                        <Text style={styles.text}>Nhập số lượng cần thuê?</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    <FlatList
                        data={boating}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item, index }) => (
                            <View style={styles.viewTag1}>
                                <CheckBox
                                    value={selected[index]}
                                    onValueChange={() => this.handleSeleted(index)}
                                    style={styles.checkBox}
                                />
                                <View pointerEvents={selected[index] ? 'auto' : 'none'} style={[styles.viewServiceChoice, { opacity: selected[index] ? 1 : 0.5 }]}>
                                    <Image style={styles.image1} source={{ uri: item.image }} />
                                    <View style={styles.viewTT}>
                                        <Text numberOfLines={2} style={styles.textType}> Thuyền {item.number_seats} chỗ</Text>
                                        <Text style={styles.textPrice}>{item.price.toLocaleString()} vnđ</Text>
                                        <AmountButton onAmountChange={(amount) => this.handleTicketAmountChange(index, amount)} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <FlatList
                        data={tentRental}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item, index }) => (
                            <View style={styles.viewTag1}>
                                <CheckBox
                                    value={selected[index + 2]}
                                    onValueChange={() => this.handleSeleted(index + 2)}
                                    style={styles.checkBox}
                                />
                                <View pointerEvents={selected[index + 2] ? 'auto' : 'none'} style={[styles.viewServiceChoice, { opacity: selected[index + 2] ? 1 : 0.5 }]}>
                                    <Image style={styles.image1} source={{ uri: item.image }} />
                                    <View style={styles.viewTT}>
                                        <Text style={styles.textType}>Lều {item.number_seats} người</Text>
                                        <Text style={styles.textPrice}>{item.price.toLocaleString()} vnđ</Text>
                                        <AmountButton onAmountChange={(amount) => this.handleTicketAmountChange(index + 2, amount)} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.loadTicket(serviceAmounts)
                        navigation.navigate('ChoiceVehicalScreen', {data: data})
                    }}>
                        {count ?
                            <Text style={styles.textBtn}>Tiếp theo</Text>
                            :
                            <Text style={styles.textBtn}>Bỏ qua</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
                        <Text style={styles.textBtn}>Trở lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}