import { Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/BuyTicketStyles'
import { getBillNew, getListServiceNew, getListTicketNew } from '../../../api/service/ticket';

export default class TicketsPaidScreen extends Component {
    state = {
        bill: [],
        ticket: [],
        service: [],
        more: false,
        isLoading: true,
        isQRCodeFullScreen: false,
        previousScreen: ''
    };

    async getBillNew(navigation) {
        const previousScreen = navigation.getState().routes[navigation.getState().routes.length - 2]?.name

        try {
            if (previousScreen === 'VNpayScreen') {
                this.setState({ bill: await getBillNew(), ticket: await getListTicketNew() })
                this.setState({ service: await getListServiceNew() })
            }
            else {
                const data = this.props.route.params.data

                this.setState({ bill: data['bill'], ticket: data['tickets'] })
                this.setState({ service: data['services'] })
            }
            this.setState({ previousScreen: previousScreen })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    setMore(more) {
        this.setState({ more })
    }

    async componentDidMount() {
        const navigation = this.props.navigation;
        await this.getBillNew(navigation);
    }

    formatDate(date) {
        const dateObject = new Date(date);
        const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
        return formattedDate
    }

    toggleQRCodeFullScreen = () => {
        this.setState(prevState => ({
            isQRCodeFullScreen: !prevState.isQRCodeFullScreen,
        }));
    };

    render() {
        const { bill, ticket, service, more, previousScreen, isQRCodeFullScreen } = this.state;
        const navigation = this.props.navigation;

        let listTicket = '';
        for (let i = 0; i <= ticket.length - 1; i++) {
            listTicket = listTicket + ticket[i].quantity + ' ' + ticket[i].ticket_type + ', '
        }

        let listService = [];
        for (let i = 0; i <= service.length - 1; i++) {
            listService.push(service[i].name + ' (' + service[i].quantity + ')')
        }

        return (
            <View style={styles.containerTK}>
                <Modal
                    visible={isQRCodeFullScreen}
                    transparent
                    onRequestClose={this.toggleQRCodeFullScreen}
                >
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={this.toggleQRCodeFullScreen}>
                            <View style={styles.qrCodeContainerFullScreen}>
                                {bill.qr_code ? (
                                    <Image
                                        style={styles.qrCodeFullScreen}
                                        source={{ uri: bill.qr_code }}
                                    />
                                ) : null}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>
                {
                    previousScreen === 'VNpayScreen' ?
                        <TouchableOpacity style={styles.btnIconXTK} onPress={() => navigation.navigate('HomeScreen')}>
                            <Image style={styles.iconXTK} source={require('../../../assets/images/iconX.png')} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.btnIconXTK} onPress={() => navigation.goBack()}>
                            <Image style={styles.iconXTK} source={require('../../../assets/images/iconX.png')} />
                        </TouchableOpacity>
                }
                <View style={[styles.circeTK, { left: '-1%' }]}></View>
                <View style={[styles.circeTK, { right: '-1%' }]}></View>
                <View style={styles.itemTK}>
                    <View style={styles.item1TK}>
                        {
                            bill.qr_code ? (<Image style={styles.imageLogoTK} source={{ uri: bill.qr_code }} />) : null
                        }
                        <Text style={styles.textNoteTK}>Vui lòng không chia sẻ mã này !</Text>
                    </View>
                    <View style={styles.item2TK}>
                        <Text style={styles.textBigTK}>THÔNG TIN VÉ</Text>
                        <Text style={styles.textinfoTK}>{listTicket.slice(0, listTicket.length - 2)}</Text>
                        <View style={styles.item21TK}>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Ngày đến</Text>
                                <Text style={styles.textinfoTK}>{this.formatDate(bill.visit_date)}</Text>
                            </View>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Ngày tạo</Text>
                                <Text style={styles.textinfoTK}>{this.formatDate(bill.created_at)}</Text>
                            </View>
                            {
                                more === false ?
                                    <View style={styles.itemInfoTK}>
                                        <Text style={styles.textBtnTK}>Dịch vụ</Text>
                                        {
                                            service.length > 0 ?
                                                (listService.length === 1 ?
                                                    <Text style={styles.textinfoTK}>{listService[0]}</Text>
                                                    :
                                                    <TouchableOpacity style={styles.viewRowinfoTK} onPress={() => this.setMore(true)}>
                                                        <Text style={styles.textinfoTK}>{listService[0]}</Text>
                                                        <Image style={styles.iconMoreTK} source={require('../../../assets/images/map/more.png')} />
                                                    </TouchableOpacity>

                                                )
                                                : <Text style={styles.textinfoTK}>Không có</Text>
                                        }
                                    </View>
                                    :
                                    <View style={styles.itemInfoTK}>
                                        <Text style={styles.textBtnTK}>Dịch vụ</Text>
                                        <TouchableOpacity style={styles.viewListServiceTK} onPress={() => this.setMore(false)}>
                                            {
                                                listService.map((item, index) => (
                                                    <Text key={index} style={styles.textinfoTK}>{item}</Text>
                                                ))
                                            }
                                        </TouchableOpacity>
                                    </View>
                            }
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Tổng tiền</Text>
                                {
                                    bill.total_price ? (<Text style={styles.textinfoTK}>{bill.total_price.toLocaleString()} vnđ</Text>) : null
                                }
                            </View>
                        </View>
                    </View>
                    {
                        previousScreen === 'VNpayScreen' ?
                            <TouchableOpacity style={styles.item3TK} onPress={() => navigation.navigate('TabBar')}>
                                <Text style={styles.textBtnTK}>Đến Trang Chủ</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.item3TK} onPress={this.toggleQRCodeFullScreen}>
                                <Text style={styles.textBtnTK}>Click vào để phóng to QR code</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View >
        )
    }
}