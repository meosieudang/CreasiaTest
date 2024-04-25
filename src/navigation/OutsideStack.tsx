import LoginPage from '@/screens/Login';
import Profile from '@/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const OutsideStack = createNativeStackNavigator();

const OutsideStackNavigator = ({ navigation }) => {
    return (
        <OutsideStack.Navigator initialRouteName={'LoginPage'} screenOptions={{ headerShown: false }}>
            <OutsideStack.Screen name="LoginPage" component={LoginPage} />
            <OutsideStack.Screen name="Profile" component={Profile} />
        </OutsideStack.Navigator>
    );
};

export default OutsideStackNavigator;
