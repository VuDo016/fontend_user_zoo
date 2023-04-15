import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';
import CheckBox from '@react-native-community/checkbox';

import { getVehicle, getBoating, getTentRentals } from '../../../api/service/service';

export default class ChoiceServiceScreen extends Component {
    state = {
        selected: {},
        boating: [],
        tentRental: [],
        isLoading: true
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

    componentDidMount() {
        this.getService();
    }

    render() {
        const { selected, boating, tentRental } = this.state;
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
                        renderItem={({ item }) => (
                            <View style={styles.viewTag1}>
                                <CheckBox
                                    value={selected[item.id]}
                                    onValueChange={() => this.handleSeleted(item.id)}
                                    style={styles.checkBox}
                                />
                                <View pointerEvents={selected[item.id] ? 'auto' : 'none'} style={[styles.viewServiceChoice, { opacity: selected[item.id] ? 1 : 0.5 }]}>
                                    <Image style={styles.image1} source={{ uri: item.image }} />
                                    <View style={styles.viewTT}>
                                        <Text numberOfLines={2} style={styles.textType}> Thuyền {item.number_seats} chỗ</Text>
                                        <Text style={styles.textPrice}>{item.price} vnđ</Text>
                                        <AmountButton />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <FlatList
                        data={tentRental}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.viewTag1}>
                                <CheckBox
                                    value={selected[item.id + 3]}
                                    onValueChange={() => this.handleSeleted(item.id + 3)}
                                    style={styles.checkBox}
                                />
                                <View pointerEvents={selected[item.id + 3] ? 'auto' : 'none'} style={[styles.viewServiceChoice, { opacity: selected[item.id + 3] ? 1 : 0.5 }]}>
                                    <Image style={styles.image1} source={{ uri: item.image }} />
                                    <View style={styles.viewTT}>
                                        <Text style={styles.textType}>Lều {item.number_seats} người</Text>
                                        <Text style={styles.textPrice}>{item.price} vnđ</Text>
                                        <AmountButton />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChoiceVehicalScreen')}>
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