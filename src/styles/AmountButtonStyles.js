import { StyleSheet } from 'react-native';

import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 20
    },
    button: {
        height: 30,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;