import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/ProfileStyles';
import colors from '../../../assets/colors/colors';
import { getAllAccountID } from '../../../api/service/account'

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: [],
      token: ''
    };
  }

  async getDataUser(cartData) {
    const idUser = await AsyncStorage.getItem('user');
    const token = await AsyncStorage.getItem('token');

    this.setState({ userDetail: await getAllAccountID(JSON.parse(idUser), JSON.parse(token)) })
    this.setState({ token: JSON.parse(token) })
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', async () => {
      await this.getDataUser()
    });
  }

  render() {
    const navigation = this.props.navigation
    const { userDetail, token } = this.state

    const info = [
      { id: '1', name: 'Vé của tôi', title: 'Xem lịch sử mua vé của bạn', icon: require('../../../assets/images/iconProfile/ticket.png'), screem: 'HisTicket' },
      { id: '2', name: 'Quyên góp', title: 'Dành tình yêu cho động vật - Ủng hộ Sở thú ngay!"', icon: require('../../../assets/images/iconProfile/donation.png'), screem: 'InforUser' },
      { id: '3', name: 'Sản phẩm của tôi', title: 'Xem lịch sử mua hàng của bạn', icon: require('../../../assets/images/iconProfile/cart.png'), screem: 'InforUser' },
      { id: '4', name: 'Danh sách yêu thích', title: 'TÌm kiếm danh sách động vật hay sự kiện yêu thích', icon: require('../../../assets/images/iconProfile/like.png'), screem: 'InforUser' },
      { id: '5', name: 'Thông tin', title: 'Xem thông tin cá nhân của bạn', icon: require('../../../assets/images/iconProfile/info.png'), screem: 'InforUser' },
      { id: '6', name: 'Liên hệ chúng tôi', title: 'Bạn đang gặp khó khăn - Liên hệ ngay với chúng tôi!', icon: require('../../../assets/images/iconProfile/call.png'), screem: 'InforUser' }
    ]

    const img = [
      { id: '1', name: 'Chưa có', color: colors.mainHome, image: require('../../../assets/images/iconProfile/membership.png') },
      { id: '2', name: 'Bạc', color: colors.mainDark, image: require('../../../assets/images/iconProfile/membership.png') },
      { id: '3', name: 'Vàng', color: colors.phaneon, image: require('../../../assets/images/iconProfile/membership.png') },
      { id: '4', name: 'Kim cương', color: colors.orange, image: require('../../../assets/images/iconProfile/membership.png') }
    ]

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
                  <View key={index} style={styles.viewItem}>
                    <Image style={[styles.image, { tintColor: item.color }]} source={item.image} />
                    <Text style={[styles.text1, , { color: item.color }]}>{item.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screem, { data: userDetail, token: token })}>
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