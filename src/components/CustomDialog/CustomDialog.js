import { Modal, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Animated  } from 'react-native';
import React, { useState } from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDialog = ({ isModalVisible, setIsModalVisible, onSubmit }) => {
  const [userInput, setUserInput] = useState('');

    const handleSubmit = () => { //01/12/23 @deshpadmakumar
        setUserInput("") ;
    }

  return (
    <Modal visible={isModalVisible} style={styles.modal} transparent={true}>
      <View style={styles.dialog}>

        <Text style={{color : "white"}}>What would you like to name your class?</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Class Name"
          placeholderTextColor="#505050"
          onChangeText={text => setUserInput(text)}
          value={userInput}
        />
        <TouchableOpacity onPress={()=> { handleSubmit(); onSubmit(userInput);}} style = {styles.submit} >
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

    textInput:{
        marginVertical:20,
        height: 41,
        width: 290,
        borderRadius: 8,
        borderWidth:1,
        color: "black",
        backgroundColor: '#FFFFFF',
        fontSize:12,

    },

    submit:{
      backgroundColor: "#35A5C4",
      width: 290,
      maxWidth: 290,
      alignItems:'center',
      borderRadius: 15,
    },
    submitText:{
      color: "white",
      fontWeight: 'bold',
      fontSize: 24,
      paddingVertical: 5,
    },

    dialog: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#1B1C29',
        width: '90%',
        top: 200,
        position: 'absolute',
        alignSelf: 'center',
        borderColor: '#4BC5E7',
        borderWidth: 2,
        borderRadius: 9,
        paddingVertical: 20,
        paddingHorizontal: 10,
        //marginVertical: 5,

    },

 });

export default CustomDialog;