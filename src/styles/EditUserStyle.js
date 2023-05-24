import { StyleSheet } from "react-native"

import colors from "../../assets/colors/colors"

const styles = StyleSheet.create({
    header: {
        height: '13%',
        backgroundColor: colors.greenLight2,
        flexDirection: 'row'
    },
    btnEdit: {
        marginTop: 25,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginTop: 50,
        marginLeft: 15
    },
    iconEdit: {
        height: 30,
        width: 30
    },
    textTitle: {
        marginTop: 42,
        fontSize: 25,
        marginLeft: 20
    },
    info: {
        backgroundColor: colors.whiteDarkLight,
        marginVertical: 10
    },
    imageCover: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.dark
    },
    imageAvatar: {
        height: 130,
        width: 130,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.mainHome
    },
    viewChoose: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 3,
        backgroundColor: colors.text
    },
    viewChoose1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 18,
        marginBottom: 3,
        backgroundColor: colors.text
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    viewTitle: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textTitleInfo: {
        flex: 1,
        fontSize: 20,
        fontWeight: "400",
        marginVertical: 10
    },
    textClick: {
        flex: 1,
        fontSize: 17,
        color: colors.whiteDark,
        backgroundColor: colors.whiteDarkLight,
        height: '80%',
        paddingHorizontal: 10
    },
    textClickDate: {
        flex: 0.7,
        fontSize: 17,
        color: colors.whiteDark,
        backgroundColor: colors.whiteDarkLight,
        height: '80%',
        paddingHorizontal: 10
    },
    container2: {
        height: 150,
        paddingHorizontal: 50,
        paddingVertical: 5
    },
    btnSubmit: {
        backgroundColor: colors.mainHome,
        borderRadius: 7,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewGender: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '53%'
    },
    viewBtnGender: {
        backgroundColor: colors.whiteDarkLight,
        borderWidth: 2,
        borderColor: colors.mainHome,
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBtnGenderNot: {
        backgroundColor: colors.whiteDarkLight,
        borderWidth: 2,
        borderColor: colors.whiteDarkLight,
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textGender: {
        fontSize: 20,
        color: colors.mainHome
    },
    textGenderNot: {
        fontSize: 20,
        color: colors.orange
    }
})

export default styles