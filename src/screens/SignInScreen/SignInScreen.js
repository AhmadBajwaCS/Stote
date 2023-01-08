import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/LogoCat.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

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
                username = {username}
                password = {password}
            />

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
    }

});

export default SignInScreen;