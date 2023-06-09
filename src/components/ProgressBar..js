import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

const ProgressBar = ({ value, maximum, color }) => {
  const percentage = (value / maximum) * 100;
  const progressStyle = {
    width: `${percentage}%`
  };

  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, progressStyle, {backgroundColor: color}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: '15%',
    backgroundColor: colors.main,
    borderRadius: 10,
    overflow: 'hidden'
  },
  progress: {
    height: '100%'
  }
});

export default ProgressBar;