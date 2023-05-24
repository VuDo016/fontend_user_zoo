import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../styles/ProfileStyles';
import colors from '../../../assets/colors/colors';

export default class ProfileScreen extends Component {
  render() {
    const navigation = this.props.navigation
    const info = [
      { id: '1', name: 'Vé của tôi', title: 'Xem lịch sử mua vé của bạn', icon: require('../../../assets/images/iconProfile/ticket.png') },
      { id: '2', name: 'Quyên góp', title: 'Dành tình yêu cho động vật - Ủng hộ Sở thú ngay!"', icon: require('../../../assets/images/iconProfile/donation.png') },
      { id: '3', name: 'Sản phẩm của tôi', title: 'Xem lịch sử mua hàng của bạn', icon: require('../../../assets/images/iconProfile/cart.png') },
      { id: '4', name: 'Danh sách yêu thích', title: 'TÌm kiếm danh sách động vật hay sự kiện yêu thích', icon: require('../../../assets/images/iconProfile/like.png') },
      { id: '5', name: 'Thông tin', title: 'Xem thông tin cá nhân của bạn', icon: require('../../../assets/images/iconProfile/info.png') },
      { id: '6', name: 'Liên hệ chúng tôi', title: 'Bạn đang gặp khó khăn - Liên hệ ngay với chúng tôi!', icon: require('../../../assets/images/iconProfile/call.png') }
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
        style={{backgroundColor: colors.text}}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.viewAvatar}>
                  <Image style={styles.imageAvata} source={require('../../../assets/images/avatar/fox.png')} />
                </View>
                <Text style={styles.text}>Vũ Đỗ</Text>
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InforUser')}>
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