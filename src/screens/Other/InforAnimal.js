import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from '../../styles/AnimalSttyles';
import { getAllAnimal } from '../../../api/service/animal'
import colors from '../../../assets/colors/colors';
import ButtonBack from '../../components/ButtonBack';

class InforAnimal extends Component {
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
    const animal1 = this.props.route.params.data;
    const info = [
      { id: '1', title: 'Tuổi thọ', icon: require('../../../assets/images/iconAnimal/hearth.png') },
      { id: '2', title: 'Thức ăn', icon: require('../../../assets/images/iconAnimal/plant.png') },
      { id: '3', title: 'Môi trường', icon: require('../../../assets/images/iconAnimal/forest.png') },
      { id: '4', title: 'Phạm vi', icon: require('../../../assets/images/iconAnimal/direction.png') }
    ]

    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.flastInfo}
        ListHeaderComponent={
          <>
            <View style={styles.viewSwip}>
              <ButtonBack navigation = {navigation}/>
              <Text style={styles.textTile3}>{animal1.name}</Text>
              <Text style={styles.textSpecies}>{animal1.species}</Text>
              <Swiper showsButtons={true}
                showsPagination={true}
                activeDotColor={colors.greenLight}
                dotColor={colors.greenDark}
                nextButton={<Image style={styles.iconArrow} source={require('../../../assets/images/arrow/right.png')}/>}
                prevButton={<Image style={styles.iconArrow} source={require('../../../assets/images/arrow/left.png')}/>}
              >
                {animal1.images.map((image, index) => (
                  <Image key={index} style={styles.image1} source={{ uri: image }} />
                ))}
              </Swiper>
              <Text style={styles.textTitle1}>Thông tin nhanh</Text>
            </View>

          </>
        }
        renderItem={({ item }) => (
          <View style={styles.viewInfoTag}>
            <Image source={item.icon} style={styles.iconInfo} />
            <Text style={styles.textNumber}>{item.title}</Text>
            <Text style={styles.textInfo1}>15 năm trong tự nhiên</Text>
            <Text style={styles.textInfo2}>Lên đến 30 năm dưới sự chăm sóc của con người</Text>
          </View>
        )}
        ListFooterComponent={
          <>           
            <View style={styles.viewTitle1}>
              <Text style={styles.textTitle2}>Chi tiết hơn!</Text>
            </View>
            <View style={styles.animalListContainer1}>
              <View style={styles.infoDetail}>
                <Text style={styles.textinfoDetail}>Là một trong những loài lớn nhất trong họ mèo, sư tử châu Á có nhiều màu từ đen và nâu sẫm đến cát và xám. Con đực trưởng thành có thể nặng tới 190kg, trong khi con cái có thể nặng tới 120kg. Không giống như các loài sư tử khác, phần lớn bờm phát triển của chúng xuất hiện xung quanh má và hàm, nghĩa là tai của chúng luôn lộ ra. 
                  Một đặc điểm độc đáo khác của sư tử châu Á là nếp da chạy dọc theo mặt dưới của chúng. </Text>
              </View>
            </View>
            <View style={styles.viewFoot}>
              <TouchableOpacity style={styles.buttonViewmore}>
                <Text style={styles.textName}>Chia sẻ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewTitle}>
              <Text style={styles.textTitle2}>Bạn cũng có thể thích?</Text>
            </View>
            <View style={styles.animalListContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textInfo3}>Xem tất cả động vật</Text>
              </TouchableOpacity>
              <Text style={styles.textArrow}>→</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {animal.slice(0, 5).map((item) => (
                  <TouchableOpacity key={item.id} style={styles.viewList1} onPress={() => navigation.navigate('InforAnimal', { data: item })}>
                    <Image style={styles.image} source={{ uri: item.images[2] }} />
                    <View style={styles.viewName1}>
                      <Text style={styles.textName2}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </>
        }
      />
    );
  }
}

export default InforAnimal;
