import { Text, View, TouchableOpacity, Image, TextInput, FlatList, Button, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Rating } from 'react-native-ratings';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/CommentStyles';
import { create_DanhGia, uploadImageFeedback } from '../../../api/service/comment';

export default class CreateNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      content: '',
      images: []
    };
  }

  selectImageFromLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        const image = response.assets[0].uri;

        this.setState(prevState => ({
          images: [...prevState.images, image],
        }));
      }
    });
  };

  takePhoto = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        const image = response.uri;

        this.setState(prevState => ({
          images: [...prevState.images, image],
        }));
      }
    });
  };

  setValue(text) {
    this.setState({ content: text })
  }

  async createDanhgia() {
    const rating = this.state.rating
    const content = this.state.content
    const images = this.state.images

    const choice = this.props.route.params.choice
    const idObject = this.props.route.params.id

    const idUser = await AsyncStorage.getItem('user');

    let id = 0
    if (choice)
      id = await create_DanhGia(rating, content, JSON.parse(idUser), null, null, idObject)
    else
      id = await create_DanhGia(rating, content, JSON.parse(idUser), idObject, null, null)
    await uploadImageFeedback(images, 'feedback', id)
    alert('Tạo đánh giá thành công !!!')
    this.props.navigation.goBack()
  }

  setRating = (rating) => {
    this.setState({ rating: rating })
  }

  render() {
    const { content, images } = this.state

    const danhGiacosan = [
      'Chất lượng sản phẩm tuyệt vời',
      'Đóng gói sản phẩm rất tốt',
      'shop tư vấn rất nhiệt tình',
      'Giao hàng nhanh hơn dự kiến',
      'Sản phẩm giá cả hợp lý nên mua'
    ]

    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
            <Image
              style={styles.iconArrow}
              source={require('../../../assets/images/IconBack.png')}
            />
            <Text style={styles.textTitle1}>Đánh giá của bạn</Text>
          </TouchableOpacity>
          <View style={styles.info1}>
            <View>
              <Button title="Select from Library" onPress={this.selectImageFromLibrary} />
              <Button title="Take Photo" onPress={this.takePhoto} />

              {images.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={{ width: 50, height: 50 }} />
              ))}
            </View>
            <Rating
              showRating
              onFinishRating={this.setRating}
              style={{ paddingVertical: 5 }}
              startingValue={0}
              jumpValue={0.5}
              fractions={1}
            />
            <View style={styles.viewPading}>
              <Text style={styles.textTitle2}>Nội dung đánh giá:</Text>
              <View style={styles.textAreaContainer} >
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Nhập đánh giá vào đây"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText={text => this.setValue(text)}
                  value={content}
                />
              </View>
              <FlatList
                data={danhGiacosan}
                horizontal={true}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.viewBtnCosan} onPress={() => this.setValue(item)}>
                    <Text style={styles.viewTextCosan}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <TouchableOpacity style={styles.viewBtn} onPress={() => this.createDanhgia()}>
              <Text style={styles.textBtn}>Tạo đánh giá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}