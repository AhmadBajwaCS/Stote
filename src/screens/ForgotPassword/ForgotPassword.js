import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/StoteLogo.png'
import FBLogo from '../../../assets/images/facebookLogo.png'
import GLogo from '../../../assets/images/google.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SignUpRequestButton from '../../components/SignUpRequestButton'
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from "../SignUpScreen";
import Classes from "../ClassesOverview";
import { Facebook, LoginManager, LoginButton, AccessToken, GraphRequest} from 'react-native-fbsdk-next';

const ForgotPassword = () => {


};

const styles = StyleSheet.create({

});

export default ForgotPassword;
