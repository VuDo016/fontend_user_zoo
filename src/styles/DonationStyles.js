import { StyleSheet, Dimensions } from "react-native"

import colors from "../../assets/colors/colors"
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: screenHeight * 0.05,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: screenHeight * 0.02,
        marginTop: screenHeight * 0.03,
    },
    subtitle1: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    formContainer: {
        fontSize: 20,
        marginHorizontal: screenWidth * 0.05,
        paddingVertical: screenHeight * 0.02,
        backgroundColor: '#f0f0f0',
        borderRadius: screenHeight * 0.01,
    },
    fieldTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: screenHeight * 0.01,
    },
    inputContainer: {
        marginBottom: screenHeight * 0.02,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: screenHeight * 0.005,
        paddingHorizontal: screenWidth * 0.02,
        backgroundColor: colors.text,
        paddingLeft: '5%',
        fontSize: 17
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: screenHeight * 0.01,
    },
    currencyLabel: {
        fontWeight: 'bold',
        marginRight: screenWidth * 0.01,
    },
    selectContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: screenHeight * 0.005,
        paddingHorizontal: screenWidth * 0.02,
    },
    selectGroup: {
        marginBottom: screenHeight * 0.02,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: screenHeight * 0.01,
    },
    radioButtonLabel: {
        fontSize: 17,
        color: 'black'
    },
    button: {
        backgroundColor: colors.mainHome,
        paddingVertical: screenHeight * 0.02,
        borderRadius: screenHeight * 0.01,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: screenHeight * 0.018,
        fontWeight: 'bold',
        fontSize: 16
    },
    radioButton: {
        height: 'auto',
        with: '20%',
        borderWidth: 2,
        borderColor: '#ccc',
        padding: '5%',
        marginVertical: '5%',
        marginRight: '5%',
        borderRadius: 5,
        backgroundColor: colors.text
    },
    radioButtonSelected: {
        borderColor: colors.orange
    }
})

export default styles