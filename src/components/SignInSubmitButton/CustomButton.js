import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Pressable, Image} from 'react-native';


const CustomButton = ({username, password, onPress, text, type="PRI", bgColor, fgColor, width, source}) => {
    const login = () => {
        if((username == "admin") && (password == "stote123")){
            return alert("Welcome User")
        }
    }
    if (text != null){
        return (
            <TouchableOpacity onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
                <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
            </TouchableOpacity>
        );
        }
    else{
        return (
            <TouchableOpacity onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
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
        backgroundColor: '#1e6776',
        width: '20%',
        marginHorizontal:20,
    },

    ImageIconStyle:{
        width: 50,
        height: 50,
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