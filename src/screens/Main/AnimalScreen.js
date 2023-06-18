import { Image, Text, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/AnimalSttyles';
import { getAllAnimal, getAnimalBySpecies } from '../../../api/service/animal'
import Dropdown from '../../components/Dropdown';
import Comment from '../../components/Comment/Comment';

export default class AnimalScreen extends Component {
  state = {
    animal: [],
    isLoading: true,
    limit: 10,
    selectedDropdownValue: '',
    refreshing: false
  };

  refreshData() {
    this.setState({ refreshing: true });

    // Gọi lại hàm getAllAnimal để lấy dữ liệu sự kiện ban đầu
    this.getAllAnimal().then(() => {
      this.setState({ refreshing: false });
    });
  }

  async getAllAnimal() {
    try {
      this.setState({ animal: await getAllAnimal() })
      this.setState({ selectedDropdownValue: '' });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  setLimit() {
    this.setState({ limit: this.state.limit + 10 })
  }

  setSelectedDropdownValue = async (value) => {
    this.setState({ selectedDropdownValue: value });
    this.setState({ animal: await getAnimalBySpecies(value) });
  }

  componentDidMount() {
    this.getAllAnimal();
  }

  render() {
    const { animal, limit, selectedDropdownValue } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(animal).length;
    const limitedData = animal.slice(0, limit);

    return (
      <FlatList
        data={limitedData}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.listAllAnimal}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.refreshData()}
          />
        }
        ListHeaderComponent={
          <>
            <View style={styles.viewTest1}>
              <Image style={styles.imgTitle} source={require('../../../assets/images/titleAnimal.jpg')} />
              <View style={styles.viewText}>
                <Text style={styles.textName}>Gặp gỡ</Text>
                <Text style={styles.textTile}>ĐỘNG VẬT</Text>
                <Text style={styles.textName}>Khám phá các loài động vật & môi trường sống tuyệt đẹp tại sở thú</Text>
              </View>
              <View style={styles.viewRow}>
                <Text style={styles.textNumber}>{size} Động Vật</Text>
                <View style={styles.viewSelec}>
                  <Dropdown
                    size={'100%'}
                    title={'Loại động vật'}
                    selectedValue={selectedDropdownValue}
                    setSelectedValue={this.setSelectedDropdownValue}
                  />
                </View>
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('InforAnimal', { data: item })}>
            <Image style={styles.image} source={{ uri: item.images[0] }} />
            <Text style={styles.textName1}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            <View style={styles.viewFoot}>
              {/* <Comment navigation={navigation} /> */}
              <Text style={styles.textNumber}>Bạn đã xem {limit < size ? limit : size} trên {size} động vật</Text>
              {
                limit < size ?
                  <TouchableOpacity style={styles.buttonViewmore} onPress={() => this.setLimit()}>
                    <Text style={styles.textName}>Xem thêm</Text>
                  </TouchableOpacity>
                  :
                  <View style={styles.buttonViewmore1}>
                    <Text style={styles.textName}>Bạn đã xem tất cả động vật</Text>
                  </View>
              }
            </View>
          </>
        }
      />
    )
  }
}
