import React, {useState} from 'react';
import { StyleSheet, Text, View } from "react-native";


/* (Delete this comment when working on page)
    Framework only - needs to be worked on
        + Display categories: notes, messages, thoughts, audio, schedule event
*/
const ClassHomeScreen = ({route}) => {
// };
//     const [titleText, setTitleText] = useState("Class");
    const titleText = route.params.name;
//     console.log(route.params.name);
    const body = "Hello class world";

    return (

            <Text style={styles.baseText}>
                <Text style = {styles.titleText} >
                    {titleText}
                    {'\n'}
                </Text>

            </Text>
        );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        textAlign: 'center',
        backgroundColor: '#222431',

      },
      titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        borderColor: '#FFF',
        color: 'white',
  },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
    }
});



export default ClassHomeScreen;
