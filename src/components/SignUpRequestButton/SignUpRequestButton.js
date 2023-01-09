import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const SignUpRequestButton = () => {
    const navigation = useNavigation();
    const toSignUp = () => {
        navigation.navigate('SignUp')
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={toSignUp}>
                  <Text style={styles.SignUpRequestButtonText}>Create An Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    SignUpRequestButtonText: {
        color: 'white',
        fontSize: 18,
     }
});

export default SignUpRequestButton;