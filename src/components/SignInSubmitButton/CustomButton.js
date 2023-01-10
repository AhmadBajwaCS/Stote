import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Pressable, Image} from 'react-native';
import { Facebook, LoginManager, LoginButton, AccessToken, GraphRequest} from 'react-native-fbsdk';

const CustomButton = ({username, password, onPress, text, type="PRI", bgColor, fgColor, width, source}) => {
    const login = () => {
        alert("Hello");
        if((username == "admin") && (password == "stote123")){
            return alert("Welcome User")
        }
    }
    const onSignInPressed = () => {
            console.warn("Sign in")
        }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSignInFacebook = () => {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            result => {
              if (result.isCancelled) {
                console.warn('Login cancelled');
              } else {
                console.log('Logged in!');
              }
            },
            error => {
              console.error(error);
            }
        );
    };

    const onSignInGoogle = () => {
        console.warn("Sign in w/ Google")
    }

    const onSignUpPressed = () => {
        console.warn("Sign Up");
        navigation.navigate('SignUp');
    }

    if (text != null){
        return (
            <TouchableOpacity onPress={onPress} style = {
                [
                    styles.container,
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {},
                ]}>

                <Text style={
                    [
                        styles.text,
                        styles[`text_${type}`],
                    ]}>

                    {text}
                </Text>
            </TouchableOpacity>
        );
        }
    else{
        return (
            <TouchableOpacity onPress={onSignInFacebook} style = {[styles.container, styles[`container_${type}`]]}>
                <Image source={source} style={styles.ImageIconStyle}/>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {

        width: '70%',

        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        padding: 15,
        marginVertical: 5,

    },

    container_PRI: {
        backgroundColor: '#1e6776'
    },

    container_TER: {
        width: "75%",
        padding: 0,
    },

    container_SOC:{
        backgroundColor: '#FFFFFF',
        width: '15%',
        height: '35%',
        marginHorizontal:20,
    },

    ImageIconStyle:{
        width: 35,
        height: 35,
    },

    text: {
        color: 'white',
        fontSize: 18,
     },

    text_PRI: {
        color: 'white',

    },

    text_TER: {
        color: 'gray',
        fontSize: 12,
    }
});

export default CustomButton;