import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

// The custom input is our main use for text input boxes. It takes in props for blues, if the text should be hidden, and the vertical margin
const CustomInput = ({value, setValue, placeholder, keyboardType, secureTextEntry, margVer}) => {


    return (
        <View style = {[styles.container, margVer ? {marginVertical: margVer} : {},]} >
            <TextInput
                value={value}
                keyboardType={keyboardType}
                onChangeText={setValue}
                placeholder={placeholder}   // the greyed out text that it displays when nothing is written
                style={styles.input}
                SecureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,

    },

    input: {},

});

export default CustomInput;