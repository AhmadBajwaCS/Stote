import { Modal, TextInput, View, Text, Button } from 'react-native';
import { useState } from 'react';

const CustomDialog = ({ isModalVisible, setIsModalVisible, onSubmit, setClassItem }) => {
  const [userInput, setUserInput] = useState('');
  
  const handleSubmit = () => {
    setIsModalVisible(false);
    setClassItem(userInput);
    onSubmit(userInput);

  }
  
  return (
    <Modal visible={isModalVisible}>
      <View>
        <Text>What would you like to name your class?</Text>
        <TextInput
          placeholder="Enter text"
          onChangeText={text => setUserInput(text)}
          value={userInput}
        />
        <Button title="Submit" onPress={()=>onSubmit(userInput)}  />
      </View>
    </Modal>
  );
};

export default CustomDialog;