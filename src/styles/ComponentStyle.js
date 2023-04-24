import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        height: screenHeight / 14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.text,
        borderRadius: 15,
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '3%'
    },
    text: {
        fontSize: 20,
        color: colors.black
    },
    image: {
        height: '50%',
        width: '50%',
        tintColor: colors.text
    },
    buttonBack: {
        height: screenHeight / 15,
        width: '12%',
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        zIndex: 1,
        top: '5%',
        left: '5%',
        opacity: 0.4
    },
    //////
    container1: {
        flexDirection: 'row',
        height: screenHeight / 12,
        width: '70%',
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: '2%',
        top: '2%'
    },
    img: {
        height: '80%',
        width: screenWidth / 10
    },
    textInput: {
        width: '70%',
        height: '100%',
        fontSize: 20
    }
})

export default styles;