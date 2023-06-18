import { FlatList, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { Component } from 'react'
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';

import colors from '../../../assets/colors/colors';
import ButtonBack from '../../components/ButtonBack';
import { getAllEvent } from '../../../api/service/event';
import Comment from '../../components/Comment/Comment';

const screenHeight = Dimensions.get('screen').height;

import styles from '../../styles/EventInfoStyles';

export default class InforEvent extends Component {
  state = {
    event1: [],
    isLoading: true
  };

  async getAllEvent() {
    try {
      this.setState({ event1: await getAllEvent() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getAllEvent();
  }

  formatDate(dateInput) {
    const date = new Date(dateInput);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedTime = `${day} tháng ${month}`;
    return formattedTime
  }

  render() {
    const navigation = this.props.navigation
    const { event1 } = this.state;
    const event = this.props.route.params.data;
    const randomEvents = event1.slice().sort(() => 0.5 - Math.random()).slice(0, 5);
    const currentDate = new Date();
    const startTime = new Date(event.start_time);
    const endTime = new Date(event.end_time);

    let statusText = "";

    if (currentDate >= startTime && currentDate <= endTime) {
      statusText = "Đang diễn ra";
    } else if (currentDate < startTime) {
      statusText = "Sắp diễn ra";
    } else {
      statusText = "Đã kết thúc";
    }

    return (
      <FlatList
        style={styles.big}
        data={[{ key: 'event' }]} // Thêm dữ liệu vào danh sách để tránh lỗi
        renderItem={({ item }) => (
          <View style={styles.container} >
            <ButtonBack navigation={navigation} />
            <View style={styles.viewName}>
              <Text style={styles.name}>{event.name}</Text>
              <TouchableOpacity style={styles.buttonViewmore} onPress={() => navigation.navigate('BuyTicketScreen')}>
                <Text style={styles.textName}>ĐẶT BÂY GIỜ</Text>
              </TouchableOpacity>
            </View>
            <ImageBackground style={styles.image} overlayColor='rgba(0, 0, 0, 0.8)' source={{ uri: event.image_url }} >
              <View style={styles.child} />
            </ImageBackground>
            <View style={styles.header}>
              <Text style={styles.eventType}>TRIỄN LÃM</Text>
              <Text style={styles.eventStatus}>{statusText}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.viewRow} >
                <Image style={styles.icon} source={require('../../../assets/images/calendar.png')} />
                <Text style={styles.dates}>{this.formatDate(event.start_time)} - {this.formatDate(event.end_time)}</Text>
              </View>
              <View style={styles.viewRow1} >
                <Image style={styles.icon} source={require('../../../assets/images/clock.png')} />
                <Text style={styles.dates}>{event.longTime} giờ</Text>
              </View>
              <View style={styles.viewRow1} >
                <Image style={styles.icon} source={require('../../../assets/images/price.png')} />
                {
                  parseInt(event.price) === 0 ?
                    <Text style={styles.priceText}>Miễn phí</Text> : <Text style={styles.priceText}>{event.price}0 vnđ</Text>
                }
              </View>
              <View style={styles.viewDescription}>
                <View style={styles.viewRow2} >
                  <Text style={styles.location}>Chi tiết sự kiện: </Text>
                </View>
                <Text style={styles.dates}>{event.description}</Text>
              </View>
              <View style={styles.viewDescription}>
                <View style={styles.viewRow2} >
                  <Text style={styles.location}>Địa điểm diễn ra: </Text>
                  <Text style={styles.textLocation2}>{event.location}</Text>
                </View>
                <Image style={styles.imgLocation} source={require('../../../assets/images/splash_bg.jpg')} />
              </View>
            </View>
            <View style={styles.viewDescription1}>
              <View style={styles.viewRow2} >
                <Text style={styles.location}>Bình luận khách hàng: </Text>
              </View>
              <Comment navigation={navigation} choice={true} id={event.id} />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View>
            <Text style={styles.title}>Các sự kiện khác:</Text>
            <Swiper
              height={screenHeight / 2}
              activeDotColor={colors.mainHome}
              dotColor={colors.greenLight2}
              dotStyle={{ height: 20, width: 20, borderRadius: 100 }}
              activeDotStyle={{ height: 20, width: 20, borderRadius: 100 }}
            >
              {randomEvents.map((item, index) => (
                <TouchableOpacity key={index} style={styles.viewListEvent} onPress={() => navigation.navigate('InforEvent', { data: item })}>
                  <Image style={styles.imageEvent} source={{ uri: item.image_url }} />
                  <Text style={styles.textDateEvent}>TỪ {this.formatDate(item.start_time)} - {this.formatDate(item.end_time)}</Text>
                  <View style={styles.viewTextNameEvent}>
                    <Text style={styles.textArrowEvent}>→</Text>
                    <Text style={styles.textNameEvent}>{item.name}</Text>
                  </View>
                  <Text style={styles.textInfoEvent}>{item.description_short}</Text>
                </TouchableOpacity>
              ))}
            </Swiper>
          </View>
        }
      />

    )
  }
}