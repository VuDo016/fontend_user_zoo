import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    big: {
        backgroundColor: colors.text
    },
    container: {
        height: screenHeight * 1.45,
        backgroundColor: '#fff'
    },
    image: {
        height: screenHeight / 2,
        width: '100%',
        overflow: 'hidden',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    child: {
        flex: 1,
        backgroundColor: colors.dark2
    },
    viewName: {
        height: screenHeight / 3.5,
        width: '80%',
        justifyContent: 'space-between',
        zIndex: 1,
        position: 'absolute',
        top: '12%',
        left: '5%'
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.text
    },
    buttonViewmore: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
        width: '50%',
        backgroundColor: colors.greenLight,
        borderRadius: 20
    },
    textName: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'
    },
    viewRow: {
        flexDirection: 'row',
        height: '12%',
        width: '70%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    viewRow2: {
        flexDirection: 'row',
        height: '15%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: '10%'
    },
    viewRow1: {
        flexDirection: 'row',
        height: '12%',
        width: '25%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    icon: {
        height: 35,
        width: 35,
        tintColor: colors.mainDark
    },
    eventType: {
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        color: colors.black,
        fontWeight: 'bold',
        marginLeft: '15%'
    },
    eventStatus: {
        fontSize: 18,
        color: 'green',
    },
    content: {
        paddingTop: '2%',
        paddingHorizontal: '5%',
        height: screenHeight / 1.2,
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: '35%'
    },
    dates: {
        fontSize: 19,
        color: colors.mainDark
    },
    priceText: {
        fontSize: 19,
        color: colors.mainDark,
        marginLeft: '16%'
    },
    viewDescription: {
        height: screenHeight / 4,
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: '2%',
        paddingVertical: '5%'
    },
    location: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.black
    },
    textLocation2: {
        fontSize: 20,
        color: colors.mainHome
    },
    imgLocation: {
        height: '80%',
        width: '100%',
        borderRadius: 20
    },
    viewListEvent: {
        height: screenHeight / 2.7,
        width: '100%',
        padding: '1%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginVertical: '3%'
    },
    imageEvent: {
        height: '60%',
        width: '100%',
        borderRadius: 20
    },
    textDateEvent: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold',
        color: colors.black
    },
    viewTextNameEvent: {
        width: '80%',
        height: '14%',
        justifyContent: 'center'
    },
    textNameEvent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.mainHome
    },
    textArrowEvent: {
        fontSize: 50,
        color: colors.mainHome,
        position: 'absolute',
        left: '110%',
        bottom: 0
    },
    textInfoEvent: {
        fontSize: 17,
        color: colors.black
    }
})

export default styles;