import { StyleSheet } from "react-native";

import colors from "../../assets/colors/colors";

const styles = (focused) => StyleSheet.create({
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: focused ? colors.dark : colors.main
    },
    text: {
        color: focused ? colors.dark : colors.main, 
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles