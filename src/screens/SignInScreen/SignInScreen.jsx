import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/StoteLogo_v2.png'
import FBLogo from '../../../assets/images/facebookLogo.png'
import GLogo from '../../../assets/images/google.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from "../SignUpScreen";
import ForgotPassword from "../ForgotPassword";
import Classes from "../ClassesOverview";
import { Facebook, LoginManager, LoginButton, AccessToken, GraphRequest} from 'react-native-fbsdk-next';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    // This function runs when Sign in is pressed.
    const onSignInPressed = () => {
        console.warn("Sign in");
        if((username == "admin") && (password == "stote123")){
            alert("Welcome User");
            navigation.navigate('Classes');     // navigates to the Classes page (ClassesOverview.jsx)
        }
        else{
            alert("No sign in for you!");
        }
    };

    // This function runs when 'forgot password?' is pressed
    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
        navigation.navigate('ForgotPassword');
    };

    // This function runs when the facebook icon is pressed.
    const onSignInFacebook = () => {
        console.warn("Sign in w/ Facebook");
         LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            result => {
              if (result.isCancelled) {
                console.warn('Login cancelled');
              } else {
                console.log('Logged in!');
                navigation.navigate('Classes'); // navigates to the Classes page (ClassesOverview.jsx)
              }
            },
            error => {
              console.error(error);
            }
        );

    };

    // This function runs when the google icon is pressed.
    const onSignInGoogle = () => {
        console.warn("Sign in w/ Google");
    };

    // This function runs when the Sign Up button is pressed.
    const onSignUpPressed = () => {
        //console.warn("Sign Up");
        navigation.navigate('SignUp'); // navigates to the sign up screen (ForgotPassword.jsx)
    };

    return (
        <View style = {styles.root}>

            <Image  // Displays the logo
                source={Logo}
                style ={ [styles.logo, {height: height * 0.3 }] }
                resizeMode = "contain"
            />

            <CustomInput    // Username input box
                placeholder="Username"
                value = {username}
                setValue={setUsername}
            />

            <CustomInput    // Password input box
                placeholder="Password"
                value = {password}
                setValue={setPassword}
                secureTextEntry={true}
            />


            <View style={{ flexDirection: "row" ,marginLeft:"1%",justifyContent: 'space-between', } /* spaces buttons in a row*/}>

                <CustomButton   // forgot password button
                    text = "forgot password?"
                    onPress={onForgotPasswordPressed}
                    type = "TER"
                />

                <CustomButton  // Create Account button
                    text = "Create Account"
                    onPress={onSignUpPressed}
                    type = "TER"
                />

            </View>

            <CustomButton   // Sign in button
                text = "Sign in"
                onPress = { onSignInPressed }
            />

            <Text style={{ color:"white", padding: 5 }}>
                Or Sign In With
            </Text>

            <View style={{ flexDirection: "row" ,marginLeft:"1%",justifyContent: 'space-between', }} /* spaces logos in a row*/ >
                <CustomButton
                    source = {FBLogo}
                    onPress={onSignInFacebook}
                    type = "SOC"
                    bgColor = "#aec2fc"
                />
                <CustomButton
                    source = {GLogo}
                    //onPress={onSignInPressed()}
                    type = "SOC"
                    bgColor = "#ffe3db"
                />
            </View>

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
