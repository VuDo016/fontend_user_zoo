import { Image, Text, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/AnimalSttyles';
import Dropdown from '../../components/Dropdown';
import DateChoice from '../../components/DateChoice';
import { getAllEvent, getEventByDate } from '../../../api/service/event';
import Comment from '../../components/Comment/Comment';

export default class EventScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      isLoading: true,
      limit: 5,
      refreshing: false
    };
  }

  refreshData() {
    this.setState({ refreshing: true });

    // Gọi lại hàm getAllEvent để lấy dữ liệu sự kiện ban đầu
    this.getAllEvent().then(() => {
      this.setState({ refreshing: false });
    });
  }

  async getAllEvent() {
    try {
      this.setState({ event: await getAllEvent() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidMount() {
    this.getAllEvent();
  }

  setLimit(size) {
    this.setState({ limit: size - 1 })
  }

  formatDate(dateInput) {
    const date = new Date(dateInput);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedTime = `NGÀY ${day} THÁNG ${month}`;
    return formattedTime
  }

  handleDateChange = async (date) => {
    // Xử lý sự kiện onChange ở đây
    this.setState({ event: await getEventByDate(date) })
  }

  render() {
    const { event, limit } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(event).length;
    const limitedData = event.slice(0, limit);

    return (
      <FlatList
        data={limitedData}
        keyExtractor={({ id }, index) => id}
        style={styles.listAllAnimal}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.refreshData()}
          />
        }
        ListHeaderComponent={
          <>
            <View style={styles.viewTest}>
              <Image style={styles.imgTitle} source={{ uri: 'https://efgcr95ic65.exactdn.com/wp-content/uploads/2021/12/LumiNature_WinnieChung_LR_2021_1635.jpg?strip=all&lossy=1&ssl=1' }} />
              <View style={styles.viewText}>
                <Text style={styles.textName}>Hãy tham gia</Text>
                <Text style={styles.textTile}>SỰ KIỆN</Text>
                <Text style={styles.textName}>
                  Tạo ra một môi trường thân thiện và đầy hứng khởi cho mọi lứa tuổi.
                </Text>
              </View>
              <View style={styles.viewRow1}>
                <DateChoice onDateChange={this.handleDateChange} />
                <Dropdown size={'40%'} title={'Lọc theo'} />
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewListEvent} onPress={() => navigation.navigate('InforEvent', { data: item })}>
            <Image style={styles.imageEvent} source={{ uri: item.image_url }} />
            <Text style={styles.textDateEvent}>TỪ {this.formatDate(item.start_time)} - {this.formatDate(item.end_time)}</Text>
            <View style={styles.viewTextNameEvent}>
              <Text style={styles.textArrowEvent}>→</Text>
              <Text style={styles.textNameEvent}>{item.name}</Text>
            </View>
            <Text style={styles.textInfoEvent}>{item.description_short}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            <View style={styles.viewFoot}>
              <Comment navigation={navigation} />
              {
                limit < (size - 1) ?
                  <TouchableOpacity style={styles.buttonViewmore} onPress={() => this.setLimit(size)}>
                    <Text style={styles.textName}>Xem tất cả</Text>
                  </TouchableOpacity>
                  :
                  <View style={styles.buttonViewmore1}>
                    <Text style={styles.textName}>Bạn đã xem tất sự kiện </Text>
                  </View>
              }
            </View>
          </>
        }
      />
    )
  }
}
