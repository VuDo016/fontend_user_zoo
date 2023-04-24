import { FlatList, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';

import colors from '../../../assets/colors/colors';
import ButtonBack from '../../components/ButtonBack';

const screenHeight = Dimensions.get('screen').height;

import styles from '../../styles/EventInfoStyles';

export default class InforEvent extends Component {
  render() {
    const navigation = this.props.navigation
    const event = this.props.route.params.data;
    const info = [
      { id: '1', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/IMG_3088.jpg?itok=O6RsaU6r' },
      { id: '2', date: 'TỪ NGÀY 11 THÁNG 2 - NGÀY 15 THÁNG 11 ', name: 'Tour ngôn ngữ ký hiệu của Anh', info: 'Tour diễn ra hàng tháng. Vào những ngày BSL, sẽ có hai chuyến tham quan kéo dài 2 giờ bằng Ngôn ngữ ký hiệu của Anh. Các chuyến tham quan khám phá các khu vực khác nhau của sở thú.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '3', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '4', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '5', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' }
    ]

    return (
      <ScrollView style={styles.big}>
        <View style={styles.container} >
          <ButtonBack navigation={navigation} />
          <View style={styles.viewName}>
            <Text style={styles.name}>{event.name}</Text>
            <TouchableOpacity style={styles.buttonViewmore}>
              <Text style={styles.textName}>ĐẶT BÂY GIỜ</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground style={styles.image} source={{ uri: event.image }} >
            <View style={styles.child} />
          </ImageBackground>
          <View style={styles.header}>
            <Text style={styles.eventType}>TRIỄN LÃM</Text>
            <Text style={styles.eventStatus}>Đang mở</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.viewRow} >
              <Image style={styles.icon} source={require('../../../assets/images/calendar.png')} />
              <Text style={styles.dates}>11 tháng 2 - 15 tháng 11</Text>
            </View>
            <View style={styles.viewRow1} >
              <Image style={styles.icon} source={require('../../../assets/images/clock.png')} />
              <Text style={styles.dates}>2 giờ</Text>
            </View>
            <View style={styles.viewRow1} >
              <Image style={styles.icon} source={require('../../../assets/images/price.png')} />
              <Text style={styles.priceText}>Miễn phí</Text>
            </View>
            <View style={styles.viewDescription}>
              <Text style={styles.location}>Chi tiết sự kiện: </Text>
              <Text style={styles.dates}>
                At London Zoo, we offer dates throughout the year where we feature several
                British Sign Language-interpreted tours and talks over the course of the day.
                On BSL days, there will be two, 2-hour, tours - delivered in British Sign Language -
                exploring different areas of the Zoo, starting at 11.15 am, and 2.15 pm.
              </Text>
            </View>
            <View style={styles.viewDescription}>
              <View style={styles.viewRow2} >
                <Text style={styles.location}>Địa điểm diễn ra: </Text>
                <Text style={styles.textLocation2}>Tòa án Barclay </Text>
              </View>
              <Image style={styles.imgLocation} source={require('../../../assets/images/splash_bg.jpg')} />
            </View>
          </View>
        </View>
        <Text style={styles.title}>Các sự kiện khác:</Text>
        <Swiper
          height={screenHeight / 1.7}
          activeDotColor={colors.mainHome}
          dotColor={colors.greenLight2}
          dotStyle={{ height: 20, width: 20, borderRadius: 100 }}
          activeDotStyle={{ height: 20, width: 20, borderRadius: 100 }}
        >
          {info.map((item, index) => (
            <TouchableOpacity key={index} style={styles.viewListEvent} onPress={() => navigation.navigate('InforEvent', { data: item })}>
              <Image style={styles.imageEvent} source={{ uri: item.image }} />
              <Text style={styles.textDateEvent}>{item.date}</Text>
              <View style={styles.viewTextNameEvent}>
                <Text style={styles.textArrowEvent}>→</Text>
                <Text style={styles.textNameEvent}>{item.name}</Text>
              </View>
              <Text style={styles.textInfoEvent}>{item.info}</Text>
            </TouchableOpacity>
          ))}
        </Swiper>
      </ScrollView>

    )
  }
}