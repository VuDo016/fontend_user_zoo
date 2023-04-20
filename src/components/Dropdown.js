import React, { useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import styles from '../styles/AnimalSttyles';

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);
    const [items, setItems] = useState([
        { label: 'Động vật không xương sống', value: 1 },
        { label: 'Cá', value: 2 },
        { label: 'Động vật lưỡng cư', value: 3 },
        { label: 'Bò sát', value: 4 },
        { label: 'Các loài chim', value: 5 },
        { label: 'Động vật có vú', value: 6 }
    ]);

    return (
        <DropDownPicker
            style={styles.dropdown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}

            multiple={true}
            mode="BADGE"
            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        />
    );
}