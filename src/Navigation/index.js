import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Classes from '../screens/ClassesOverview';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';
import AudioOverview from '../screens/AudioOverview';
import ClassHomeScreen from '../screens/ClassHomeScreen';
import CreateScheduleScreen from '../screens/CreateScheduleScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import NotesOverview from '../screens/NotesOverview';
import RecordingScreen from '../screens/RecordingScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
     return (
            <NavigationContainer>
                <Stack.Navigator screenOptions = {{
                    headerShown:false,
                    //ardStyle: { backgroundColor: '#1b1c29' },
                }}>

                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Classes" component={Classes} />
                <Stack.Screen name="AudioOverview" component={AudioOverview} />
                <Stack.Screen name="ClassHomeScreen" component={ClassHomeScreen} />
                <Stack.Screen name="CreateScheduleScreen" component={CreateScheduleScreen} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
                <Stack.Screen name="NotesOverview" component={NotesOverview} />
                <Stack.Screen name="RecordingScreen" component={RecordingScreen} />
                <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />

                </Stack.Navigator>
            </NavigationContainer>
            );
}
export default Navigation;
