import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/AnimalSttyles';
import Dropdown from '../../components/Dropdown';
import DateChoice from '../../components/DateChoice';

export default class EventScreen extends Component {
  render() {
    const navigation = this.props.navigation
    const info = [
      { id: '1', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/IMG_3088.jpg?itok=O6RsaU6r' },
      { id: '2', date: 'TỪ NGÀY 11 THÁNG 2 - NGÀY 15 THÁNG 11 ', name: 'Tour ngôn ngữ ký hiệu của Anh', info: 'Tour diễn ra hàng tháng. Vào những ngày BSL, sẽ có hai chuyến tham quan kéo dài 2 giờ bằng Ngôn ngữ ký hiệu của Anh. Các chuyến tham quan khám phá các khu vực khác nhau của sở thú.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '3', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '4', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' },
      { id: '5', date: 'TỪ NGÀY 15 THÁNG 2 - NGÀY 8 THÁNG 11 ', name: 'Chuyến tham quan được mô tả bằng âm thanh', info: 'Các chuyến tham quan có hướng dẫn hàng tháng cho những người khiếm thị hoặc khiếm thị.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2023-01/john-for-web.jpg?itok=8LyyITWk' }
    ]

    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        style={styles.listAllAnimal}
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
                <DateChoice />
                <Dropdown />
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewListEvent} onPress={() => navigation.navigate('InforEvent', { data: item })}>
            <Image style={styles.imageEvent} source={{ uri: item.image }} />
            <Text style={styles.textDateEvent}>{item.date}</Text>
            <View style={styles.viewTextNameEvent}>
              <Text style={styles.textArrowEvent}>→</Text>
              <Text style={styles.textNameEvent}>{item.name}</Text>
            </View>
            <Text style={styles.textInfoEvent}>{item.info}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            <View style={styles.viewFoot}>
              <TouchableOpacity style={styles.buttonViewmore}>
                <Text style={styles.textName}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    )
  }
}
