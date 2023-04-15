import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';

import styles from '../../styles/BuyTicketStyles';
import colors from '../../../assets/colors/colors';

export default class BuyTicketScreen extends Component {
    state = {
        selectedDate: ''
    };

    componentDidMount() {
        LocaleConfig.locales['vi'] = {
            monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            monthNamesShort: ['Th.1', 'Th.2', 'Th.3', 'Th.4', 'Th.5', 'Th.6', 'Th.7', 'Th.8', 'Th.9', 'Th.10', 'Th.11', 'Th.12'],
            dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
            dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            today: 'Hôm nay'
        };
        LocaleConfig.defaultLocale = 'vi';
    }

    onDayPress = (selectedDate) => {
        this.setState({ selectedDate });
    };

    render() {
        const { selectedDate } = this.state;
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <View style={styles.item1}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.iconX} source={require('../../../assets/images/iconX.png')} />
                    </TouchableOpacity>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Hãy bắt đầu hành trình của bạn!</Text>
                        <Text style={styles.text}>Khi nào bạn đến ?</Text>
                    </View>
                </View>
                <View style={styles.item2}>
                    <Calendar
                        onDayPress={(day) => this.onDayPress(day.dateString)}
                        markedDates={{
                            [selectedDate]: { selected: true, disableTouchEvent: true }
                        }}
                        style={styles.calendar}
                        // Specify theme properties to override specific styles for calendar parts. Default = {}
                        theme={{
                            calendarBackground: colors.text,
                            textSectionTitleDisabledColor: colors.dark,
                            selectedDayBackgroundColor: colors.dark,
                            selectedDayTextColor: colors.text,
                            todayTextColor: colors.dark,
                            dayTextColor: colors.black,
                            textDisabledColor: colors.text,
                            arrowColor: colors.mainDark,
                            monthTextColor: colors.mainDark,
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: 'bold',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: 'bold',
                            textDayFontSize: 18,
                            textMonthFontSize: 25,
                            textDayHeaderFontSize: 20
                        }}
                    />
                </View>
                <View style={styles.item3}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChoiceTypeTicket', {dateVisit: selectedDate})}>
                        <Text style={styles.textBtn}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}