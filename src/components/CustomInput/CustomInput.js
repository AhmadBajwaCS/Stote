import React from 'react';
import { View, Text, TextInput, StyleSheet, keyboardType} from 'react-native';


const CustomInput = ({value, setValue, placeholder, secureTextEntry, margVer}) => {

    return (
        <View style = {[styles.container, margVer ? {marginVertical: margVer} : {},]} >
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
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