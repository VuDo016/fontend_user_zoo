import { Text, View, TouchableOpacity, Image, ScrollView, Linking, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/EditUserStyle.js'
import colors from '../../../assets/colors/colors.js';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            subject: '',
            email: ''
        };
    }

    setValueMessage(text) {
        this.setState({ message: text })
    }

    setValueSubject(text) {
        this.setState({ subject: text })
    }

    setValueEmail(text) {
        this.setState({ email: text })
    }

    render() {
        const { message, email, subject } = this.state

        const info = [
            { icon: require('../../../assets/images/contact/phone.png'), text: '+65 6269 3411', url: `tel:${'+65 6269 3411'}` },
            { icon: require('../../../assets/images/contact/mail.png'), text: 'enquiry@mandai.com', url: `mailto:support@me.com?subject=&body=` },
            { icon: require('../../../assets/images/contact/map.png'), text: '80 Mandai Lake Road, Singapore, Singapore', url: `https://www.google.com/maps/search/?api=1&query=80 Mandai Lake Road Singapore 729826` }
        ]

        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../assets/images/IconBack.png')}
                    />
                    <Text style={styles.textTitle}>Hỗ trợ khách hàng</Text>
                </TouchableOpacity>
                <View style={styles.infoChat}>
                    {
                        info.map((item, index) => (
                            <TouchableOpacity style={styles.itemChat} key={index} onPress={() => Linking.openURL(item.url)}>
                                <Image style={styles.iconChat} source={item.icon} />
                                <Text style={styles.textChat}>{item.text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    <View style={styles.viewTextChat}>
                        <TextInput style={styles.textInputChat} placeholderTextColor="grey" onChangeText={text => this.setValueSubject(text)} placeholder='Tiêu đề' value={subject} />
                        <TextInput
                            style={styles.textInputChat}
                            placeholder="Tin nhắn"
                            placeholderTextColor="grey"
                            onChangeText={text => this.setValueMessage(text)}
                            value={message} />
                    </View>
                    <Button title="Gửi SMS" onPress={() => Linking.openURL(`mailto:support@me.com?subject=${subject}&body=${message}`)} color={colors.mainHome} />
                    <View style={{ height: 10 }}></View>
                    <Button title="Gửi Mail" onPress={() => Linking.openURL(`sms:${'+65 6269 3411'}${'?'}body=${subject + ':\n' + message}`)} />
                </View>
            </ScrollView>
        )
    }
}