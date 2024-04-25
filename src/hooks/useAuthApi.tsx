import { store, useDispatch } from '@/store';
import { hasError, setUpdateProfile } from '@/store/slices/account';
import navigation from '@/ultis/navigation';
import { Alert } from 'react-native'

const useAuthApi = ({

}: {

    }) => {
    const dispatch = useDispatch();



    const mLogin = ({ username, password }) => {
        const currentState = store.getState().account

        if (username === currentState.user?.username && password === currentState.user?.pass) {
            navigation.navigate('Profile')
            return dispatch(hasError(''))
        }
        return dispatch(hasError('username or password not correct'))
    }

    const mUpdateProfile = (data) => {
        dispatch(setUpdateProfile(data))
        Alert.alert(
            'Title',
            'Update Successfully! Please login again',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.replace('LoginPage'),
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );
    }



    return {

        mLogin,
        mUpdateProfile
    };
};

export default useAuthApi;
