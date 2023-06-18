import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions, StyleSheet, ImageBackground } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import ButtonBack from '../../components/ButtonBack';
import colors from '../../../assets/colors/colors';
import { reqCancel } from '../../../api/service/ticket';

class RefundScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    // Hàm xử lý khi nhấn nút Huỷ đơn hàng
    handleCancelOrder = () => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn huỷ không?',
            [
                { text: 'Không', style: 'cancel' },
                { text: 'Có', onPress: this.cancelOrder },
            ]
        );
    };

    // Hàm xử lý huỷ đơn hàng
    cancelOrder = async () => {
        const data = this.props.route.params.data
        await reqCancel(data.id, data.date)
        Alert.alert('Thành công', 'Tiền của bạn sẽ được hoàn lại trong vòng 24h.');
    };

    // Hàm tính toán số tiền hoàn lại dựa trên số ngày huỷ trước
    calculateRefund = () => {
        const data = this.props.route.params.data
        let refundPercentage = 0;
        const cancellationDays = data.date

        if (cancellationDays >= 7) {
            refundPercentage = 100;
        } else if (cancellationDays >= 3 && cancellationDays < 7) {
            refundPercentage = 50;
        } else if (cancellationDays >= 1 && cancellationDays < 3) {
            refundPercentage = 20;
        } else {
            refundPercentage = 0;
        }

        const totalPrice = data.totalPrice; // Giá trị đơn hàng ban đầu
        const refundAmount = (totalPrice * refundPercentage) / 100;

        return refundAmount;
    };

    renderRefundPolicy = () => {
        return (
            <View style={styles.refundContainer}>
                <Text style={styles.heading}>Quy định hoàn tiền:</Text>
                <Text style={styles.refundText}>- Huỷ trước 7 ngày: Hoàn trả 100%</Text>
                <Text style={styles.refundText}>- Huỷ từ 3 đến 6 ngày: Hoàn trả 50%</Text>
                <Text style={styles.refundText}>- Huỷ từ 1 đến 2 ngày: Hoàn trả 20%</Text>
                <Text style={styles.refundText}>- Huỷ trong 24 giờ hoặc ít hơn: Không hoàn trả</Text>
            </View>
        );
    };

    render() {
        const refundAmount = this.calculateRefund();

        return (
            <ImageBackground source={require('../../../assets/images/iconAnimal/big-paw.png')} style={styles.container}>
                <ButtonBack navigation={this.props.navigation} />
                {this.renderRefundPolicy()}
                <Text style={styles.refundText}>Số tiền hoàn lại: {refundAmount.toLocaleString()} vnđ</Text>
                <TouchableOpacity style={styles.cancelButtonView} onPress={this.handleCancelOrder}>
                    <Text style={styles.cancelButton} >Yêu cầu hoàn tiền</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    refundContainer: {
        marginVertical: screenHeight * 0.05,
        paddingHorizontal: screenWidth * 0.05,
        marginTop: '25%',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.black
    },
    refundText: {
        fontSize: 20,
        marginBottom: 5,
    },
    cancelButtonView: {
        backgroundColor: colors.text,
        padding: '4%',
        marginTop: screenHeight * 0.05,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.dark2

    },
    cancelButton: {
        color: colors.black,
        fontSize: 17,
        fontWeight: 'bold'
    },
});

export default RefundScreen;