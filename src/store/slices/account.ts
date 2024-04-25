import { DefaultRootStateProps } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';


// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['account'] = {
    error: undefined,
    user: {
        id_employee: 123,
        name_employee: "Abc",
        position: 'Manager',
        dob: new Date(),
        gender: 0,
        id: '123456789',
        email: 'demo@gmail.com',
        phone_number: 987654321,
        address: 'HCM',
        username: 'demo',
        pass: 'demo'
    },
};

const slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // LOGIN
        setLoginSuccess(state, action) {
            state.user = action.payload;
        },

        // LOGOUT
        setUpdateProfileSuccess(state, action) {
            state.user = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


export function setLogin(data) {
    return () => {
        dispatch(slice.actions.setLoginSuccess(data));
    };
}

export function setUpdateProfile(data) {
    return () => {
        dispatch(slice.actions.setUpdateProfileSuccess(data));



    };
}

export function hasError(text: string | null) {
    return () => {
        dispatch(slice.actions.hasError(text));
    };
}
