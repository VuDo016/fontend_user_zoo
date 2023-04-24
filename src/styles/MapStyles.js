import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;
const screenWidth  = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        height: screenHeight - screenHeight * 10 / 100,
        width:  screenWidth * 2.5
    },
    button: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        right: '10%',
        zIndex: 5
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
      }
})

export default styles;