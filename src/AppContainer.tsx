import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import navigation from '@/ultis/navigation';
import OutsideStackNavigator from '@/navigation/OutsideStack';

const Stack = createNativeStackNavigator();

const AppContainer = () => {




    return (
        <NavigationContainer ref={navigation.navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
                <Stack.Screen name="OutsideStack" component={OutsideStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;
