import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;

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
        height: '70%',
        width: '10%'
    },
    buttonBack: {
        flex: 1
    }
})

export default styles;