import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getVehicle } from '../../../api/service/ticket';

export default class ChoiceServiceScreen extends Component {
    state = {
        selected: {},
        vehicle: [],
        isLoading: true,
        vehicleAmounts: [0, 0, 0, 0] // Mảng lưu giá trị amount cho từng vehicle
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
            this.setState({ vehicle: await getVehicle() })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    handleTicketAmountChange = (index, amount) => {
        const updatedAmounts = [...this.state.vehicleAmounts];
        updatedAmounts[index] = amount;
        this.setState({
            vehicleAmounts: updatedAmounts,
        });
    };

    componentDidMount() {
        this.getService();
    }

    loadTicket = async (vehicleAmounts, navigation, updatedData) => {
        try {
            const ticketData = await AsyncStorage.getItem('ticket');
            if (ticketData !== null) {
                const ticket = JSON.parse(ticketData);

                const { selected } = this.state;

                // Kiểm tra và cập nhật vehicleAmounts chỉ cho các mục đã chọn
                const vehicleAmountsCopy = vehicleAmounts.map((amount, index) => {
                    const isSelected = selected[index];
                    return isSelected ? amount : 0;
                });

                // Lấy độ dài của serviceAmounts nếu lớn hơn 4 thì tồn tại vehicleAmounts
                const isVehicleAmountsExist = ticket.serviceAmounts.length;

                if (isVehicleAmountsExist > 4) {
                    // Xóa mảng vehicleAmounts trước đó
                    ticket.serviceAmounts.splice(0, vehicleAmountsCopy.length);

                    // Nối mảng mới vào ticket
                    ticket.serviceAmounts.unshift(...vehicleAmountsCopy);
                }

                else {
                    // Nối mảng mới vào ticket
                    ticket.serviceAmounts.unshift(...vehicleAmountsCopy);
                }

                // Lưu ticket cập nhật vào AsyncStorage
                await AsyncStorage.setItem('ticket', JSON.stringify(ticket));

                navigation.navigate('InfoBill', {data: updatedData})
            }
        } catch (error) {
            console.log(error);
        }
    };


    render() {
        const { selected, vehicle, vehicleAmounts } = this.state;
        const navigation = this.props.navigation
        const data = this.props.route.params.data
        const updatedData = [
            data[0], // Giữ nguyên mảng ban đầu
            data[1].concat(vehicle) // Nối mảng con với mảng vehicle
        ];
        const count = Object.keys(selected).length;

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Chọn phương tiện bạn muốn thuê?</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    <FlatList
                        data={vehicle}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item, index }) => (
                            <View style={styles.viewTag}>
                                <CheckBox
                                    value={selected[index]}
                                    onValueChange={() => this.handleSeleted(index)}
                                    style={styles.checkBox1}
                                />
                                <View pointerEvents={selected[index] ? 'auto' : 'none'} style={[styles.viewVehicleChoice, { opacity: selected[index] ? 1 : 0.5 }]}>
                                    <Image style={styles.image2} source={{ uri: item.image }} />
                                    <View style={styles.viewTT}>
                                        <Text style={styles.textType}>{item.name}</Text>
                                        <Text style={styles.textPrice}>{item.price} vnđ</Text>
                                        <AmountButton onAmountChange={(amount) => this.handleTicketAmountChange(index, amount)} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => this.loadTicket(vehicleAmounts, navigation, updatedData)}>
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