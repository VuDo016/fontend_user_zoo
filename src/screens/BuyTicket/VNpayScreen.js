import React, { Component } from 'react';
import { View, Text } from 'react-native';
import urlParse from 'url-parse';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createBill, createService, createTicket, updateQRcode } from '../../../api/service/ticket';
import { updateRank } from '../../../api/service/account';

export default class VNpayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentResultUrl: null,
      ticket: {}
    };
  }

  loadTicket = async () => {
    try {
      const ticketData = await AsyncStorage.getItem('ticket');
      const userData = await AsyncStorage.getItem('user');
      if (ticketData !== null) {
        const ticket = JSON.parse(ticketData);
        const user = JSON.parse(userData);
        ticket.user = user
        this.setState({ ticket });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleNavigationStateChange = (navState) => {
    const { url } = navState;
    if (url.includes('api/payment/vnpay_return')) {
      this.setState({ paymentResultUrl: url });
    }
  };

  componentDidMount() {
    this.loadTicket();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.paymentResultUrl !== this.state.paymentResultUrl) {
      const { paymentResultUrl } = this.state;
      if (paymentResultUrl) {
        const parsedUrl = urlParse(paymentResultUrl, true);
        const { vnp_ResponseCode, vnp_TransactionStatus } = parsedUrl.query;

        if (vnp_ResponseCode === '00' && vnp_TransactionStatus === '00') {
          const ticket = this.state.ticket

          const idBill = await createBill(ticket.totalAmount, ticket.totalPrice, ticket.date, ticket.user)

          const qrCode = {
            idBill: idBill,
            totalAmount: ticket.totalAmount, totalPrice: ticket.totalPrice,
            date: ticket.date, userId: ticket.user
          }

          await updateQRcode(qrCode, ticket.user)

          await Promise.all(ticket.ticketAmounts.map(async (item, index) => {
            if (item > 0) {
              await createTicket(item, index + 1, idBill);
            }
          }));

          await Promise.all(ticket.serviceAmounts.map(async (item, index) => {
            if (item > 0) {
              await createService(item, index + 1, idBill);
            }
          }));

          await updateRank(ticket.user)

          this.props.navigation.navigate('TicketsPaidScreen')
          alert('Giao dịch thành công')
        } else {
          this.props.navigation.goBack()
          alert('Giao dịch thất bại')
        }
      }
    }
  }

  render() {
    const { paymentResultUrl, ticket } = this.state;
    const url = 'http://192.168.1.154:3000/api/payment/create_payment_url/' + ticket.totalPrice

    return (
      <View style={{ flex: 1 }}>
        {!paymentResultUrl ? (
          <WebView
            source={{ uri: url }}
            onNavigationStateChange={this.handleNavigationStateChange}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
          />
        ) : (
          <View>
            <Text>Payment Result Screen</Text>
          </View>
        )}
      </View>
    );
  }
}
