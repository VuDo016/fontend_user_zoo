import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';
import CheckBox from '@react-native-community/checkbox';

import { getVehicle, getBoating, getTentRentals } from '../../../api/service/service';

export default class ChoiceServiceScreen extends Component {

    render() {
        const navigation = this.props.navigation

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
                            <Text style={styles.value}>10/04/2023</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Danh sách vé đã mua:</Text>
                            <View style={styles.ticketList}>
                                <View style={styles.ticket}>
                                    <Text style={styles.ticketName}>Vé người lớn</Text>
                                    <Text style={styles.ticketPrice}>100.000 VND</Text>
                                    <Text style={styles.ticketQuantity}>x 2</Text>
                                </View>
                                <View style={styles.ticket}>
                                    <Text style={styles.ticketName}>Vé trẻ em</Text>
                                    <Text style={styles.ticketPrice}>50.000 VND</Text>
                                    <Text style={styles.ticketQuantity}>x 1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Danh sách dịch vụ đã chọn:</Text>
                            <View style={styles.serviceList}>
                                <View style={styles.service}>
                                    <Text style={styles.serviceName}>Chụp ảnh cùng với động vật</Text>
                                    <Text style={styles.servicePrice}>50.000 VND</Text>
                                    <Text style={styles.serviceQuantity}>x 1</Text>
                                </View>
                                <View style={styles.service}>
                                    <Text style={styles.serviceName}>Cho ăn thú</Text>
                                    <Text style={styles.servicePrice}>20.000 VND</Text>
                                    <Text style={styles.serviceQuantity}>x 2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Phương thức thanh toán:</Text>
                            <Text style={styles.value}>BIDV</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InfoBill')}>
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