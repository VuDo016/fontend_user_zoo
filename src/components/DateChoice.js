import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

import styles from '../styles/ComponentStyle';

export default class DateChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: 'date',
      show: false,
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.show && (
          <DatePicker
            value={this.state.date}
            mode={this.state.mode}
            display="default"
            onChange={this.setDate}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={this.datepicker}>
          <Text style={styles.text}>Chọn ngày...</Text>
          <Image style={styles.image} source={require('../../assets/images/calendar.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
