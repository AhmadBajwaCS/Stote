import React from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, View, Text, TextInput, StyleSheet, Pressable, Image} from 'react-native';

// The custom button is our main use for buttons. We have different props that style different types of buttons as well.
const CustomButton = ({username, password, confpassword, onPress, text, type="PRI", bgColor, fgColor, width, source}) => {

    if (text != null){  // this is a placeholder, we need to change this. right now, any button without a text will print a source image.
        return (

            <TouchableOpacity onPress={onPress} style = {[  // an array of styles is being passed here
                styles.container,   // this is the default it goes to
                styles[`container_${type}`], // if it finds something with the type appended e.g. container_PRI, it will point to that style. This overrides the "styles.container" above
                bgColor ? {backgroundColor: bgColor} : {}, // If a bgColor is passed as a prop, this overrides the bgColor that the style has taken in before.

            ]}>

                <Text style={[
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

            <TouchableOpacity  onPress={onPress} style = {[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
                <Image source={source} style={styles.ImageIconStyle}/>
            </TouchableOpacity >
        );
    }
};

const styles = StyleSheet.create({  // types of buttons: PRI, TER, and , SOC

    // default container style
    container: {

        width: '70%',

        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        padding: 15,
        marginVertical: 5,

    },

    // primary buttons (PRI) like Sign In or Sign Up
    container_PRI: {
        backgroundColor: '#35a5c4'
        //1e6776
    },

    // greyed out tertiary buttons (TER) like forgot password? or Create Account
    container_TER: {
        width: "75%",
        padding: 0,
    },

    // social API buttons(SOC) like Google or Facebook
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

    // default text style
    text: {
        color: 'white',
        fontSize: 18,
     },

    // primary button text style
    text_PRI: {
        color: 'white',
    },

    // tertiary button text style
    text_TER: {
        color: 'gray',
        fontSize: 12,
    }
});

export default CustomButton;