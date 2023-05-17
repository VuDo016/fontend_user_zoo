import { Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import styles from '../styles/AmountButtonStyles';

export default class AmountButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0, // Giá trị số ban đầu
    };
  }

  handleIncrease = () => {
    if (this.state.amount < 10) {
      this.setState((prevState) => ({
        amount: prevState.amount + 1,
      }), () => {
        this.props.onAmountChange(this.state.amount);
      });
    }
  };

  handleDecrease = () => {
    if (this.state.amount > 0) {
      this.setState((prevState) => ({
        amount: prevState.amount - 1,
      }), () => {
        this.props.onAmountChange(this.state.amount);
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.handleDecrease}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>{this.state.amount.toString().padStart(2, '0')}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleIncrease}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
