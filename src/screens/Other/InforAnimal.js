import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
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
      { id: '1', title: 'Tuổi thọ', icon: require('../../../assets/images/iconAnimal/hearth.png'), text1: animal1.age.split('|')[0], text2: animal1.age.split('|')[1] },
      { id: '2', title: 'Thức ăn', icon: require('../../../assets/images/iconAnimal/plant.png'), text1: animal1.food.split('|')[0], text2: animal1.food.split('|')[1] },
      { id: '3', title: 'Môi trường', icon: require('../../../assets/images/iconAnimal/forest.png'), text1: animal1.habitat.split('|')[0], text2: animal1.habitat.split('|')[1] },
      { id: '4', title: 'Phạm vi', icon: require('../../../assets/images/iconAnimal/direction.png'), text1: animal1.area.split('|')[0], text2: animal1.area.split('|')[1] }
    ]
    let infoDetails

    if (animal1.description !== "") {
      const regex = /{([^{}]+)}/g;
      const matches = animal1.description.match(regex);
      const uniqueItems = [];

      if (matches) {
        matches.forEach((section, index) => {
          const item = section.slice(1, -1);
          const itemContent = item.split('|');

          if (itemContent.length === 2 && itemContent[0] !== "" && itemContent[1] !== "") {
            const newItem = {
              key: itemContent[0],
              value: itemContent[1]
            };

            // Kiểm tra xem newItem đã tồn tại trong uniqueItems chưa
            isDuplicate = uniqueItems.some((item) => item.key === newItem.key && item.value === newItem.value);

            if (!isDuplicate) {
              uniqueItems.push(newItem);
            }

            infoDetails = uniqueItems
          }
        });
      }
    }

    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.flastInfo}
        ListHeaderComponent={
          <>
            <View style={styles.viewSwip}>
              <ButtonBack navigation={navigation} />
              <Text style={styles.textTile3}>{animal1.name}</Text>
              <Text style={styles.textSpecies}>{animal1.species}</Text>
              <Swiper showsButtons={true}
                showsPagination={true}
                activeDotColor={colors.greenLight}
                dotColor={colors.greenDark}
                nextButton={<Image style={styles.iconArrow} source={require('../../../assets/images/arrow/right.png')} />}
                prevButton={<Image style={styles.iconArrow} source={require('../../../assets/images/arrow/left.png')} />}
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
            <Text style={styles.textInfo1}>{item.text1}</Text>
            <Text style={styles.textInfo2}>{item.text2}</Text>
          </View>
        )}
        ListFooterComponent={
          <>
            <View style={styles.viewIUCN}>
              <View style={styles.overlay}>
                <Image style={styles.imgiconIUCN} source={require('../../../assets/images/iconAnimal/iucn.png')} />
                <Text style={styles.textTitle2}>{animal1.sign}</Text>
              </View>
              <View style={styles.viewIUCNitem}> 
                <Text style={styles.textInfo1}>{animal1.title}</Text>
                <Text style={styles.textInfo2}>{animal1.detail}</Text>
              </View>
            </View>
            {
              animal1.description !== "" ?
                <View style={styles.animalListContainer1}>
                  <View style={styles.viewTitle1}>
                    <Text style={styles.textTitle2}>Chi tiết hơn!</Text>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                      infoDetails.map((item, index) => (
                        <View key={index} style={styles.infoDetail}>
                          <Image style={styles.imgInconDetail} source={require('../../../assets/images/iconAnimal/ghim.png')} />
                          <Image style={styles.imgInfoDetail} source={{ uri: animal1.images[index] }} />
                          <View style={styles.viewtextinfoDetail1}>
                            <Text style={styles.textinfoDetail1}>{item.key}</Text>
                          </View>
                          <Text style={styles.textinfoDetail}>{item.value}</Text>
                        </View>
                      ))
                    }
                  </ScrollView>
                </View>
                :
                <View></View>
            }
            <View style={styles.viewFoot}>
              <TouchableOpacity style={styles.buttonViewmore}>
                <Text style={styles.textName}>Chia sẻ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.animalListContainer}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle2}>Bạn cũng có thể thích?</Text>
              </View>
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
