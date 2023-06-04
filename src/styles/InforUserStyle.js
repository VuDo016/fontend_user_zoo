import { StyleSheet } from "react-native"

import colors from "../../assets/colors/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: colors.greenLight2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnEdit: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginLeft: 15
    },
    iconEdit: {
        height: 30,
        width: 30,
        tintColor: colors.greenDark
    },
    textTitle: {
        fontSize: 25,
        marginLeft: 20
    },
    info: {
        flex: 7,
        backgroundColor: colors.whiteDarkLight
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
        padding: 10,
        marginVertical: 3,
        backgroundColor: colors.text
    },
    viewChoose1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        marginTop: 18,
        marginBottom: 3,
        backgroundColor: colors.text
    },
    viewTitle: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textTitleInfo: {
        fontSize: 20,
        fontWeight: "400"
    },
    textClick: {
        fontSize: 20,
        color: colors.black
    },
    viewChangePass: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        marginTop: 18,
        marginBottom: 3,
        backgroundColor: colors.text,
        borderWidth: 1,
        borderColor: colors.mainHome
    },
    textChangePass: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.mainHome
    },
})

export default styles