import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: screenHeight * 4
    },
    listAllAnimal: {
        backgroundColor: colors.text
    },
    viewList: {
        height: 200,
        width: '50%',
        padding: '1%',
        alignItems: 'center'
    },
    viewList1: {
        height: 200,
        width: screenWidth / 2,
        padding: '1%',
        alignItems: 'flex-start'
    },
    image: {
        height: '95%',
        width: '100%',
        borderRadius: 20
    },
    imgTitle: {
        width: '100%',
        height: '80%'
    },
    viewText: {
        justifyContent: 'center',
        alignItems: 'baseline',
        position: 'absolute',
        top: '30%',
        left: '5%'
    },
    textTile: {
        fontSize: 30,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold'
    },
    textName: {
        fontSize: 20,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold'
    },
    textName1: {
        fontSize: 20,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        position: 'absolute',
        bottom: '5%',
        left: '10%'
    },
    textRegion: {
        fontSize: 15,
        color: colors.mainDark
    },
    dropdown: {
        width: '100%',
        height: screenHeight / 14,
        borderRadius: 15,
        borderWidth: 1.5
    },
    viewRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        marginVertical: '6%',
        paddingHorizontal: '5%'
    },
    viewRow1: {
        height: screenHeight / 6,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginVertical: '5%'
    },
    textNumber: {
        fontSize: 18
    },
    viewSelec: {
        width: '60%'    
    },
    viewTest1: {
        height: screenHeight / 2,
        marginBottom: '5%',
        alignItems: 'center'
    },
    viewTest: {
        height: screenHeight / 2,
        marginBottom: '20%',
        alignItems: 'center'
    },
    viewFoot: {
        height: screenHeight / 6,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '5%'
    },
    buttonViewmore: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '35%',
        backgroundColor: colors.mainHome,
        borderRadius: 20
    },
    //////animalInfor/////////
    image1: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50
    },
    viewInfoTag: {
        width: '45%',
        height: screenHeight / 2.7,
        backgroundColor: colors.greenLight,
        marginHorizontal: '2%',
        marginVertical: '5%',
        borderRadius: 25,
        paddingHorizontal: '2%',
        paddingVertical: '5%'
    },
    iconInfo: {
        height: '30%',
        width: '40%',
        position: 'absolute',
        bottom: '100%',
        right: '5%'
    },
    flastInfo: {
        backgroundColor: colors.text
    },
    viewSwip: {
        height: screenHeight / 2,
        width: '100%',
        alignItems: 'center'
    },
    textTitle1: {
        fontSize: 35,
        color: colors.black,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        marginVertical: '2.5%'
    },
    textInfo1: {
        fontSize: 25,
        color: colors.black,
        fontWeight: 'bold',
        marginTop: '2%',
        marginBottom: '5%'
    },
    textInfo2: {
        fontSize: 25,
        color: colors.black
    },
    animalListContainer: {
        marginTop: '15%',
        height: screenHeight / 2.3,
        width: '100%',
        backgroundColor: colors.phaneon,
        paddingTop: '5%',
        alignItems: 'center'
    },
    animalListContainer1: {
        marginTop: '15%',
        height: screenHeight / 1.5,
        width: '100%',
        backgroundColor: colors.phaneon,
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoDetail: {
        height: '70%',
        width: '80%',
        backgroundColor: colors.text,
        padding: '10%',
        transform: [{rotate: '3deg'}]
    },
    textinfoDetail: {
        fontSize: 20,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        color: colors.black
    },
    textTitle2: {
        fontSize: 25,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold'
    },
    textInfo3: {
        fontSize: 25,
        marginVertical: '3%',
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        textDecorationLine: 'underline'
    },
    viewTitle: {
        height: '8%',
        width: '80%',
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '28%',
        zIndex: 1,
        left: '5%'
    },
    viewTitle1: {
        height: '8%',
        width: '80%',
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '90%',
        zIndex: 1,
        left: '5%'
    },
    textArrow: {
        fontSize: 50,
        color: colors.text,
        position: 'absolute',
        right: '7%',
        top: '5%'
    },
    viewName1: {
        height: '20%',
        width: '50%',
        backgroundColor: colors.orange,
        position: 'absolute',
        bottom: 0,
        left: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textName2: {
        fontSize: 20,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold'
    },
    textTile3: {
        fontSize: 40,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        position: 'absolute',
        zIndex: 1,
        left: '15%',
        bottom: '45%'
    },
    textSpecies: {
        fontSize: 20,
        color: colors.text,
        fontFamily: 'MiraikatoScriptPERSONALUSE-Bold',
        position: 'absolute',
        zIndex: 1,
        left: '15%',
        bottom: '40%'
    },
    iconArrow: {
        height: 30,
        width: 30
    },
    ////EVENT//////
    viewListEvent: {
        height: screenHeight / 2.2,
        width: '100%',
        padding: '1%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginVertical: '3%'
    },
    imageEvent: {
        height: '50%',
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
    textInfoEvent: {
        fontSize: 17,
        color: colors.black
    },
    textArrowEvent: {
        fontSize: 50,
        color: colors.mainHome,
        position: 'absolute',
        left: '110%',
        bottom: 0
    }
});

export default styles;