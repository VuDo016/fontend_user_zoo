import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles/BuyTicketStyles';
import AmountButton from '../../components/AmountButton';

export default class ChoiceTypeTicket extends Component {
    render() {
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Chọn loại vé bạn muốn mua?</Text>
                        <Text style={styles.text}>Nhập số lượng cần mua?</Text>
                    </View>
                </View>
                <View style={styles.item2s2}>
                    <View style={styles.viewItemChoice}>
                        <Image style={styles.image} source={require('../../../assets/images/man.png')} />
                        <View style={styles.viewTT}>
                            <Text style={styles.textType}>Vé người lớn</Text>
                            <Text style={styles.textPrice}>80.000 vnđ</Text>
                            <AmountButton />
                        </View>
                    </View>
                    <View style={styles.viewItemChoice}>
                        <Image style={styles.image} source={require('../../../assets/images/childen.png')} />
                        <View style={styles.viewTT}>
                            <Text style={styles.textType}>Vé trẻ em</Text>
                            <Text style={styles.textPrice}>60.000 vnđ</Text>
                            <AmountButton />
                        </View>
                    </View>
                    <View style={styles.viewItemChoice}>
                        <Image style={styles.image} source={require('../../../assets/images/baby.png')} />
                        <View style={styles.viewTT}>
                            <Text style={styles.textType}>Vé trẻ em</Text>
                            <Text style={styles.textPrice}>Miễn phí</Text>
                            <AmountButton />
                        </View>
                    </View>
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChoiceServiceScreen')}>
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