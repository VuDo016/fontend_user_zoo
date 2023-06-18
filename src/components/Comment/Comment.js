import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/CommentStyles';
import colors from '../../../assets/colors/colors';
import Rating from './Rating';
import { getDanhgia_byIDAnimal, getDanhgia_byIDEvent } from '../../../api/service/comment';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      danhgia: [],
      isLoading: true,
      notAnh: []
    };
  }

  async getComment() {
    const choice = this.props.choice
    const id = this.props.id
    try {
      if (choice)
        this.setState({ danhgia: await getDanhgia_byIDEvent(id) });
      else
        this.setState({ danhgia: await getDanhgia_byIDAnimal(id) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  componentDidMount() {
    // this.props.navigation.addListener('focus', () => {
    this.getComment();
    // });
  }


  render() {
    const { danhgia, isLoading, notAnh } = this.state;
    const navigation = this.props.navigation

    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    return (
      <View style={styles.info}>
        <View style={styles.view1}>
          <View style={styles.option1}>
            <View style={styles.option1Item}>
              <Text>Tất cả</Text>
              <Text style={styles.textNumber}>({danhgia.length})</Text>
            </View>
            <View style={styles.option1Item}>
              <Text>Có hình ảnh</Text>
              <Text style={styles.textNumber}>({danhgia.length - notAnh.length})</Text>
            </View>
            <View style={styles.option1Item}>
              <Text>Sao</Text>
              <Text style={styles.textNumber}>(Tất cả)</Text>
            </View>
            <TouchableOpacity style={styles.optionReview} onPress={() => navigation.navigate('CreateNew')}>
              <Text style={styles.textReview}>Đánh giá</Text>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ?
          <View style={styles.ViewLoading}>
            <ActivityIndicator color={colors.mainHome} size={25} />
            <Text style={styles.textName}>Đang tải dữ liệu</Text>
          </View> : (
            danhgia.length === 0 ?
              <View style={styles.viewNULL}>
                <Text style={styles.textCommen}>Hiện không có đánh giá nào !!!</Text>
              </View>
              :
              <FlatList
                data={danhgia}
                initialNumToRender={10}
                renderItem={({ item }) => (
                  <View key={item.id} style={styles.view2}>
                    <Image
                      style={styles.avatar}
                      source={item.employer.avatar_url ? { uri: item.employer.avatar_url } : require('../../../assets/images/iconProfile/avatar.png')}
                    />
                    <View style={styles.viewBig}>
                      <Text style={styles.textAll}>{item.employer.name} {item.employer.first_name}</Text>
                      <View style={styles.rating}>
                        <Rating rating={item.rating} />
                      </View>
                      <Text style={styles.textCommen}>{item.comment}</Text>
                      <FlatList
                        data={item.images}
                        horizontal={true}
                        keyExtractor={({ id }, index) => index}
                        renderItem={({ item, index }) => (
                          <Image key={index} source={{ uri: item }} style={styles.ImageComen} />
                        )}
                      />
                      <Text style={styles.textAll}>{formatDate(new Date(item.created_at))}</Text>
                    </View>
                  </View>
                )}
              />
          )}
      </View>
    )
  }
}