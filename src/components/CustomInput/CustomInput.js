import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


const CustomInput = ({value, setValue, placeholder, secureTextEntry, margVer, keyboardType}) => {

    return (
        <View style = {[styles.container, margVer ? {marginVertical: margVer} : {},]} >
            <TextInput
                value={value}
                keyboardType={keyboardType}
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