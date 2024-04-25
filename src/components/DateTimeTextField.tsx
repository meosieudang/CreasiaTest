import { StyleSheet, Text, Pressable, View, useColorScheme } from 'react-native'
import React from 'react'
import HStack from './HStack'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useToggle } from 'react-use';
import moment from 'moment';

const DateTimeTextField = ({ title, placeholder, value, field }) => {
    const colorScheme = useColorScheme();
    const [on, toggle] = useToggle(false);
    const onConfirm = (date: Date) => {
        toggle(false);
        field.onChange(date);
    };

    console.log(value, 'vl');

    return (
        <HStack style={{ marginBottom: 16 }}>
            <Text style={{ flex: .5 }}>{title}</Text>
            <Pressable onPress={toggle} style={styles.pressable}>
                <Text>{Boolean(value) ? moment(value).format('DD/MM/yyyy') : placeholder}</Text>
            </Pressable>

            <DateTimePickerModal
                isDarkModeEnabled={colorScheme === 'dark'}
                date={new Date(value)}
                maximumDate={new Date()}
                isVisible={on}
                mode="date"
                onConfirm={onConfirm}
                onCancel={() => toggle(false)}

            />
        </HStack>
    )
}

export default DateTimeTextField

const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        borderWidth: .5,
        borderRadius: 4,
        paddingHorizontal: 4,
        height: 30,
        justifyContent: 'center'
    }
})