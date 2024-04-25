import HStack from '@/components/HStack';
import { vi } from '@/localization';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Radio = ({ field, value }) => {
    console.log(value, 'vlradio');

    const [checked, setChecked] = useState(0);
    var gender = ['Male', 'Female'];

    useEffect(() => { setChecked(value) }, [value])

    return (
        <HStack style={{ marginBottom: 16, }}>
            <Text style={{ flex: .5 }}>{vi.gender}</Text>
            <View style={{ borderWidth: .5, height: 40, justifyContent: 'center', flex: 1, borderRadius: 4 }}>
                <View style={styles.btn}>
                    {gender.map((gender, key) => {
                        return (
                            <View key={gender} >
                                {checked == key ? (
                                    <TouchableOpacity style={styles.btn}>
                                        <Image
                                            style={styles.img}
                                            source={require('../../../img/uncheck.png')}
                                        />
                                        <Text>{gender}</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => {
                                            console.log(key);

                                            field.onChange(key)
                                            setChecked(key);
                                        }}
                                        style={styles.btn}>
                                        <Image
                                            style={styles.img}
                                            source={require('../../../img/check.png')}
                                        />
                                        <Text>{gender}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        );
                    })}
                </View>
            </View>

        </HStack>
    );
};

const styles = StyleSheet.create({
    radio: {
        flexDirection: 'row',
    },
    img: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',

    },
});

export default Radio;