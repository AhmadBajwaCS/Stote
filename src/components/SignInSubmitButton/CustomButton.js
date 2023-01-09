import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({username, password, onPress, text, type="PRI"}) => {
    const login = () => {
        if((username == "admin") && (password == "stote123")){
            return alert("Welcome User")
        }
    }
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {

        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        padding: 15,
        marginVertical: 5,

    },

    container_PRI: {
        backgroundColor: 'green'
    },

    container_TER: {

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