import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/AnimalSttyles';
import { getAllAnimal } from '../../../api/service/animal'
import Dropdown from '../../components/Dropdown';

export default class AnimalScreen extends Component {
  state = {
    animal: [],
    isLoading: true,
  };

  async getAllAnimal() {
    try {
      this.setState({ animal: await getAllAnimal() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getAllAnimal();
  }

  render() {
    const { animal } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(animal).length;

    return (
      <FlatList
        data={animal}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.listAllAnimal}
        ListHeaderComponent={
          <>
            <View style={styles.viewTest}>
              <Image style={styles.imgTitle} source={require('../../../assets/images/titleAnimal.jpg')} />
              <View style={styles.viewText}>
                <Text style={styles.textName}>Gặp gỡ</Text>
                <Text style={styles.textTile}>ĐỘNG VẬT</Text>
                <Text style={styles.textName}>Khám phá các loài động vật & môi trường sống tuyệt đẹp tại sở thú</Text>
              </View>
              <View style={styles.viewRow}>
                <Text style={styles.textNumber}>{size} Động Vật</Text>
                <Dropdown />
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('InforAnimal', { data: item })}>
            <Image style={styles.image} source={{ uri: item.images[2] }} />
            <Text style={styles.textName1}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            <View style={styles.viewFoot}>
              <Text style={styles.textNumber}>Bạn đã xem 40 trên 82 động vật</Text>
              <TouchableOpacity style={styles.buttonViewmore}>
                <Text style={styles.textName}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    )
  }
}
