import { StyleSheet, Text, View, Image, Pressable, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { vi } from '@/localization'
import HStack from '@/components/HStack'
import { colors } from '@/themes/color'
import { useController, useForm, useWatch } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToggle } from 'react-use'
import Title from './components/Title'
import TextField from '@/components/TextField'
import useAuthApi from '@/hooks/useAuthApi'
import DateTimeTextField from '@/components/DateTimeTextField'
import ImageCropPicker from 'react-native-image-crop-picker'
import Radio from './components/RadioButtonGender'
import { useSelector } from '@/store'


interface Form {
    id_employee: string;
    name_employee: string;
    position: string;
    dob: Date;
    dob_create: Date;
    gender: string;
    id: string
    email: string;
    phone_number: number | null;
    city: string;
    address: string;
    username: string
    pass: string
    confirm_pass: string,
    photo: string | undefined
}

const validationSchema = yup.object({
    id_employee: yup.string().required(),
    name_employee: yup.string().required(),
    dob: yup
        .date()
        .required('Required'),
    dob_create: yup
        .date()
        .required('Required'),
    position: yup.string().required(),
    email: yup.string().email().required(),
    phone_number: yup.string().required().nullable(),
    address: yup.string().required(),
    id: yup.string().required(),
    username: yup.string().required(),
    pass: yup
        .string()
        .max(255)
        .required()
    ,
    confirm_pass: yup
        .string()
        .required()
        .oneOf([yup.ref('pass'), null], 'confirm password not match')
});

const Profile = React.memo(() => {
    const [loading, setLoading] = useState(false)
    const { mUpdateProfile } = useAuthApi({})
    const { user } = useSelector(state => state.account)
    const {
        handleSubmit,
        control,
        formState: { errors, },
        setValue,
        reset, getValues
    } = useForm<Form>({
        defaultValues: {
            id_employee: '',
            name_employee: '',
            position: '',
            dob: new Date(),
            gender: '',
            id: '',
            email: '',
            phone_number: null,
            address: '',
            username: '',
            pass: '',
            confirm_pass: '',
            dob_create: new Date(),
            photo: ''
        },
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        //@ts-ignore
        reset({ ...user, pass: '', confirm_pass: '' });
    }, [user]);

    const onSubmit = (values: Form) => {
        console.log(values, 'values');

        setLoading(true)
        setTimeout(() => {
            mUpdateProfile(values)
            setLoading(false)
        }, 2);
    };
    const { field: fieldDob } = useController({ name: 'dob', control });
    const dobWatch = useWatch({ name: 'dob', control });

    const dobCreateWatch = useWatch({ name: 'dob_create', control });
    const { field: fieldDobCreate } = useController({ name: 'dob_create', control });
    const { field: fieldPhoto } = useController({ name: 'photo', control });
    const { field: fieldGender } = useController({ name: 'gender', control });
    const genderWatch = useWatch({ name: 'gender', control });


    const onPressImage = async () => {
        const imgPicker = await ImageCropPicker.openPicker({ mediaType: 'photo' });
        const img = Platform.OS === 'ios' ? imgPicker?.sourceURL ?? '' : imgPicker.path;

        if (imgPicker) {
            console.log(imgPicker, 'img');
            setValue('photo', img)

        }
    };

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={{ flex: 1, padding: 8 }}>
                <Text style={{ color: colors.orangeDark, fontSize: 16 }}>{vi.update_profile}</Text>
                <Title title={vi.info_personal} />
                <HStack style={{ marginBottom: 16 }}>
                    <Text style={{ flex: .5 }}>{vi.photo}</Text>
                    <Pressable onPress={onPressImage} style={{ flex: 1 }}>
                        {Boolean(getValues('photo')) ? <Image style={{ width: 100, height: 100 }} source={{ uri: getValues('photo') }} /> : <Text>{'photo'}</Text>}
                    </Pressable>
                </HStack>

                <TextField
                    name="id_employee"
                    title={vi.id_employee}
                    control={control}
                    error={Boolean(errors['id_employee'])}
                    helperText={Boolean(errors['id_employee']) && (errors['id_employee']?.message)}
                    InputProps={{ placeholder: 'Enter your ID' }}
                />

                <TextField
                    name="name_employee"
                    title={vi.name_employee}
                    control={control}
                    error={Boolean(errors['name_employee'])}
                    helperText={Boolean(errors['name_employee']) && (errors['name_employee']?.message)}
                    InputProps={{ placeholder: 'Enter your Name' }}
                />

                <TextField
                    name="position"
                    title={vi.position}
                    control={control}
                    error={Boolean(errors['position'])}
                    helperText={Boolean(errors['position']) && (errors['position']?.message)}
                    InputProps={{ placeholder: 'Enter your Position' }}
                />

                <Radio field={fieldGender} value={getValues('gender')} />


                <DateTimeTextField value={dobWatch} field={fieldDob} title={vi.dob} placeholder={vi.placeholder_dob} />

                <TextField
                    name="id"
                    title={vi.id}
                    control={control}
                    error={Boolean(errors['id'])}
                    helperText={Boolean(errors['id']) && (errors['id']?.message)}
                    InputProps={{ placeholder: 'Enter your ID' }}
                />

                <TextField
                    name="email"
                    title={vi.email}
                    control={control}
                    error={Boolean(errors['email'])}
                    helperText={Boolean(errors['email']) && (errors['email']?.message)}
                    InputProps={{ placeholder: 'Enter your Email' }}
                />

                <DateTimeTextField value={dobCreateWatch} field={fieldDobCreate} title={vi.date_address} placeholder={vi.placeholder_date_create} />



                <TextField
                    name="phone_number"
                    title={vi.phone_number}
                    control={control}
                    error={Boolean(errors['phone_number'])}
                    helperText={Boolean(errors['phone_number']) && (errors['phone_number']?.message)}
                    InputProps={{ placeholder: 'Enter your Phone', keyboardType: 'number-pad' }}
                />

                <TextField
                    name="address"
                    title={vi.address}
                    control={control}
                    error={Boolean(errors['address'])}
                    helperText={Boolean(errors['address']) && (errors['address']?.message)}
                    InputProps={{ placeholder: 'Enter your Address' }}
                />

                <Title title={vi.info_login} />


                <TextField
                    name="username"
                    title={vi.username}
                    control={control}
                    error={Boolean(errors['username'])}
                    helperText={Boolean(errors['username']) && (errors['username']?.message)}
                    InputProps={{ placeholder: 'Enter your Username', }}
                />
                <TextField
                    name="pass"
                    title={vi.pass}
                    control={control}
                    error={Boolean(errors['pass'])}
                    helperText={Boolean(errors['pass']) && (errors['pass']?.message)}
                    InputProps={{ placeholder: 'Enter your password', }}
                />
                <TextField
                    name="confirm_pass"
                    title={vi.confirm_pass}
                    control={control}
                    error={Boolean(errors['confirm_pass'])}
                    helperText={Boolean(errors['confirm_pass']) && (errors['confirm_pass']?.message)}
                    InputProps={{ placeholder: 'Enter your confirm password', }}
                />

                <Pressable onPress={handleSubmit(onSubmit)} style={{ backgroundColor: colors.primaryDark, alignSelf: 'flex-end' }}>
                    <Text style={{ color: colors.paper, paddingHorizontal: 16, paddingVertical: 8 }}>{loading ? 'Updating...' : vi.update.toUpperCase()}</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
})

export default Profile

const styles = StyleSheet.create({
    input: {
        borderWidth: 1
    }
})