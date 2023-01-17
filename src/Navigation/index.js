import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Classes from '../screens/ClassesOverview';
import ForgotPassword from '../screens/ForgotPassword';


const Stack = createNativeStackNavigator();
const Navigation = () => {
     return (
            <NavigationContainer>
                <Stack.Navigator screenOptions = {{
                    headerShown:false,
                    //ardStyle: { backgroundColor: '#1b1c29' },
                }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="ForgotPassword" component={SignInScreen} />

                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Classes" component={Classes} />

                </Stack.Navigator>
            </NavigationContainer>
            );
}
export default Navigation;
