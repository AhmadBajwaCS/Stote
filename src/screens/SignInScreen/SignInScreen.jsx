import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/StoteTempLogo.png'
import FBLogo from '../../../assets/images/facebook.png'
import GLogo from '../../../assets/images/google.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/SignInSubmitButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from "../SignUpScreen";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSignInFacebook = () => {
        console.warn("Sign in w/ Facebook")
    }

    const onSignInGoogle = () => {
        console.warn("Sign in w/ Google")
    }

    const onSignUpPressed = () => {
        console.warn("Sign Up");
        navigation.navigate('SignUp');
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

            <View style={{ flexDirection: "row" ,marginLeft:"1%",justifyContent: 'space-between', }}>

                <CustomButton
                    text = "forgot password?"
                    onPress={onForgotPasswordPressed()}
                    type = "TER"
                />

                <CustomButton
                    text = "Create Account"
                    onPress={onSignUpPressed()}
                    type = "TER"
                />

            </View>

            <CustomButton
                text = "Sign in"
                onPress={onSignInPressed()}
                username = {username}
                password = {password}
            />

            <Text style={{ color:"white", padding: 5 }}>
                Or Sign In With
            </Text>

            <View style={{ flexDirection: "row" ,marginLeft:"1%",justifyContent: 'space-between', }}>
                <CustomButton
                    source = {FBLogo}
                    onPress={onSignInPressed()}
                    type = "SOC"
                />
                <CustomButton
                    source = {GLogo}
                    onPress={onSignInPressed()}
                    type = "SOC"
                />
            </View>

            {/*<CustomButton
                text = "Sign in with Google"
                onPress={onSignInFacebook()}
                username = {username}
                password = {password}
            />

            <CustomButton
                text = "Sign in"
                onPress={onSignInGoogle()}
                username = {username}
                password = {password}
            />*/}


            {
                //<SignUpRequestButton />
            }

        </View>
    );
};

const styles = StyleSheet.create({

   root: {
       flex: 1,
       alignItems: 'center',
       padding: 20,
       backgroundColor: '#222431'
   },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginVertical: 10,
    }

});

export default SignInScreen;