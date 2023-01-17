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


const ChangePassword = () => {
    alert("Hello world this is change password!")
    };

const styles = StyleSheet.create({

});

export default ChangePassword;
