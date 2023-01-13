import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/LogoCat.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import SignUpCreateButton from '../../components/SignUpCreateButton'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onCreateAccountPressed = () => {

        if(newPassword == confirmPassword){
            const AWS = require('aws-sdk');
            const ses = new AWS.SES({
                accessKeyId: 'AKIA5JIVNM7XK4U554G4',
                secretAccessKey: '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',
                region: 'us-west-2'
            });
            console.log(email)
            const emailAddress = email;

            ses.verifyEmailIdentity({ EmailAddress: emailAddress }, function(err, data) {
                if (err) console.log(err, err.stack);
                else console.log(data);
            });
            navigation.navigate('SignIn')
            return alert("You just created an account! Verify with the email sent to your account!")
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

            <Text style={{ color:"white", padding: 5, width: "100%" }}>Email:</Text>
            <CustomInput
                placeholder="email"
                value = {email}
                setValue={setEmail}
                margVer={4}
            />

            <Text style={{ color:"white", padding: 5, width: "100%" }}>New Password:</Text>
            <CustomInput
                placeholder="Password"
                value = {newPassword}
                setValue= {setPassword}
                secureTextEntry={true}
                margVer={4}
            />
            <Text style={{ color:"white", padding: 5, width: "100%" }}>Confirm Password:</Text>
            <CustomInput
                placeholder="Confirm Password"
                value = {confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry={true}
                margVer={4}
            />

            <CustomButton
                text = "Sign up"
                onPress={onCreateAccountPressed}
                username = {email}
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
