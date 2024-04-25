// third-party
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

// project imports
import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['account'],
    blacklist: ['']
};

const middlewares: any = [];

if (__DEV__) {
    middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }), ...middlewares]
});

const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch }: any = store;

const useDispatch: any = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persister, dispatch, useSelector, useDispatch };
