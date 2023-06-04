import React, { useState, Component } from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import styles from '../../styles/CommentStyles';

export default class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = { maxRating: [1, 2, 3, 4, 5] };
  }

  render() {

    const starImageFilled =
      '../../../assets/images/comment/ic_star_fill.png';
    const starImageCorner =
      '../../../assets/images/comment/ic_star.png';
    const startHalfFilled =
      '../../../assets/images/comment/ic_star_half.png';

    const defaultRating = this.props.rating

    const CustomRatingBar = () => {
      return (
        <View style={styles.ratingBarStyle}>
          {this.state.maxRating.map((item) => {
            return (
              <View key={item.toString()}>
                <Image
                  style={styles.imageStyle}
                  source={
                    item <= defaultRating
                      ? require(starImageFilled) 
                      : item >= defaultRating && item < defaultRating + 1
                        ? require(startHalfFilled)
                        : require(starImageCorner)
                  }
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    position: 'absolute',
                  }}>
                </View>
              </View>
            );
          })}
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <CustomRatingBar />
        </View>
      </SafeAreaView>
    );
  }
};
