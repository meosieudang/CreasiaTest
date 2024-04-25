
import React from 'react';
import { useController } from 'react-hook-form';
import { StyleProp, TextInputProps, Text, TextInput, View, TextStyle, StyleSheet } from 'react-native';
import HStack from './HStack';
import { colors } from '@/themes/color';

type ITextField = {
    helperText?: React.ReactNode;
    control: any;
    name: string;
    title: string;
    error?: boolean;
    InputProps?: TextInputProps;
    InputStyle?: Omit<StyleProp<TextStyle>, 'textAlgin' | 'backgroundColor'> & {
        textAlign?: 'center' | 'left' | 'right' | undefined;
    };
};

const TextField: React.FC<ITextField> = (props) => {

    const { field } = useController({ name: props.name, control: props.control });

    return (
        <View style={{ marginBottom: 16 }}>

            <HStack>
                <Text style={{ flex: .5 }}>{props.title}</Text>
                <View style={{ flex: 1 }}>
                    <TextInput style={styles.input} value={field.value} onChangeText={field.onChange} {...props.InputProps}
                        {...props.InputStyle} />
                    {props.helperText && props.error ? (
                        <Text style={[styles.helpText, { color: props.error ? colors.errorMain : 'grey.50' }]} >
                            {props.helperText}
                        </Text>
                    ) : null}
                </View>

            </HStack>

        </View>
    );
};

export default TextField;
const styles = StyleSheet.create({
    input: {
        padding: 0,
        borderWidth: .5,
        borderRadius: 4,
        paddingHorizontal: 4,
        height: 30
    },
    helpText: {
        fontSize: 12,
        marginTop: 4,
    }
})
