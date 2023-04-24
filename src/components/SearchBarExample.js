import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { SearchBar, Button, Image } from 'react-native-elements';

import styles from '../styles/ComponentStyle';

const SearchBarExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchPress = () => {
    setShowSearchBar(true);
  };

  const handleCancelPress = () => {
    setSearchQuery('');
    setShowSearchBar(false);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleTouchWithoutFeedback = () => {
    setShowSearchBar(false);
  }

  return (
    <TouchableWithoutFeedback onPress={handleTouchWithoutFeedback}>
      <TouchableOpacity onPress={handleSearchPress} style={styles.container1}>
        {
          showSearchBar ?
            <TextInput style={styles.textInput} placeholder='Tìm kiếm.. ' />
            :
            <View style={styles.textInput} ></View>
        }
        <Image style={styles.img} source={require('../../assets/images/map/search.png')} />
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

export default SearchBarExample;