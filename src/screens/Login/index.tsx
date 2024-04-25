import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Profile from '@/screens/Profile'
import Container from '@/components/Container'
import { vi } from '@/localization'
import HStack from '@/components/HStack'
import { colors } from '@/themes/color'
import * as yup from 'yup';
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldPrimary from '@/components/TextFieldPrimary'
import useAuthApi from '@/hooks/useAuthApi'
import { useSelector } from '@/store'

const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
});

type LoginForm = {
    username: string;
    password: string;
};

const Login = () => {
    const { mLogin } = useAuthApi({})
    const { error } = useSelector((state) => state.account);
    const [loading, setLoading] = useState(false)

    const { control, handleSubmit, formState, reset } = useForm<LoginForm>({
        defaultValues: {
            username: '',
            password: '',

        },
        resolver: yupResolver(validationSchema)
    });


    const onSubmit = (values: LoginForm) => {
        setLoading(true)
        setTimeout(() => {
            mLogin(values)
            setLoading(false)
        }, 1000);
    };

    return (
        <View style={{ justifyContent: 'center', backgroundColor: colors.grey500, flex: 1, padding: 8, borderRadius: 4, }}>
            <View style={{ backgroundColor: colors.paper, padding: 8, paddingVertical: 24 }}>
                <Text style={{ textAlign: 'center', }}>{vi.login.toUpperCase()}</Text>
                <Text style={{ marginVertical: 16, textTransform: 'capitalize' }}>{vi.login_system}</Text>
                <TextFieldPrimary
                    error={Boolean(formState.errors['username'])}
                    helperText={Boolean(formState.errors['username']) && formState.errors['username']?.message} control={control} name='username' placeholder={vi.username} />
                <TextFieldPrimary
                    error={Boolean(formState.errors['password'])}
                    helperText={Boolean(formState.errors['password']) && formState.errors['password']?.message} control={control} name='password' placeholder={vi.pass} />
                {Boolean(error) && <Text style={{ marginVertical: 8, color: colors.orangeDark, textAlign: 'center' }}>{error}</Text>}

                <HStack style={{ justifyContent: 'space-between' }}>
                    <Pressable
                    ><Text style={{ textDecorationLine: 'underline', fontSize: 12 }}>{vi.forgot_pass}</Text></Pressable>
                    <Pressable onPress={handleSubmit(onSubmit)} style={{ backgroundColor: colors.orangeDark }}>
                        <Text style={{ color: colors.paper, paddingHorizontal: 16, paddingVertical: 8 }}>{loading ? 'Loading' : vi.login.toUpperCase()}</Text>
                    </Pressable>
                </HStack>
            </View>

        </View>
    )
}


export default Login

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 16
    }
})