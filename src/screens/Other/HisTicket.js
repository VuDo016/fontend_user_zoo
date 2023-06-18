import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles1 from '../../styles/BuyTicketStyles'
import styles from '../../styles/InforUserStyle'
import { getBillById } from '../../../api/service/ticket';
import colors from '../../../assets/colors/colors';

export default class HisTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
      listTicket: []
    };
  }

  async getData() {
    this.setState({ listTicket: await getBillById(this.state.data.id) })
  }

  componentDidMount() {
    this.getData()
  }

  handleCancleBill(date, item) {
    if (date > 0 && !item.isCancel) {
      const data = {
        date: date,
        totalPrice: item.total_price,
        id: item.id
      }
      this.props.navigation.navigate('RefundScreen', { data: data })
    }
    else if (date > 0 && item.isCancel) {
      alert('Hoá đơn đã bị huỷ trước đó !')
    }
    else {
      alert('Hoá đơn đã đã bị quá hạn !')
    }
  }

  render() {
    const { data, listTicket } = this.state
    const navigation = this.props.navigation;

    const calDaysRemain = (visitDate) => {
      const currentDate = new Date();
      const targetDate = new Date(visitDate);

      // Lấy số milliseconds từ ngày hiện tại đến ngày tham quan
      const timeDiff = targetDate.getTime() - currentDate.getTime();

      // Chuyển milliseconds sang số ngày
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      let message;
      if (daysRemaining > 0) {
        message = `Còn ${daysRemaining} ngày nữa`;
      } else if (daysRemaining === 0) {
        message = "Hôm nay";
      } else {
        message = "Đã qua";
      }

      return message
    }

    const getDayRemaining = (visitDate) => {
      const currentDate = new Date();
      const targetDate = new Date(visitDate);

      // Lấy số milliseconds từ ngày hiện tại đến ngày tham quan
      const timeDiff = targetDate.getTime() - currentDate.getTime();

      // Chuyển milliseconds sang số ngày
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return daysRemaining
    }

    const setStatus = (statusItem) => {
      let status = [colors.text, 'null']

      if (statusItem === 0) {
        status = [colors.orange, 'Đã thanh toán']
      }
      else if (statusItem === 1) {
        status = [colors.greenLight, 'Đã kích hoạt']
      }
      else {
        status = [colors.dark2, 'Đã huỷ']
      }

      return status
    }

    const getText = (item) => {
      let numberTS = ''
      item['services'].length === 0 ?
        numberTS = item['tickets'].length + ' vé'
        :
        numberTS = item['tickets'].length + ' vé x ' + item['services'].length + ' dịch vụ'
      return numberTS
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
            <Image
              style={styles.iconArrow}
              source={require('../../../assets/images/IconBack.png')}
            />
            <Text style={styles.textTitle}>Lịch sử mua vé</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.info, { backgroundColor: 'red' }]}>
          <FlatList
            data={listTicket}
            keyExtractor={({ id }, index) => index}
            style={styles1.flastHis}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles1.itemHis} key={index} onPress={() => navigation.navigate('TicketsPaidScreen', { data: item })}>
                <View style={[{ height: '35%' }, styles1.itemHis1]}>
                  <Text style={[styles1.textTitleHis, { fontWeight: '500' }]}>#{item['bill'].id}</Text>
                  <View style={styles1.viewheadHis}>
                    <Text style={styles1.textTitleHis}>{calDaysRemain(item['bill'].visit_date)}</Text>
                    <Text style={styles1.textTitleHis1}>đến ngày tham quan</Text>
                  </View>
                </View>
                <View style={[{ height: '35%' }, styles1.itemHis1]}>
                  <View style={[styles1.statusHis1, { backgroundColor: setStatus(item['bill'].status)[0] }]}>
                    <Text style={[styles1.textTitleHis1, { color: colors.text, fontWeight: 'bold' }]}>{setStatus(item['bill'].status)[1]}</Text>
                  </View>
                  <Text style={styles1.textTitleHis}>{getText(item)}</Text>
                </View>
                <View style={[{ height: '30%', borderTopWidth: 1, borderStyle: 'dashed' }, styles1.itemHis1]}>
                  <Text style={styles1.textBigHis}>Tổng tiền:</Text>
                  <Text style={styles1.textTitleHis}>{item['bill'].total_price.toLocaleString()} vnđ</Text>
                </View>
                <TouchableOpacity style={styles.viewCancle} onPress={() => this.handleCancleBill(getDayRemaining(item['bill'].visit_date), item['bill'])}>
                  <Text style={styles1.textTitleHis}>Yêu cầu huỷ đơn</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    )
  }
}