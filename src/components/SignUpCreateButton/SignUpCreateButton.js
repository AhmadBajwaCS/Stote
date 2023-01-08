import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const SignUpCreateButton = ({username, password, confpassword}) => {
    const navigation = useNavigation();
    const create = () => {
        if(password == confpassword){
            navigation.navigate('SignIn')
            return alert("You just created an account!")
        }
        else{
            return alert("Your passwords don't seem to match!")
        }
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={create}>
                  <Text style={styles.loginButtonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
     }
});

export default SignUpCreateButton;