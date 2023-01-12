import { Modal, StyleSheet, TextInput, View, Text, Button, TouchableWithoutFeedback, Animated  } from 'react-native';
import { useState } from 'react';

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
        <Button title="Submit" onPress={()=> { handleSubmit(); onSubmit(userInput);}} style={styles.submit}  />
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
        width:"50%",
        backgroundColor: 'red',
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