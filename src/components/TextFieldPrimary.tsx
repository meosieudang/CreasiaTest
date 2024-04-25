
import React from 'react';
import { useController } from 'react-hook-form';
import { StyleProp, TextInputProps, Text, TextInput, View, TextStyle, StyleSheet } from 'react-native';
import { colors } from '@/themes/color';

type ITextFieldPrimary = {
    helperText?: React.ReactNode;
    control: any;
    name: string;
    error?: boolean;
    InputProps?: TextInputProps;
    InputStyle?: Omit<StyleProp<TextStyle>, 'textAlgin' | 'backgroundColor'> & {
        textAlign?: 'center' | 'left' | 'right' | undefined;
    };
    placeholder: string
};

const TextFieldPrimary: React.FC<ITextFieldPrimary> = (props) => {

    const { field } = useController({ name: props.name, control: props.control });
    console.log(props.helperText);

    return (
        <View style={{
            marginBottom: 16

        }}>
            <TextInput placeholder={props.placeholder} value={field.value} onChangeText={field.onChange} style={styles.input} {...props.InputProps}
                {...props.InputStyle} />

            {props.helperText && props.error ? (
                <Text style={{
                    fontSize: 12,
                    marginTop: 4, color: props.error ? colors.errorMain : colors.darkBackground
                }} >
                    {props.helperText}
                </Text>
            ) : null}
        </View>
    );
};

export default TextFieldPrimary;
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
    }
})