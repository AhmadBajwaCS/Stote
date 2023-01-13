import React, {useState} from 'react'
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/StoteLogo.png'
import FBLogo from '../../../assets/images/facebookLogo.png'
import GLogo from '../../../assets/images/google.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from "../SignUpScreen";
import Classes from "../ClassesOverview";
import ChangePassword from "../ChangePassword";
import Mailer from 'react-native-mail';

const ForgotPassword = () => {

    const navigation = useNavigation();
    const AWS = require('aws-sdk');
    const [resetEmail, setResetEmail] = useState();
    const [generatedOTP, setGeneratedOTP] = useState();
    const [inputOTP, setInputOTP] = useState();



    const handleChange = (text, index) => {
        const newOTP = [...otp];
        newOTP[index] = text;
        setOTP(newOTP);
    }

    const randomOTP = () => {
        setGeneratedOTP(Math.floor(Math.random() * 9000) + 1000)
    }
    
    const validateOTP = () =>{
        if (inputOtp == generatedOTP){
            navigation.navigate('ChangePassword')
        }
        else{
            alert("OTP was invalid.")
        }
    }

    const sendEmail = () => {
        console.log(resetEmail)
        const ses = new AWS.SES({
              accessKeyId: 'AKIA5JIVNM7XK4U554G4',
              secretAccessKey: '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',
              region: 'us-west-2'
        });
        const params = {
            Destination: {
                ToAddresses: [resetEmail]
            },
            Message: {
                Body: {
                    Text: {
                        Data: "Your OTP is: " + generatedOTP
                    }
                },
                Subject: {
                    Data: "OTP verification"
                }
            },
            Source: "stoteindustries@gmail.com"
        };

        // send the email
        ses.sendEmail(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });
    }


    return (
        <View>
            <View style = {styles.resetEmailText}>
                <CustomInput
                    placeholder="Reset Email"
                    value = {resetEmail}
                    setValue = {setResetEmail}
                    keyboardType = 'email-address'
                    margVer={4}
                />
                <View style = {styles.resetEmailSubmit}>
                    <CustomButton
                        text="Send OTP"
                        onPress= { sendEmail }

                    />
                </View>
            </View>

            <View style={styles.otpcontainer}>
                <CustomInput
                    placeholder="Input OTP"
                    value = { inputOTP }
                    setValue = { setInputOTP }
                    keyboardType = 'number-pad'
                    margVer={4}
                />
            </View>
            <View style = {styles.submitOTP}>
                <CustomButton
                    text="Confirm"
                    onPress= { validateOTP }
                />
            </View>
            <View>
                <CustomButton
                    text = "Resend OTP"
                    onPress={ sendEmail }
                    type = "TER"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
      resetEmailText:{
      },
      resetEmailSubmit:{
      },
      otpcontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width:'80%',
      },

      numberBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
      },
});

export default ForgotPassword;
