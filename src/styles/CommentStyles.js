import { StyleSheet } from "react-native"

import colors from "../../assets/colors/colors"

//////Rating
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.text,
        textAlign: 'center',
    },
    ratingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageStyle: {
        width: 22,
        height: 22,
        resizeMode: 'cover',
    },
    ////////Comment
    info: {
        height: 550,
        width: '100%',
        backgroundColor: colors.text
    },
    view1: {
        backgroundColor: colors.white,
        paddingBottom: 10
    },
    view2: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 4,
        paddingTop: 15,
        paddingBottom: 10
    },
    option1: {
        flexDirection: 'row',
        marginHorizontal: 4,
        marginTop: 10
    },
    option1Item: {
        marginHorizontal: 3,
        width: '23.5%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionReview: {
        marginHorizontal: 3,
        backgroundColor: colors.mainHome,
        width: '23.5%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textReview: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.text
    },
    textNumber: {
        fontSize: 13,
        color: colors.whiteDark
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginHorizontal: 10
    },
    textAll: {
        fontSize: 19,
        color: colors.whiteDark
    },
    textSaleChat: {
        fontSize: 17,
        color: colors.orangeLigth,
        marginBottom: 10
    },
    // textSaleChatComen: {
    //     fontSize: 17
    // },
    textCommen: {
        fontSize: 20,
        marginBottom: 5
    },
    ImageComen: {
        height: 102,
        width: 102,
        margin: 3
    },
    // viewFeedback: {
    //     backgroundColor: colors.whiteDarkLight,
    //     width: '72%',
    //     padding: 15
    // },
    rating: {
        alignItems: "flex-start",
        marginVertical: 5
    },
    ViewLoading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textName: {
        fontSize: 17
    },
    viewBig: {
        justifyContent: 'space-between'
    },
    ///////////Create///
    header: {
        height: '13%',
        backgroundColor: colors.greenLight2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginLeft: 15
    },
    textTitle1: {
        fontSize: 25,
        marginLeft: 20
    },
    info1: {
        backgroundColor: colors.dark2,
        marginVertical: 10,
        backgroundColor: colors.text,
        padding: 20,
        alignContent: 'center'
    },
    content1: {
        backgroundColor: colors.text,
        borderWidth: 1,

    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: colors.text,
        marginVertical: 10
    },
    textArea: {
        height: 150,
        textAlignVertical: "top",
        fontSize: 20
    },
    viewBtn: {
        marginVertical: 20,
        backgroundColor: colors.mainHome,
        paddingVertical: 15,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textBtn: {
        fontSize: 20,
        color: colors.text
    },
    viewPading: {
        marginVertical: 15
    },
    textTitle2: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 5
    },
    viewBtnCosan: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: colors.mainHome,
        margin: 5,
        borderRadius: 20
    },
    viewTextCosan: {
        color: colors.mainHome,
        fontSize: 17
    }
})

export default styles