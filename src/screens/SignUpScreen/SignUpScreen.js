import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/LogoCat.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import SignUpCreateButton from '../../components/SignUpCreateButton'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onCreateAccountPressed = () => {

        if(newPassword == confirmPassword){
            navigation.navigate('SignIn')
            return alert("You just created an account!")
        }
        else{
            return alert("Your passwords don't seem to match!")
        }
        return undefined;
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
                value = {newPassword}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomInput
                placeholder="Confirm Password"
                value = {confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry={true}
            />

            <CustomButton
                text = "Sign up"
                onPress={onCreateAccountPressed()}
                username = {username}
                password = {newPassword}
                confpassword = {confirmPassword}
            />

            <SignUpCreateButton
                username = {username}
                password = {newPassword}
                confpassword = {confirmPassword}
            />
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
    }

});

export default SignUpScreen;
