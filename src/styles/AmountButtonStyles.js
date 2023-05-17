import { StyleSheet } from 'react-native';

import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: colors.dark,
        justifyContent: 'space-between'
    },
    button: {
        height: 30,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default styles;