import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '5%'
    },
    header: {
        height: '30%',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: '10%',
        left: '35%',
        zIndex: 1
    },
    viewAvatar: {
        height: screenWidth / 2.5,
        width: screenWidth / 2.5,
        padding: '1%',
        backgroundColor: colors.text,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.mainHome
    },
    viewAvatar1: {
        height: 65,
        width: 65,
        padding: '1%',
        backgroundColor: colors.mainLight3,
        borderColor: colors.main,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageAvata: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    imageBackground: {
        height: screenHeight / 5.5,
        width: '100%',
        marginBottom: '30%'
    },
    viewItem: {
        marginHorizontal: screenWidth / 21,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 33,
        color: colors.greenDark,
        fontFamily: 'vinque rg',
        marginTop: '10%'
    },
    text1: {
        fontSize: 17,
        color: colors.greenDark,
        fontWeight: 'bold'
    },
    viewButton: {
        width: '100%',
        height: screenHeight / 5.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        width: '90%',
        height: '80%',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        backgroundColor: colors.text,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
    image: {
        height: 60,
        width: 60
    },
    image1: {
        height: '60%',
        width: '60%',
        tintColor: colors.pink
    },
    viewInfo: {
        justifyContent: 'space-between',
        height: '60%',
        width: '60%'
    },
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    textInfo1: {
        fontSize: 16,
        color: colors.mainDark
    },
    iconArrow: {
        height: '30%',
        width: '10%'
    },
    textMid: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '600'
    }
})

export default styles;