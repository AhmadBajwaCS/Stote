import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';


const CustomButton = ({username, password}) => {
    const login = () => {
        if((username == "admin") && (password == "stote123")){
            return alert("Alert", "YOU MAY ENTER CHILD")
        }
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={login}>
                  <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
     }
});

export default CustomButton;