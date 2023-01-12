import { Modal, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Animated  } from 'react-native';
import React, { useState } from 'react';
import CustomButton from "../CustomButton";

const CustomDialog = ({ isModalVisible, setIsModalVisible, onSubmit }) => {
  const [userInput, setUserInput] = useState('');

    const handleSubmit = () => { //01/12/23 @deshpadmakumar
        setUserInput("") ;
    }

  return (
    <Modal visible={isModalVisible} style={styles.modal} transparent={true}>
      <View style={styles.dialog}>

        <Text>What would you like to name your class?</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Class Name"
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
        width: 200,
        height: 35,
        borderRadius: 20,
        borderWidth:1,
        borderColor:'gray',
        fontSize:12,
    },

    submit:{
        width:"100%",
        height: "30%",
        backgroundColor: '#35a5c4',
        borderRadius: 10,
    },

    submitText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },

    dialog: {
        backgroundColor: '#ffffff',
        width: '80%',
        top: 200,
        position: 'absolute',
        alignSelf: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        //marginVertical: 5,

    },

 });

export default CustomDialog;