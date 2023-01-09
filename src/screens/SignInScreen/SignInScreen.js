import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/LogoCat.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/SignInSubmitButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    return (
        <View style = {styles.root}>
            <Image
                source={Logo}
                style ={ [styles.logo, {height: height * 0.3 }] }
                resizeMode = "contain"
            />

            <CustomInput
                placeholder="Username"
                value = {username}
                setValue={setUsername}
            />

            <CustomInput
                placeholder="Password"
                value = {password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton
                text = "Sign in"
                onPress={onSignInPressed()}
                username = {username}
                password = {password}
            />

            <CustomButton
                text = "forgot password?"
                onPress={onForgotPasswordPressed()}
                type = "TER"
            />


            <SignUpRequestButton />

        </View>
    );
};

const styles = StyleSheet.create({

   root: {
       alignItems: 'center',
       padding: 20,

   },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginVertical: 10,
    }

});

export default SignInScreen;
