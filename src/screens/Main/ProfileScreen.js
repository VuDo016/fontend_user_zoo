import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import styles from '../../styles/ProfileStyles';
import colors from '../../../assets/colors/colors';
import { getAllAccountID } from '../../../api/service/account'
import ProgressBar from '../../components/ProgressBar.';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: [],
      expanded: false,
      animation: new Animated.Value(0)
    };
  }

  async getDataUser(cartData) {
    const idUser = await AsyncStorage.getItem('user');

    this.setState({ userDetail: await getAllAccountID(JSON.parse(idUser)) })
  }

  handlePress = () => {
    const expanded = this.state.expanded
    const animation = this.state.animation
    this.setState({ expanded: !expanded })

    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', async () => {
      await this.getDataUser()
    });
  }

  render() {
    const navigation = this.props.navigation
    const { userDetail, animation, expanded } = this.state

    const expandStyle = {
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, screenHeight / 5], // Thay đổi giá trị để điều chỉnh chiều cao khi mở rộng
      }),
    };

    const info = [
      { id: '1', name: 'Vé của tôi', title: 'Xem lịch sử mua vé của bạn', icon: require('../../../assets/images/iconProfile/ticket.png'), screem: 'HisTicket' },
      { id: '2', name: 'Quyên góp', title: 'Dành tình yêu cho động vật - Ủng hộ Sở thú ngay!"', icon: require('../../../assets/images/iconProfile/donation.png'), screem: 'InforUser' },
      { id: '3', name: 'Sản phẩm của tôi', title: 'Xem lịch sử mua hàng của bạn', icon: require('../../../assets/images/iconProfile/cart.png'), screem: 'InforUser' },
      { id: '4', name: 'Danh sách yêu thích', title: 'TÌm kiếm danh sách động vật hay sự kiện yêu thích', icon: require('../../../assets/images/iconProfile/like.png'), screem: 'InforUser' },
      { id: '5', name: 'Thông tin', title: 'Xem thông tin cá nhân của bạn', icon: require('../../../assets/images/iconProfile/info.png'), screem: 'InforUser' },
      { id: '6', name: 'Liên hệ chúng tôi', title: 'Bạn đang gặp khó khăn - Liên hệ ngay với chúng tôi!', icon: require('../../../assets/images/iconProfile/call.png'), screem: 'ContactUs' }
    ]

    const img = [
      { id: '1', name: 'Chưa có', color: colors.mainHome, image: require('../../../assets/images/iconProfile/membership.png'), priceUp: 1000000 },
      { id: '2', name: 'Bạc', color: colors.mainDark, image: require('../../../assets/images/iconProfile/membership.png'), priceUp: 5000000 },
      { id: '3', name: 'Vàng', color: colors.phaneon, image: require('../../../assets/images/iconProfile/membership.png'), priceUp: 15000000 },
      { id: '4', name: 'Kim cương', color: colors.orange, image: require('../../../assets/images/iconProfile/membership.png'), priceUp: 15000000 }
    ]

    let foundItem = colors.text
    let maxValue = 0;
    if (img.find(item => +item.id === userDetail.membership_rank_id) !== undefined) {
      foundItem = img.find(item => +item.id === userDetail.membership_rank_id).color,
        maxValue = img.find(item => +item.id === userDetail.membership_rank_id).priceUp
    }

    const currentValue = userDetail.total_purchase_amount;


    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        style={{ backgroundColor: colors.text }}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.viewAvatar}>
                  {userDetail.avatar_url ? (
                    <Image style={styles.imageAvata} source={{ uri: userDetail.avatar_url }} />
                  ) : null}
                </View>
                <Text style={styles.text}>{userDetail.name} {userDetail.first_name}</Text>
              </View>
              <Image style={styles.imageBackground} source={require('../../../assets/images/splash_bg.jpg')} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {img.map((item, index) => (
                  (
                    userDetail.membership_rank_id === +item.id ?
                      <TouchableOpacity key={index} style={[styles.viewItem, { opacity: 1 }]} onPress={() => this.handlePress()}>
                        <Image style={[styles.image, { tintColor: item.color }]} source={item.image} />
                        <Text style={[styles.text1, { color: item.color }]}>{item.name}</Text>
                      </TouchableOpacity>
                      :
                      <View key={index} style={[styles.viewItem, { opacity: 0.2 }]}>
                        <Image style={[styles.image, { tintColor: item.color }]} source={item.image} />
                        <Text style={[styles.text1, { color: item.color }]}>{item.name}</Text>
                      </View>
                  )
                ))}
              </ScrollView>
              <Animated.View style={[expandStyle, { width: '90%', paddingTop: '3%' }]}>
                {
                  expanded ?
                    <View style={[styles.viewRank, { borderColor: foundItem }]}>
                      <View style={styles.viewRowRank}>
                        <Text style={[styles.text1, { color: foundItem }]}>Chi tiêu</Text>
                        <Text style={[styles.text1, { color: foundItem }]}>Ưu đãi</Text>
                      </View>
                      <View style={styles.viewRowRank}>
                        <Text style={[styles.text1, { color: foundItem, fontWeight: '500' }]}>đ{(+currentValue).toLocaleString()}/{maxValue.toLocaleString()}</Text>
                        <Text style={[styles.text1, { color: foundItem, fontWeight: '500' }]}>giảm {userDetail.discount_percentage}%</Text>
                      </View>
                      <ProgressBar value={currentValue} maximum={maxValue} color={foundItem} />
                      {maxValue - currentValue > 0 ?
                        <Text style={[styles.text1, { color: colors.mainDark }]}>Mua thêm {(maxValue - currentValue).toLocaleString()}đ để thăng hạng</Text>
                        :
                        <Text style={[styles.text1, { color: colors.mainDark }]}>Bạn đã đạt thứ hạng cao nhất</Text>
                      }
                    </View>
                    : null
                }
              </Animated.View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screem, { data: userDetail })}>
              <View style={styles.viewAvatar1}>
                <Image style={styles.image1} source={item.icon} />
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textInfo}>{item.name}</Text>
                <Text style={styles.textInfo1}>{item.title}</Text>
              </View>
              <Image style={styles.iconArrow} source={require('../../../assets/images/arrow/arrowRight.png')} />
            </TouchableOpacity>
          </View>
        )}
      />
    )
  }
}