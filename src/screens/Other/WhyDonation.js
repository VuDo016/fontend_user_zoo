import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import ButtonBack from '../../components/ButtonBack';
import colors from '../../../assets/colors/colors';

class WhyDonation extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/iconAnimal/big-paw.png')} style={styles.container}>
                <ButtonBack navigation={this.props.navigation}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Đóng góp của bạn tạo ra sự khác biệt như thế nào</Text>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>
                            Chính sự đóng góp của bạn đã cho phép chúng tôi tiếp tục tích cực vận động cho những động vật cần giúp đỡ và cải thiện các tiêu chuẩn phúc lợi động vật trên toàn thế giới.
                        </Text>
                        <Text style={styles.subtitle}>
                            Cụ thể, bạn có thể xem đóng góp của mình đóng góp như thế nào đối với sự tốt đẹp và phúc lợi của động vật dưới đây:
                        </Text>
                    </View>
                </View>
                <View style={styles.itemsContainer}>
                    <View style={styles.item}>
                        <View style={{ alignItems: 'center', paddingVertical: '5%' }}>
                            <Text style={styles.donationSize}>3 trăm</Text>
                            <Text style={styles.donationSize}>vnđ</Text>
                        </View>
                        <Text style={styles.donationDesc}>Có thể cung cấp dinh dưỡng phù hợp cho một con gấu được giải cứu trong một ngày</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.donationSize}>1,5 triệu</Text>
                            <Text style={styles.donationSize}>vnđ</Text>
                        </View>
                        <Text style={styles.donationDesc}>Có thể cung cấp đầy đủ dịch vụ chăm sóc y tế, tiêm phòng và thiến cho chó đi lạc</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.donationSize}>2.7 triệu</Text>
                            <Text style={styles.donationSize}>vnđ</Text>
                        </View>
                        <Text style={styles.donationDesc}>Có thể đóng góp vào một tuần công thức sữa đặc biệt cho sư tử con</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.donationSize}>4.5 triệu</Text>
                            <Text style={styles.donationSize}>vnđ</Text>
                        </View>
                        <Text style={styles.donationDesc}>Có thể tài trợ toàn bộ chi phí chăm sóc và nuôi dưỡng hàng tháng của một con đười ươi mồ côi</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    infoContainer: {
        marginHorizontal: 20,
        marginTop: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.mainHome
    },
    subtitleContainer: {
        marginTop: 10,
    },
    subtitle: {
        fontSize: 17,
        color: colors.mainHome,
        fontWeight: '400'
    },
    itemsContainer: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        alignItems: 'center'
    },
    donationSize: {
        fontSize: 18,
        marginRight: 10,
        fontWeight: 'bold'
    },
    donationWave: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    donationDesc: {
        flex: 1,
        fontSize: 16,
    },
};

export default WhyDonation;