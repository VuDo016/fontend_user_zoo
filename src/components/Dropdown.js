import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;

export default function Dropdown({ size, title }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const options = [
        { label: 'Động vật không xương sống', value: 1 },
        { label: 'Cá', value: 2 },
        { label: 'Động vật lưỡng cư', value: 3 },
        { label: 'Bò sát', value: 4 },
        { label: 'Các loài chim', value: 5 },
        { label: 'Động vật có vú', value: 6 }
    ];

    const handleOpenPicker = () => {
        setModalVisible(true);
    };

    const handleClosePicker = () => {
        setModalVisible(false);
    };

    const handleSelectValue = (value) => {
        setSelectedValue(value);
        setModalVisible(false);
    };

    return (
        <View style={styles(size).viewDrop}>
            <TouchableOpacity style={styles(size).dropdownButton} onPress={handleOpenPicker}>
                <Text style={styles(size).selectedValueText}>
                    {selectedValue ? options.find(option => option.value === selectedValue)?.label : title}
                </Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles(size).modalContainer}>
                    <View style={styles(size).pickerContainer}>
                        {options.map(option => (
                            <TouchableOpacity
                                key={option.value}
                                style={styles(size).optionButton}
                                onPress={() => handleSelectValue(option.value)}
                            >
                                <Text style={styles(size).optionText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles(size).cancelButton} onPress={handleClosePicker}>
                        <Text style={styles(size).cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = (size) => ({
    viewDrop: {
        backgroundColor: colors.text,
        height: size,
        width: '100%',
    },
    dropdownButton: {
        height: '100%',
        width: '100%',
        padding: 10,
        borderColor: colors.black,
        borderRadius: 15,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.text,
        alignItems: 'flex-start'
      },
    selectedValueText: {
        fontSize: 20,
        color: colors.black
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    optionButton: {
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 20
    },
    cancelButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    cancelButtonText: {
        fontSize: 18,
        color: 'red',
    },
});
