import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import styles from '../styles/ComponentStyle';

const DateChoice = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onDateChange(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      {show && (
        <DatePicker
          value={date}
          mode={mode}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.text}>Chọn ngày...</Text>
        <Image style={styles.image} source={require('../../assets/images/calendar.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default DateChoice;