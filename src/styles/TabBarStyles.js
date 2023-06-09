import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight  = Dimensions.get('screen').height;
const screenWidth  = Dimensions.get('screen').width;

const styles = (focused) => StyleSheet.create({
    /////tabBar////
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarIcon1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: screenWidth / 5,
        width: screenWidth / 5,
        marginBottom: '25%',
        backgroundColor: colors.mainHome,
        borderRadius: 200,
        borderWidth: 5,
        borderColor: colors.greenLight
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: focused ? colors.dark : colors.main
    },
    icon1: {
        width: 30,
        height: 30,
        tintColor: focused ? colors.dark : colors.text
    },
    text: {
        color: focused ? colors.dark : colors.main, 
        fontSize: 15,
        fontWeight: 'bold'
    },
    text1: {
        color: focused ? colors.dark : colors.text, 
        fontSize: 15,
        fontWeight: 'bold'
    },
    ////tabBack/////
    container: {
        height: screenHeight / 13,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        backgroundColor: colors.greenLight,
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'center',
        height: '100%',
    },
    imageBack: {
        height: '60%',
        width: '50%',
        marginRight: '5%'
    }
})

export default styles